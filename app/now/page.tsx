import Link from "next/link";

const sections = [
  {
    label: "// currently building",
    title: "Personal website v3",
    body: "Rebuilding my site to reflect a PM focus — cleaner framing, sharper story. The terminal aesthetic stays.",
  },
  {
    label: "// currently reading",
    title: "Inspired — Marty Cagan",
    body: "The PM bible. Working through how great product teams discover and deliver products people actually want.",
  },
  {
    label: "// currently focused on",
    title: "PM internship recruiting · Summer 2026",
    body: "Targeting PM roles at fintech and consumer tech companies. My eng background is the edge. Open to referrals.",
  },
  {
    label: "// currently brewing",
    title: "Ethiopian Yirgacheffe",
    body: "Light roast, pour-over. Notes of blueberry and citrus. The best thinking companion.",
  },
];

export const metadata = {
  title: "Now — Kavya Agar",
  description: "What Kavya is up to right now.",
};

export default function NowPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Minimal header */}
      <header
        className="flex items-center justify-between px-8 md:px-20 h-16"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-[var(--text-primary)]"
          style={{ color: "var(--text-dim)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          back
        </Link>

        <Link
          href="/"
          className="font-mono font-bold text-lg"
          style={{ color: "var(--green)" }}
        >
          $KA
        </Link>
      </header>

      {/* Content */}
      <main className="px-8 md:px-20 py-20 max-w-5xl">
        <p className="font-mono text-[11px] mb-4" style={{ color: "var(--text-dim)" }}>
          // now.md
        </p>

        <h1
          className="font-bold mb-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 80,
            color: "var(--text-primary)",
            lineHeight: 1,
          }}
        >
          Now
        </h1>

        <p className="text-base mb-2" style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
          What I&apos;m up to right now.
        </p>
        <p className="font-mono text-[11px] mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated · May 2026
        </p>

        <div className="mb-12" style={{ height: 1, background: "var(--border-subtle)" }} />

        <div className="grid gap-10 sm:grid-cols-2">
          {sections.map(({ label, title, body }) => (
            <div key={label}>
              <p className="font-mono text-[10px] mb-3" style={{ color: "var(--green)" }}>
                {label}
              </p>
              <h2
                className="font-bold text-xl mb-3"
                style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
              >
                {title}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <p className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
            {"// inspired by nownownow.com — a page about what you're doing right now"}
          </p>
        </div>
      </main>
    </div>
  );
}
