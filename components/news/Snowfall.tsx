"use client";

import { useEffect, useState } from "react";

/*
 * Christmas-only snowfall. Always rendered (deterministic, so no hydration mismatch) but
 * `display: none` unless <html data-season="christmas"> — see globals.css. Pure CSS motion.
 */
const FLAKES = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 37 + (i % 5) * 11) % 100,
  size: 3 + (i % 4),
  dur: 11 + ((i * 7) % 9),
  delay: -((i * 5) % 17),
  drift: ((i % 7) - 3) * 14,
}));

/* Drift along the bottom of the viewport: an irregular ridge (summed sines + deeper drifts in the
   corners), two layers for depth. Grows by scaling up from the floor for ~2 min, then holds. */
const W = 1000;
const H = 40;
function ridge(phase: number, base: number, amp: number) {
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 8) {
    const h =
      base +
      amp * (0.5 + 0.5 * Math.sin(x / 83 + phase)) +
      5 * Math.sin(x / 27 + phase * 2) +
      2.5 * Math.sin(x / 9.5 + phase * 3) +
      16 * Math.exp(-x / 80) +
      11 * Math.exp(-(W - x) / 110);
    pts.push(`${x},${(H - h).toFixed(1)}`);
  }
  return `M0,${H} L${pts.join(" L")} L${W},${H} Z`;
}
const BACK = ridge(1.3, 6, 12);
const FRONT = ridge(4.1, 2, 9);

export function Snowfall() {
  const [grown, setGrown] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="news-snow" aria-hidden>
      {FLAKES.map((f, i) => (
        <span
          key={i}
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
            ["--drift" as string]: `${f.drift}px`,
          }}
        />
      ))}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          height: H,
          zIndex: 5,
          pointerEvents: "none",
          transformOrigin: "bottom",
          transform: grown ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 120s ease-out",
          filter: "drop-shadow(0 -1px 1px rgba(110,140,170,0.5))",
        }}
      >
        <path d={BACK} fill="#dfe8f1" />
        <path d={FRONT} fill="#fff" stroke="rgba(120,150,180,0.55)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
