"use client";

import { useEffect, useRef } from "react";

interface Candle {
  o: number; // open (SVG y — lower y = higher price)
  h: number; // high (SVG y, smallest value)
  l: number; // low  (SVG y, largest value)
  c: number; // close (SVG y)
}

const CANDLE_W = 22;
const SPACING  = 44;
const START_X  = 28;

// 20 candles filling full vertical range. Verified: h ≤ min(o,c), l ≥ max(o,c)
const candles: Candle[] = [
  // Phase 1 — base near bottom (candles 0-3)
  { o: 492, h: 478, l: 498, c: 488 },
  { o: 488, h: 474, l: 496, c: 480 },
  { o: 480, h: 472, l: 490, c: 485 }, // bear
  { o: 485, h: 468, l: 492, c: 472 },
  // Phase 2 — first leg up (candles 4-7)
  { o: 472, h: 452, l: 480, c: 458 },
  { o: 458, h: 432, l: 466, c: 440 },
  { o: 440, h: 418, l: 450, c: 426 },
  { o: 426, h: 400, l: 434, c: 408 },
  // Phase 3 — pullback (candles 8-9)
  { o: 408, h: 400, l: 450, c: 440 }, // bear — long wick
  { o: 440, h: 432, l: 462, c: 455 }, // bear — deeper
  // Phase 4 — recovery (candles 10-14)
  { o: 455, h: 425, l: 462, c: 430 },
  { o: 430, h: 395, l: 438, c: 400 },
  { o: 400, h: 360, l: 408, c: 368 },
  { o: 368, h: 328, l: 376, c: 336 },
  { o: 336, h: 295, l: 344, c: 305 },
  // Phase 5 — small dip (candles 15-16)
  { o: 305, h: 298, l: 332, c: 325 }, // bear
  { o: 325, h: 315, l: 348, c: 340 }, // bear
  // Phase 6 — final push (candles 17-19)
  { o: 340, h: 298, l: 348, c: 308 },
  { o: 308, h: 248, l: 316, c: 258 },
  { o: 258, h: 115, l: 268, c: 128 }, // big surge to near top
];

export function Hero() {
  const cursorRef   = useRef<HTMLSpanElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    cursorRef.current?.classList.add("cursor-blink");
    clipRectRef.current?.classList.add("chart-reveal");
  }, []);

  const lastCX    = START_X + (candles.length - 1) * SPACING;
  const lastClose = candles[candles.length - 1].c;

  const closePath = candles
    .map((c, i) => `${i === 0 ? "M" : "L"} ${START_X + i * SPACING} ${c.c}`)
    .join(" ");
  const areaPath = `${closePath} L ${lastCX} 540 L ${START_X} 540 Z`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{ background: "var(--bg)" }}
    >
      {/* Candlestick chart background */}
      <div
        className="absolute right-0 top-[200px] pointer-events-none overflow-hidden hidden sm:block"
        style={{ width: "62.5%", height: 500 }}
      >
        {[0, 100, 200, 300, 400].map((y) => (
          <div
            key={y}
            className="absolute left-0 right-0"
            style={{ top: y, height: 1, background: "var(--border)", opacity: 0.5 }}
          />
        ))}

        <svg
          viewBox="0 0 900 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   style={{ stopColor: "var(--green)", stopOpacity: 0.12 }} />
              <stop offset="100%" style={{ stopColor: "var(--green)", stopOpacity: 0 }} />
            </linearGradient>
            <clipPath id="chartClip">
              <rect ref={clipRectRef} x="0" y="0" width="0" height="500" />
            </clipPath>
          </defs>

          <g clipPath="url(#chartClip)" transform="translate(0, -40)">
            {/* Area fill below close prices */}
            <path d={areaPath} fill="url(#chartFill)" />

            {/* Dashed trend line through closes */}
            <path
              d={closePath}
              fill="none"
              stroke="var(--green)"
              strokeWidth={1}
              strokeOpacity={0.25}
              strokeDasharray="4 4"
            />

            {/* Candlesticks */}
            {candles.map((c, i) => {
              const cx     = START_X + i * SPACING;
              const isBull = c.c <= c.o;
              const color  = isBull ? "var(--green)" : "var(--red)";
              const bodyTop = Math.min(c.o, c.c);
              const bodyH   = Math.max(Math.abs(c.c - c.o), 2);
              return (
                <g key={i}>
                  <line
                    x1={cx} y1={c.h} x2={cx} y2={c.l}
                    stroke={color} strokeWidth={1.5} strokeOpacity={0.5}
                  />
                  <rect
                    x={cx - CANDLE_W / 2} y={bodyTop}
                    width={CANDLE_W} height={bodyH}
                    fill={color} fillOpacity={isBull ? 0.8 : 0.65}
                    rx={2}
                  />
                </g>
              );
            })}

            {/* Last-price dashed horizontal marker */}
            <line
              x1={lastCX + CANDLE_W / 2 + 6} y1={lastClose}
              x2={920}                         y2={lastClose}
              stroke="var(--green)" strokeWidth={1}
              strokeOpacity={0.45} strokeDasharray="3 3"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-20 pt-[100px]">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-8 w-fit animate-pulse-subtle"
          style={{
            background: "var(--green-a8)",
            border: "1px solid var(--green-a35)",
          }}
        >
          <span
            className="inline-block rounded-full"
            style={{ width: 7, height: 7, background: "var(--green)", boxShadow: "0 0 6px var(--green)" }}
          />
          <span className="font-mono text-[10px]" style={{ color: "var(--green)" }}>
            OPEN TO PM INTERNSHIPS · SUMMER 2027
          </span>
        </div>

        <h1
          className="font-bold leading-none mb-4 text-6xl sm:text-7xl md:text-[88px]"
          style={{ fontFamily: "Inter, sans-serif", color: "var(--text-primary)", letterSpacing: "-2px" }}
        >
          Kavya Agar
        </h1>

        <p
          className="font-semibold mb-6 text-xl sm:text-2xl md:text-[28px]"
          style={{ fontFamily: "Inter, sans-serif", color: "var(--text-dim)" }}
        >
          CS @ Texas A&amp;M · Aspiring Product Manager
        </p>

        <p
          className="font-mono text-xs sm:text-sm mb-10 flex items-center gap-1"
          style={{ color: "var(--green)" }}
        >
          {"> Technical depth, product vision"}
          <span
            ref={cursorRef}
            className="inline-block ml-1"
            style={{ width: 10, height: 18, background: "var(--green)", verticalAlign: "middle" }}
          />
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer
              hover:shadow-xl hover:shadow-green/20 hover:scale-[1.02] active:scale-95
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
            style={{
              background: "var(--green)",
              color: "var(--bg)",
              fontFamily: "Inter, sans-serif",
              padding: "16px 32px",
              borderRadius: 6,
              "--ring-offset-color": "var(--bg)",
            } as React.CSSProperties}
          >
            View Work →
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer
              hover:shadow-md hover:shadow-green/10 hover:scale-[1.01] active:scale-95
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
            style={{
              color: "var(--text-primary)",
              fontFamily: "Inter, sans-serif",
              padding: "16px 32px",
              border: "1px solid var(--border)",
              borderRadius: 6,
              "--ring-offset-color": "var(--bg)",
            } as React.CSSProperties}
          >
            Contact Me
          </a>
        </div>

      </div>

      <p
        className="absolute bottom-8 right-4 sm:right-20 font-mono text-[10px]"
        style={{ color: "var(--text-dim)" }}
      >
        scroll to explore ↓
      </p>
    </section>
  );
}
