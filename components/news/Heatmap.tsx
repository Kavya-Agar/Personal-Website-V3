"use client";

import { useEffect, useRef } from "react";

const HEIGHT = 320;

/*
 * The widget is a cross-origin iframe: its internals can't be styled and `colorTheme`
 * is the only meaningful option TradingView exposes. So the newspaper look is applied
 * from outside — grade its rendered output toward the press inks, wash the white
 * background down to paper, and lay the page's newsprint grain over the top.
 *
 * Tune these five numbers; nothing else needs to change.
 *   saturate  — pulls TradingView's neon green/red toward the muted press inks
 *   sepia     — warms the neutral greys toward paper. Keep below ~0.2, or the
 *               up/down red-green distinction collapses into brown.
 *   contrast  — restores the punch lost to desaturating
 *   paperWash — multiply layer of --paper over the widget's white background
 *   grain     — newsprint noise, so it reads as printed rather than embedded
 *
 * These live here rather than in globals.css because Tailwind v4's CSS pipeline
 * silently dropped the whole rule block when it both declared and consumed `--hm-*`
 * custom properties. Inline styles are also how the rest of components/news/ works.
 */
const GRADE = {
  saturate: 0.7,
  sepia: 0.12,
  contrast: 1.06,
  paperWash: 0.18,
  grain: 0.1,
};

/** Same fractal-noise tile the page-wide `.news-grain` overlay uses. */
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

const OVERLAY: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none", // the heatmap stays interactive underneath
  mixBlendMode: "multiply",
};

const LEGEND: [string, string][] = [
  ["var(--news-green)", "Advancing"],
  ["var(--paper-shade)", "Unchanged"],
  ["var(--news-red)", "Declining"],
];

export function Heatmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadWidget = () => {
      // The observer and the fallback timer can both fire; only load once.
      if (loadedRef.current) return;
      loadedRef.current = true;

      const widgetDiv = document.createElement("div");
      widgetDiv.className = "tradingview-widget-container__widget";
      widgetDiv.style.height = `${HEIGHT}px`;
      container.appendChild(widgetDiv);

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        exchanges: [],
        dataSource: "SPX500",
        grouping: "sector",
        blockSize: "market_cap_basic",
        blockColor: "change",
        locale: "en",
        colorTheme: "light",
        hasTopBar: false,
        isDataSetEnabled: false,
        isZoomEnabled: true,
        hasSymbolTooltip: true,
        isMonoSize: false,
        width: "100%",
        height: HEIGHT,
      });
      container.appendChild(script);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadWidget();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);

    /*
     * Belt and braces: IntersectionObserver can be present and native yet never fire
     * — not even on document.body — in some embedded contexts. Without this the
     * heatmap would silently never appear at all.
     */
    const fallback = window.setTimeout(loadWidget, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      loadedRef.current = false;
      container.innerHTML = "";
    };
  }, []);

  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          height: HEIGHT,
          border: "1px solid var(--ink)",
          background: "var(--paper-tint)",
          overflow: "hidden",
        }}
      >
        {/* Visible until the widget paints over it. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 16,
          }}
        >
          <span className="news-mono" style={{ fontSize: 12, color: "var(--ink-faint)" }}>
            [ live heatmap — block size by market cap, colour by % change ]
          </span>
        </div>

        <div
          className="tradingview-widget-container"
          ref={containerRef}
          style={{
            position: "absolute",
            inset: 0,
            height: HEIGHT,
            filter: `saturate(${GRADE.saturate}) sepia(${GRADE.sepia}) contrast(${GRADE.contrast})`,
          }}
        />
        <div style={{ ...OVERLAY, background: "var(--paper)", opacity: GRADE.paperWash }} aria-hidden />
        <div style={{ ...OVERLAY, backgroundImage: NOISE, opacity: GRADE.grain }} aria-hidden />
      </div>

      <figcaption
        className="news-hr"
        style={{
          font: "400 13px/1.35 var(--f-body)",
          color: "var(--ink-muted)",
          paddingTop: 8,
          paddingBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: "6px 18px",
        }}
      >
        <span>
          Fig. 2 — The S&amp;P 500 by sector; each block sized by market capitalisation.
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 12, flex: "none" }}>
          {LEGEND.map(([color, label]) => (
            <span key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 9,
                  height: 9,
                  background: color,
                  border: "1px solid var(--ink)",
                  flex: "none",
                }}
              />
              <span
                className="news-kicker"
                style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--ink-muted)" }}
              >
                {label}
              </span>
            </span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
