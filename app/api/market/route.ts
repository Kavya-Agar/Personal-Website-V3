import { NextResponse } from "next/server";
import https from "node:https";
import YahooFinance from "yahoo-finance2";

export const dynamic = "force-dynamic";

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/**
 * Shape consumed by `useIndices()` in components/news/useEdition.ts. `symbol` is
 * the canonical Yahoo-style ticker the frontend keys its labels off — both
 * providers below are mapped onto it, so switching providers needs no frontend
 * change.
 */
export type Quote = { symbol: string; price: number; change: number; changePct: number };

/** Canonical order — also the order "The Close" renders in. */
const SYMBOLS = ["^GSPC", "^DJI", "^IXIC", "^VIX"] as const;

/*
 * Provider history — the previous two sources broke on their side, not ours:
 *
 *  - Stooq (was SPX/DJI/IXIC): `q/l` now 404s for every symbol, even plain
 *    equities. `q/d/l` answers 200 with a JavaScript proof-of-work browser
 *    check (SHA-256 nonce -> POST /__verify -> cookie -> reload) instead of
 *    CSV. Unusable from a server; we're not going to defeat the bot check.
 *  - Yahoo Finance, called directly with a bare `https.get` (was VIX): persistent
 *    HTTP 429 on both query1 and query2.
 *
 * That second failure turned out to be fixable, not fatal: modern Yahoo Finance
 * requires a cookie + "crumb" (CSRF-style token) handshake before it'll answer
 * quote requests, which a bare GET never performs. `yahoo-finance2` implements
 * that handshake and was verified live for all four symbols. It is still
 * unofficial — Yahoo publishes no API and doesn't owe this library stability —
 * and the handshake has broken before on Yahoo's side:
 *   https://github.com/gadicc/yahoo-finance2/issues/764 ("Yahoo disables API
 *   access to quotes data") and #741 ("cookie/crumb issues after about 10-20
 *   minutes", reported on Next.js servers specifically).
 * Hence FRED as a fallback below, rather than trusting a single unofficial
 * source a third time.
 */
const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

async function fetchFromYahoo(symbols: readonly string[]): Promise<Map<string, Quote>> {
  const out = new Map<string, Quote>();
  try {
    const results = await yahooFinance.quote([...symbols]);
    for (const q of results) {
      const price = q.regularMarketPrice;
      const changePct = q.regularMarketChangePercent;
      if (typeof price !== "number" || typeof changePct !== "number") continue;
      out.set(q.symbol, {
        symbol: q.symbol,
        price,
        change: q.regularMarketChange ?? 0,
        changePct,
      });
    }
  } catch (err) {
    console.error("[market] yahoo-finance2 failed:", err instanceof Error ? err.message : err);
  }
  return out;
}

/*
 * Fallback: FRED (official, api.stlouisfed.org). Needs FRED_API_KEY (free, no
 * cost) — https://fred.stlouisfed.org/docs/api/api_key.html. Daily closes only
 * (no intraday, ~1 trading day of lag), used only for whatever Yahoo didn't
 * return, so a Yahoo outage degrades "The Close" to yesterday's numbers instead
 * of em-dashes.
 *
 * Use api.stlouisfed.org, NOT fred.stlouisfed.org/graph/fredgraph.csv — the
 * graph-CSV host accepts the TCP+TLS connection from Node and then hangs
 * indefinitely on the HTTP response itself (confirmed: 30s timeout, no error,
 * whereas curl on the same URL returns in <1s — application-layer filtering,
 * not a network issue). The documented API host has no such problem.
 */
const FRED_SERIES: Partial<Record<(typeof SYMBOLS)[number], string>> = {
  "^GSPC": "SP500",
  "^DJI": "DJIA",
  "^IXIC": "NASDAQCOM",
  "^VIX": "VIXCLS",
};

function httpsGet(url: string): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { "User-Agent": UA }, agent: false }, (res) => {
      const buf: Buffer[] = [];
      res.on("data", (c: Buffer) => buf.push(c));
      res.on("end", () => resolve({ status: res.statusCode ?? 0, body: Buffer.concat(buf).toString() }));
    });
    req.on("error", reject);
    req.setTimeout(8000, () => { req.destroy(); reject(new Error("timeout")); });
  });
}

async function fetchFromFred(symbols: string[]): Promise<Map<string, Quote>> {
  const out = new Map<string, Quote>();
  const apiKey = process.env.FRED_API_KEY;
  if (!apiKey || symbols.length === 0) return out;

  await Promise.all(
    symbols.map(async (symbol) => {
      const seriesId = FRED_SERIES[symbol as (typeof SYMBOLS)[number]];
      if (!seriesId) return;
      try {
        const url =
          `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}` +
          `&sort_order=desc&limit=10&file_type=json&api_key=${encodeURIComponent(apiKey)}`;
        const { status, body } = await httpsGet(url);
        if (status !== 200) {
          console.error(`[market] FRED ${seriesId} responded ${status}`);
          return;
        }
        const json = JSON.parse(body);
        const rows: { date: string; value: string }[] = json?.observations ?? [];
        // FRED marks holidays/weekends with "." rather than omitting the row.
        const numeric = rows
          .filter((r) => r.value !== ".")
          .map((r) => parseFloat(r.value))
          .filter((v) => Number.isFinite(v));
        const [latest, prev] = numeric;
        if (latest === undefined || prev === undefined) return;
        const change = latest - prev;
        out.set(symbol, { symbol, price: latest, change, changePct: (change / prev) * 100 });
      } catch (err) {
        console.error(`[market] FRED ${seriesId} failed:`, err instanceof Error ? err.message : err);
      }
    })
  );
  return out;
}

let cache: { quotes: Quote[]; at: number } | null = null;
const TTL = 60_000;

export async function GET() {
  if (cache && Date.now() - cache.at < TTL) return NextResponse.json(cache.quotes);

  const yahoo = await fetchFromYahoo(SYMBOLS);
  const missing = SYMBOLS.filter((s) => !yahoo.has(s));
  const fred = missing.length ? await fetchFromFred(missing) : new Map<string, Quote>();

  const quotes = SYMBOLS.map((s) => yahoo.get(s) ?? fred.get(s)).filter((q): q is Quote => q != null);

  // Don't cache an empty result — a transient failure should retry on the next
  // request rather than stick for the full TTL.
  if (!quotes.length) return NextResponse.json([], { status: 502 });

  cache = { quotes, at: Date.now() };
  return NextResponse.json(quotes);
}
