"use client";

import { useEffect, useRef } from "react";

export function StockHeatmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear on re-mount (strict mode / hot reload safety)
    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = "500px";
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
      colorTheme: "dark",
      hasTopBar: false,
      isDataSetEnabled: false,
      isZoomEnabled: true,
      hasSymbolTooltip: true,
      isMonoSize: false,
      width: "100%",
      height: 500,
    });
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section
      id="markets"
      className="py-20 px-6"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
      {/* Header */}
      <div className="mb-10">
        <p
          className="font-mono text-xs mb-2"
          style={{ color: "#00c853", letterSpacing: "0.12em" }}
        >
          // live data
        </p>
        <h2
          className="text-3xl font-bold mb-3"
          style={{ color: "#e6edf3", fontFamily: "Inter, sans-serif" }}
        >
          S&amp;P 500 Heatmap
        </h2>
        <p className="text-sm" style={{ color: "#8b949e" }}>
          Real-time market performance by sector — block size by market cap,
          color by % change today.
        </p>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-6 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: "#ff3d57" }}
          />
          <span style={{ color: "#8b949e" }}>Declining</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: "#484f58" }}
          />
          <span style={{ color: "#8b949e" }}>Flat</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: "#00c853" }}
          />
          <span style={{ color: "#8b949e" }}>Gaining</span>
        </div>
        <span
          className="ml-auto"
          style={{ color: "#484f58" }}
        >
          Powered by TradingView
        </span>
      </div>

      {/* Widget wrapper */}
      <div
        className="card overflow-hidden"
        style={{ borderRadius: 8, padding: 0 }}
      >
        <div
          className="tradingview-widget-container"
          ref={containerRef}
          style={{ height: 500 }}
        />
      </div>

    </section>
  );
}
