"use client";

import { useState, useEffect } from "react";

// NYSE holidays (YYYY-MM-DD in ET)
const NYSE_HOLIDAYS = new Set([
  // 2025
  "2025-01-01", "2025-01-20", "2025-02-17", "2025-04-18",
  "2025-05-26", "2025-06-19", "2025-07-04", "2025-09-01",
  "2025-11-27", "2025-12-25",
  // 2026
  "2026-01-01", "2026-01-19", "2026-02-16", "2026-04-03",
  "2026-05-25", "2026-06-19", "2026-07-03", "2026-09-07",
  "2026-11-26", "2026-12-25",
  // 2027
  "2027-01-01", "2027-01-18", "2027-02-15", "2027-03-26",
  "2027-05-31", "2027-06-18", "2027-07-05", "2027-09-06",
  "2027-11-25", "2027-12-24",
]);

function isNYSEOpen(): boolean {
  const now = new Date();

  const etParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(now);

  const get = (type: string) => etParts.find((p) => p.type === type)?.value ?? "";
  const year = get("year");
  const month = get("month");
  const day = get("day");
  const hour = parseInt(get("hour"), 10);
  const minute = parseInt(get("minute"), 10);

  const dateStr = `${year}-${month}-${day}`;
  const dayOfWeek = new Date(`${year}-${month}-${day}T12:00:00`).getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) return false;
  if (NYSE_HOLIDAYS.has(dateStr)) return false;

  const minutesIntoDay = hour * 60 + minute;
  return minutesIntoDay >= 570 && minutesIntoDay < 960;
}

export function MarketStatus() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isNYSEOpen());
    const id = setInterval(() => setOpen(isNYSEOpen()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1.5">
      <span
        className="inline-block rounded-full shrink-0"
        style={{
          width: 6,
          height: 6,
          background: open ? "var(--green)" : "var(--red)",
          boxShadow: open ? "0 0 6px var(--green)" : "0 0 6px var(--red)",
        }}
      />
      <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
        NYSE {open ? "OPEN" : "CLOSED"}
      </span>
    </div>
  );
}
