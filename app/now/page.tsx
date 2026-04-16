import Link from "next/link";

const sections = [
  {
    label: "// currently building",
    title: "Personal website v2",
    body: "Rebuilding my site with a finance terminal aesthetic. Coffee-fueled, shipped in sprints.",
  },
  {
    label: "// currently reading",
    title: "The Pragmatic Programmer",
    body: "Classic software craftsmanship. Taking it slow, highlighting every other page.",
  },
  {
    label: "// currently focused on",
    title: "Internship recruiting · Fall 2025",
    body: "Applying to SWE roles at fintech and infra companies. Open to referrals.",
  },
  {
    label: "// currently brewing",
    title: "Ethiopian Yirgacheffe",
    body: "Light roast, pour-over. Notes of blueberry and citrus. The best debugging companion.",
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
          Last updated · April 2025
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
