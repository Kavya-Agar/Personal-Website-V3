import { NextResponse } from "next/server";
import https from "node:https";

export const dynamic = "force-dynamic";

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

export type Quote = { symbol: string; price: number; change: number; changePct: number };
let cache: { quotes: Quote[]; at: number } | null = null;
const TTL = 60_000;

function httpsGet(url: string, extraHeaders: Record<string, string> = {}): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { "User-Agent": UA, ...extraHeaders }, agent: false }, (res) => {
      const buf: Buffer[] = [];
      res.on("data", (c: Buffer) => buf.push(c));
      res.on("end", () => resolve({ status: res.statusCode ?? 0, body: Buffer.concat(buf).toString() }));
    });
    req.on("error", reject);
    req.setTimeout(8000, () => { req.destroy(); reject(new Error("timeout")); });
  });
}

// Stooq l-endpoint: Symbol,Date,Time,Open,High,Low,Close,Volume,Name
const STOOQ_SYMBOLS: Record<string, string> = {
  "^GSPC": "^spx",
  "^DJI":  "^dji",
  "^IXIC": "^ndq",
};

async function fetchStooq(yahooSymbol: string): Promise<Quote | null> {
  try {
    const s = STOOQ_SYMBOLS[yahooSymbol];
    const url = `https://stooq.com/q/l/?s=${s}&f=sd2t2ohlcvn&e=csv`;
    const { status, body } = await httpsGet(url);
    if (status !== 200) return null;
    const parts = body.trim().split(",");
    if (parts.length < 7 || parts[1] === "N/D") return null;
    const open  = parseFloat(parts[3]);
    const close = parseFloat(parts[6]);
    if (isNaN(open) || isNaN(close)) return null;
    const change    = close - open;
    const changePct = (change / open) * 100;
    return { symbol: yahooSymbol, price: close, change, changePct };
  } catch { return null; }
}

async function fetchVix(): Promise<Quote | null> {
  try {
    const url = "https://query2.finance.yahoo.com/v8/finance/chart/%5EVIX?interval=1d&range=5d";
    const { status, body } = await httpsGet(url);
    if (status !== 200) return null;
    const meta = JSON.parse(body)?.chart?.result?.[0]?.meta;
    if (!meta?.regularMarketPrice) return null;
    const price = meta.regularMarketPrice as number;
    const prev  = (meta.chartPreviousClose ?? meta.previousClose ?? price) as number;
    return { symbol: "^VIX", price, change: price - prev, changePct: ((price - prev) / prev) * 100 };
  } catch { return null; }
}

export async function GET() {
  if (cache && Date.now() - cache.at < TTL) return NextResponse.json(cache.quotes);

  const [spx, dji, ndq, vix] = await Promise.all([
    fetchStooq("^GSPC"),
    fetchStooq("^DJI"),
    fetchStooq("^IXIC"),
    fetchVix(),
  ]);

  const quotes = [spx, dji, ndq, vix].filter((q): q is Quote => q !== null);
  if (!quotes.length) return NextResponse.json([], { status: 502 });

  cache = { quotes, at: Date.now() };
  return NextResponse.json(quotes);
}
