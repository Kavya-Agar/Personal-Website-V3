"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { isNYSEOpen } from "@/components/MarketStatus";
import type { BlogPostMeta } from "@/lib/blog";
import type { Teardown } from "@/lib/teardowns";
import { EDITIONS, type Edition } from "./data";

/* -- Edition (paper tint) -------------------------------------------------- */

const EDITION_KEY = "ka-edition";

/*
 * `<html data-edition>` is the source of truth — the inline script in app/layout.tsx
 * sets it before first paint, and globals.css reads it to pick the paper colour. So
 * the attribute is treated as an external store rather than mirrored into state,
 * which keeps the server snapshot ("morning") from clashing with a restored tint.
 */
const editionListeners = new Set<() => void>();

function subscribeEdition(onChange: () => void) {
  editionListeners.add(onChange);
  return () => {
    editionListeners.delete(onChange);
  };
}

function readEdition(): Edition {
  const value = document.documentElement.dataset.edition;
  return value && (EDITIONS as readonly string[]).includes(value)
    ? (value as Edition)
    : "morning";
}

/**
 * The design exposes `edition` as a morning/evening/sunday paper tint. Here it's a
 * reader-facing control, persisted so the reader keeps their edition.
 */
export function useEdition(): [Edition, () => void] {
  const edition = useSyncExternalStore<Edition>(
    subscribeEdition,
    readEdition,
    () => "morning"
  );

  const cycle = useCallback(() => {
    const next = EDITIONS[(EDITIONS.indexOf(readEdition()) + 1) % EDITIONS.length];
    document.documentElement.dataset.edition = next;
    try {
      localStorage.setItem(EDITION_KEY, next);
    } catch {
      /* private browsing — the tint just won't persist */
    }
    editionListeners.forEach((notify) => notify());
  }, []);

  return [edition, cycle];
}

/* -- Dateline and ET clock ------------------------------------------------- */

/**
 * Both values are empty until mount: they depend on the reader's clock, so
 * rendering them during SSR would guarantee a hydration mismatch.
 */
export function useDateline() {
  const [dateLine, setDateLine] = useState("");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setDateLine(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setClock(
        `${now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "America/New_York",
        })} ET`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return { dateLine, clock };
}

export function useMarketOpen() {
  const [open, setOpen] = useState<boolean | null>(null);

  // Reading the wall clock has to wait for the client, hence `null` until mounted.
  useEffect(() => {
    const check = () => setOpen(isNYSEOpen());
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return open;
}

/* -- The Close (live indices) ---------------------------------------------- */

export interface IndexRow {
  label: string;
  value: string;
  change: string;
  color: string;
}

type Quote = { symbol: string; price: number; change: number; changePct: number };

const INDEX_LABELS: Record<string, string> = {
  "^GSPC": "S&P 500",
  "^DJI": "DOW",
  "^IXIC": "NASDAQ",
  "^VIX": "VIX",
};

const INDEX_ORDER = ["^GSPC", "^DJI", "^IXIC", "^VIX"];

/** Shown while `/api/market` is in flight, and if it fails outright. */
const PLACEHOLDER_ROWS: IndexRow[] = INDEX_ORDER.map((symbol) => ({
  label: INDEX_LABELS[symbol],
  value: "——",
  change: "—",
  color: "var(--ink-faint)",
}));

function formatQuote(q: Quote): IndexRow {
  const up = q.changePct >= 0;
  return {
    label: INDEX_LABELS[q.symbol] ?? q.symbol,
    value: q.price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    change: `${up ? "+" : ""}${q.changePct.toFixed(2)}%`,
    color: up ? "var(--news-green)" : "var(--news-red)",
  };
}

export function useIndices(): IndexRow[] {
  const [rows, setRows] = useState<IndexRow[]>(PLACEHOLDER_ROWS);

  useEffect(() => {
    let live = true;
    fetch("/api/market")
      .then((r) => r.json())
      .then((quotes: Quote[]) => {
        if (!live || !Array.isArray(quotes)) return;
        const bySymbol = new Map(quotes.map((q) => [q.symbol, q]));
        setRows(
          INDEX_ORDER.map((symbol) => {
            const q = bySymbol.get(symbol);
            return q
              ? formatQuote(q)
              : { label: INDEX_LABELS[symbol], value: "——", change: "—", color: "var(--ink-faint)" };
          })
        );
      })
      .catch(() => {
        /* keep the placeholder rows — the section still reads as a newspaper table */
      });
    return () => {
      live = false;
    };
  }, []);

  return rows;
}

/* -- Weather (live, Houston) ------------------------------------------------ */

export interface WeatherReading {
  tempF: number;
  condition: string;
}

/** Powers the front page's "Weather" rail box. `null` until loaded or on failure. */
export function useWeather(): WeatherReading | null {
  const [weather, setWeather] = useState<WeatherReading | null>(null);

  useEffect(() => {
    let live = true;
    fetch("/api/weather")
      .then((r) => r.json())
      .then((data: WeatherReading | null) => {
        if (live && data) setWeather(data);
      })
      .catch(() => {
        /* rail box falls back to its placeholder copy */
      });
    return () => {
      live = false;
    };
  }, []);

  return weather;
}

/* -- Arts & Culture (live essays and teardowns) ---------------------------- */

export interface Essay {
  id: string;
  title: string;
  kind: string;
  meta: string;
  date: string;
  link: string;
  description: string;
}

export interface TeardownRow {
  id: string;
  title: string;
  meta: string;
  date: string;
  link: string;
  description: string;
}

function formatDate(value: string): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function useDispatches() {
  const [essays, setEssays] = useState<Essay[]>([]);
  const [teardowns, setTeardowns] = useState<TeardownRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let live = true;

    Promise.all([
      fetch("/api/blog").then((r) => r.json()),
      fetch("/api/teardowns").then((r) => r.json()),
    ])
      .then(([posts, tears]: [BlogPostMeta[], Teardown[]]) => {
        if (!live) return;
        setEssays(
          posts.map((p) => ({
            id: p.slug,
            title: p.title,
            kind: "Essay",
            meta: p.readingTime ? `${p.readingTime} min read` : "Essay",
            date: formatDate(p.date),
            link: `/blog/${p.slug}`,
            description: p.description,
          }))
        );
        setTeardowns(
          tears.map((t) => ({
            id: t.id,
            title: t.appName,
            meta: t.category,
            date: formatDate(t.date ?? ""),
            link: `/teardowns/${t.id}`,
            description: t.description,
          }))
        );
      })
      .catch(() => {
        /* section renders its empty state */
      })
      .finally(() => {
        if (live) setLoading(false);
      });

    return () => {
      live = false;
    };
  }, []);

  return { essays, teardowns, loading };
}
