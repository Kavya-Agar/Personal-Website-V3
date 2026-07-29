import type { ReactNode } from "react";

/** The double-ruled header that opens every interior section. */
export function SectionHead({
  kicker,
  kickerColor,
  title,
  deck,
}: {
  kicker: string;
  kickerColor: string;
  title: string;
  deck?: string;
}) {
  return (
    <div
      className="news-hr-double news-sectionhead"
      style={{
        padding: "26px 0 12px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 24,
      }}
    >
      <div>
        <p
          className="news-kicker"
          style={{ letterSpacing: "0.24em", color: kickerColor, marginBottom: 8 }}
        >
          {kicker}
        </p>
        <h2
          className="news-display"
          style={{ fontSize: "clamp(34px, 6vw, 56px)", lineHeight: 1, letterSpacing: "-0.6px" }}
        >
          {title}
        </h2>
      </div>
      {deck ? (
        <p className="news-deck" style={{ maxWidth: 420, textAlign: "right" }}>
          {deck}
        </p>
      ) : null}
    </div>
  );
}

/** Rail heading: small caps label over a rule. */
export function RailHead({
  children,
  double = false,
  bare = false,
  color,
}: {
  children: ReactNode;
  double?: boolean;
  bare?: boolean;
  color?: string;
}) {
  return (
    <p
      className={`news-railhead ${bare ? "" : double ? "news-hr-double" : "news-hr-ink"}`}
      style={{
        color,
        paddingBottom: bare ? 0 : 6,
        marginBottom: bare ? 8 : 10,
      }}
    >
      {children}
    </p>
  );
}

/** Tinted rail box — "Situations Wanted", "Currently", pull quotes. */
export function RailBox({
  children,
  padding = 14,
  outlined = false,
}: {
  children: ReactNode;
  padding?: number;
  outlined?: boolean;
}) {
  return (
    <div
      style={{
        padding,
        background: outlined ? "transparent" : "var(--paper-tint)",
        border: outlined ? "1px solid var(--ink)" : "none",
      }}
    >
      {children}
    </div>
  );
}

/** A key/value row, as a print table would set it. */
export function DataRow({
  label,
  value,
  valueColor,
  dotted = false,
}: {
  label: string;
  value: string;
  valueColor?: string;
  dotted?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        paddingBottom: dotted ? 6 : 0,
        borderBottom: dotted ? "1px dotted var(--rule-dotted)" : "none",
      }}
    >
      <span>{label}</span>
      <span style={{ color: valueColor }}>{value}</span>
    </div>
  );
}
