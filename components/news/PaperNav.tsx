import Link from "next/link";

/** Sticky mini-masthead for standalone paper pages (blog, teardowns) that sit
    outside the section router but should still read as part of the same paper. */
export function PaperNav({
  backHref,
  backLabel,
  maxWidth = 900,
}: {
  backHref: string;
  backLabel: string;
  maxWidth?: number;
}) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "var(--paper)",
        borderBottom: "1px solid var(--ink)",
      }}
    >
      <div
        style={{
          maxWidth,
          margin: "0 auto",
          padding: "14px clamp(16px, 4vw, 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Link
          href={backHref}
          className="news-draw"
          style={{
            font: "600 12.5px var(--f-label)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
          }}
        >
          ← {backLabel}
        </Link>
        <Link
          href="/"
          aria-label="Front page"
          style={{ font: "400 22px/1 var(--f-display)", color: "var(--ink)" }}
        >
          K·A
        </Link>
      </div>
    </div>
  );
}
