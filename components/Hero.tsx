"use client";

import { useEffect, useRef } from "react";

const chartPoints = [
  [0, 88], [4, 82], [8, 85], [12, 78], [16, 80],
  [20, 72], [25, 68], [30, 74], [34, 65], [38, 60],
  [42, 62], [46, 55], [50, 48], [54, 52], [58, 44],
  [62, 40], [66, 45], [70, 36], [74, 30], [78, 34],
  [82, 26], [86, 22], [90, 18], [94, 12], [100, 8],
];

function buildPath(pts: number[][]): string {
  return pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x * 9} ${y * 5}`).join(" ");
}

export function Hero() {
  const cursorRef   = useRef<HTMLSpanElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    cursorRef.current?.classList.add("cursor-blink");
    clipRectRef.current?.classList.add("chart-reveal");
  }, []);

  const d = buildPath(chartPoints);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{ background: "#0d1117" }}
    >
      {/* Chart background */}
      <div
        className="absolute right-0 top-[200px] pointer-events-none overflow-hidden"
        style={{ width: "62.5%", height: 500 }}
      >
        {[0, 100, 200, 300, 400].map((y) => (
          <div
            key={y}
            className="absolute left-0 right-0"
            style={{ top: y, height: 1, background: "rgba(48,54,61,0.5)" }}
          />
        ))}

        <svg
          viewBox="0 0 900 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00c853" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00c853" stopOpacity="0"    />
            </linearGradient>
            <clipPath id="chartClip">
              <rect ref={clipRectRef} x="0" y="0" width="0" height="500" />
            </clipPath>
          </defs>

          {/* Fill and line share the same clip — revealed in perfect sync */}
          {/* translate(0,-40): shifts start from y=440 → y=400 (bottom grid line), end from y=40 → y=0 (top) */}
          <g clipPath="url(#chartClip)" transform="translate(0, -40)">
            <path d={`${d} L 900 540 L 0 540 Z`} fill="url(#chartFill)" />
            <path d={d} fill="none" stroke="#00c853" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-20 pt-[100px]">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-8 w-fit"
          style={{
            background: "rgba(0,200,83,0.08)",
            border: "1px solid rgba(0,200,83,0.35)",
          }}
        >
          <span
            className="inline-block rounded-full"
            style={{ width: 7, height: 7, background: "#00c853", boxShadow: "0 0 6px #00c853" }}
          />
          <span className="font-mono text-[10px]" style={{ color: "#00c853" }}>
            AVAILABLE FOR INTERNSHIPS · SUMMER 2026
          </span>
        </div>

        <h1
          className="font-bold leading-none mb-4"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 88, color: "#e6edf3", letterSpacing: "-2px" }}
        >
          Kavya Agar
        </h1>

        <p
          className="font-semibold mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 28, color: "#8b949e" }}
        >
          Computer Science @ Texas A&amp;M University
        </p>

        <p
          className="font-mono text-sm mb-10 flex items-center gap-1"
          style={{ color: "#00c853" }}
        >
          {"> Building systems · Fueled by espresso · Shipping clean code"}
          <span
            ref={cursorRef}
            className="inline-block ml-1"
            style={{ width: 10, height: 18, background: "#00c853", verticalAlign: "middle" }}
          />
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center font-semibold text-sm transition-opacity hover:opacity-90"
            style={{
              background: "#00c853",
              color: "#0d1117",
              fontFamily: "Inter, sans-serif",
              padding: "14px 32px",
              borderRadius: 6,
            }}
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center font-semibold text-sm transition-colors"
            style={{
              color: "#e6edf3",
              fontFamily: "Inter, sans-serif",
              padding: "14px 32px",
              border: "1px solid #30363d",
              borderRadius: 6,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,200,83,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#30363d")}
          >
            Contact Me
          </a>
        </div>

      </div>

      <p
        className="absolute bottom-8 right-20 font-mono text-[10px]"
        style={{ color: "#8b949e" }}
      >
        scroll to explore ↓
      </p>
    </section>
  );
}
