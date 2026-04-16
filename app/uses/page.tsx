import Link from "next/link";

const sections = [
  {
    label: "// hardware",
    items: [
      { name: "MacBook Air 13\"", detail: "Apple M3 · 16 GB RAM" },
      { name: "External display", detail: "4K UHD 3840×2160" },
    ],
  },
  {
    label: "// editor",
    items: [
      { name: "VS Code", detail: "primary IDE" },
      { name: "Theme", detail: "Catppuccin Macchiato" },
      { name: "Xcode", detail: "iOS / Swift development" },
    ],
  },
  {
    label: "// terminal",
    items: [
      { name: "macOS Terminal", detail: "built-in, Zsh shell" },
      { name: "fzf", detail: "fuzzy finder — lives in the shell" },
      { name: "gh", detail: "GitHub CLI" },
    ],
  },
  {
    label: "// languages",
    items: [
      { name: "Python 3.13", detail: "ML, data pipelines, scripting" },
      { name: "Java 25 LTS", detail: "systems programming, coursework" },
      { name: "Node.js 23", detail: "full-stack, tooling" },
      { name: "Go 1.26", detail: "backend services" },
      { name: "Swift 6.3", detail: "iOS development" },
    ],
  },
  {
    label: "// cloud & infra",
    items: [
      { name: "AWS", detail: "EC2, S3, Lambda, SageMaker, RDS" },
      { name: "Terraform", detail: "infrastructure as code" },
      { name: "PostgreSQL 14", detail: "primary database" },
      { name: "Grafana", detail: "metrics and monitoring" },
      { name: "GitHub Actions", detail: "CI/CD pipelines" },
    ],
  },
  {
    label: "// daily tools",
    items: [
      { name: "Notion", detail: "notes, calendar, and mail" },
      { name: "Figma", detail: "mockups and wireframes" },
      { name: "Discord", detail: "communities and comms" },
      { name: "Spotify", detail: "lo-fi while coding", href: "https://open.spotify.com/user/yl13p1w8blgq8w320k2fsedzs" },
    ],
  },
];

export const metadata = {
  title: "Uses — Kavya Agar",
  description: "Tools and equipment Kavya works with daily.",
};

export default function UsesPage() {
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
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
          // uses.md
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
          Uses
        </h1>

        <p className="text-base mb-2" style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
          Tools and equipment I work with daily.
        </p>
        <p className="font-mono text-[11px] mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated · April 2026
        </p>

        <div className="mb-12" style={{ height: 1, background: "var(--border-subtle)" }} />

        <div className="grid gap-10 sm:grid-cols-2">
          {sections.map(({ label, items }) => (
            <div key={label}>
              <p className="font-mono text-[10px] mb-5" style={{ color: "var(--green)" }}>
                {label}
              </p>
              <div className="space-y-3">
                {items.map(({ name, detail, href }) => {
                  const row = (
                    <div key={name} className="flex items-baseline gap-2">
                      <span
                        className="text-sm font-medium shrink-0"
                        style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
                      >
                        {name}
                      </span>
                      <span
                        className="flex-1 self-center"
                        style={{ borderBottom: "1px dotted var(--border-subtle)", minWidth: 8, height: 1 }}
                      />
                      <span className="font-mono text-[11px] shrink-0 flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
                        {detail}
                        {href && (
                          <span style={{ color: "var(--green)" }}>✓</span>
                        )}
                      </span>
                    </div>
                  );
                  return href ? (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                      {row}
                    </a>
                  ) : row;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <p className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
            {"// inspired by uses.tech — a directory of developer setups"}
          </p>
        </div>
      </main>
    </div>
  );
}
