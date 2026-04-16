"use client";

import { useEffect, useRef, useState } from "react";

function formatET(date: Date) {
  return date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatElapsed(ms: number) {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) {
    return `+${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  return `+${m}:${String(sec).padStart(2, "0")}`;
}

export function NavClock() {
  const startRef = useRef(Date.now());
  const [clock, setClock] = useState(() => formatET(new Date()));
  const [elapsed, setElapsed] = useState("0:00");

  useEffect(() => {
    const tick = () => {
      setClock(formatET(new Date()));
      setElapsed(formatElapsed(Date.now() - startRef.current));
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-2 font-mono text-[10px]">
      <span style={{ color: "var(--text-dim)" }}>{clock} ET</span>
      <span style={{ color: "var(--border)" }}>·</span>
      <span style={{ color: "var(--text-muted)" }}>{elapsed}</span>
    </div>
  );
}
