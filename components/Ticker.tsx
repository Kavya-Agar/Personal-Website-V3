"use client";

import { useEffect, useState } from "react";

const staticItems = [
  { label: "SKILLS",     value: "20+", change: "(+∞%)",      changeColor: "var(--green)", labelColor: "var(--yellow)" },
  { label: "PROJECTS",   value: "8",   change: "(+3 YTD)",   changeColor: "var(--green)", labelColor: "var(--yellow)" },
  { label: "AWARDS",     value: "5",   change: "(+2 YTD)",   changeColor: "var(--green)", labelColor: "var(--yellow)" },
  { label: "BUGS",       value: "0",   change: "(-100%)",    changeColor: "var(--red)",   labelColor: "var(--yellow)" },
  { label: "COFFEE/DAY", value: "∞",   change: "(+999%)",    changeColor: "var(--green)", labelColor: "var(--coffee)" },
  { label: "BEANS",      value: "∞",   change: "(roasting)", changeColor: "var(--green)", labelColor: "var(--coffee)" },
  { label: "COLD BREW",  value: "∞",   change: "(always on)",changeColor: "var(--green)", labelColor: "var(--coffee)" },
];

const SYMBOL_LABELS: Record<string, string> = {
  "^GSPC": "S&P 500",
  "^DJI":  "DOW",
  "^IXIC": "NASDAQ",
  "^VIX":  "VIX",
};

type MarketQuote = { symbol: string; price: number; change: number; changePct: number };

function fmt(price: number, symbol: string): string {
  if (symbol === "^VIX") return price.toFixed(2);
  return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtChange(q: MarketQuote): string {
  const sign = q.changePct >= 0 ? "+" : "";
  return `(${sign}${q.changePct.toFixed(2)}%)`;
}

type TickerItem = { label: string; value: string; change: string; changeColor: string; labelColor: string };

function TickerItemEl({ label, value, change, changeColor, labelColor }: TickerItem) {
  return (
    <span className="inline-flex items-center gap-1.5 mr-8 font-mono text-[10px] whitespace-nowrap">
      <span style={{ color: labelColor }}>{label}</span>
      <span style={{ color: "var(--text-primary)" }} className="font-bold">{value}</span>
      <span style={{ color: changeColor }}>{change}</span>
      <span style={{ color: "var(--text-muted)" }} className="ml-4">·</span>
    </span>
  );
}

export function Ticker() {
  const [marketItems, setMarketItems] = useState<TickerItem[]>([]);

  useEffect(() => {
    async function fetchMarket() {
      try {
        const res = await fetch("/api/market");
        if (!res.ok) return;
        const quotes: MarketQuote[] = await res.json();
        const items = quotes.map((q) => ({
          label:       SYMBOL_LABELS[q.symbol] ?? q.symbol,
          value:       fmt(q.price, q.symbol),
          change:      fmtChange(q),
          changeColor: q.changePct >= 0 ? "var(--green)" : "var(--red)",
          labelColor:  "var(--yellow)",
        }));
        setMarketItems(items);
      } catch {
        // silently fail — static items still show
      }
    }

    fetchMarket();
    const id = setInterval(fetchMarket, 60_000);
    return () => clearInterval(id);
  }, []);

  const allItems = [...marketItems, ...staticItems];

  return (
    <div
      className="fixed top-16 left-0 right-0 z-40 overflow-hidden"
      style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)", height: 36 }}
    >
      <div className="ticker-track flex items-center h-full w-max">
        {[...allItems, ...allItems].map((item, i) => (
          <TickerItemEl key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
