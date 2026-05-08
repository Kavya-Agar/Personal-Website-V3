import Link from "next/link";
import { teardowns } from "@/lib/teardowns";

export const metadata = {
  title: "Teardowns — Kavya Agar",
  description: "Product teardowns and case studies of fintech apps.",
};

export default function TeardownsPage() {
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
          // product teardowns
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
          Teardowns
        </h1>

        <p className="text-base mb-2" style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
          Deep dives into fintech product strategy and design.
        </p>
        <p className="font-mono text-[11px] mb-10" style={{ color: "var(--text-muted)" }}>
          Case studies analyzing competitive moats, UX patterns, and strategic decisions
        </p>

        <div className="mb-12" style={{ height: 1, background: "var(--border-subtle)" }} />

        {/* Grid of teardowns */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {teardowns.map((study) => (
            <Link
              key={study.id}
              href={`/teardowns/${study.id}`}
              className="card p-8 flex flex-col"
              style={{ cursor: "pointer", transition: "all 0.3s ease" }}
            >
              {/* Category tag */}
              <span
                className="font-mono text-[10px] px-2 py-1 rounded w-fit mb-4"
                style={{
                  color: "var(--green)",
                  background: "var(--green-a8)",
                  border: "1px solid rgba(0,200,83,0.2)",
                }}
              >
                {study.category}
              </span>

              {/* Title */}
              <h2
                className="font-bold text-2xl mb-2"
                style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
              >
                {study.appName}
              </h2>

              {/* Thesis */}
              <p
                className="font-semibold text-base mb-4"
                style={{ color: "var(--green)", fontFamily: "Inter, sans-serif" }}
              >
                {study.thesis}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6 flex-grow"
                style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}
              >
                {study.description}
              </p>

              {/* Key insights */}
              <div className="mb-6">
                <p className="font-mono text-[10px] mb-3" style={{ color: "var(--green)" }}>
                  // key insights
                </p>
                <ul className="space-y-2">
                  {study.keyInsights.map((insight, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--text-dim)" }}>
                      <span style={{ color: "var(--green)" }} className="shrink-0">
                        ▸
                      </span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Critique */}
              <div className="pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <p className="font-mono text-[10px] mb-2" style={{ color: "var(--yellow)" }}>
                  // one critique
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {study.critique}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/*
          Template for adding new teardowns (see lib/teardowns.ts):
          {
            id: "your-slug",
            appName: "Company/App Name",
            thesis: "How [Company] Did X",
            category: "Category Name",
            description: "2-3 sentence summary for the list view",
            keyInsights: ["Insight 1", "Insight 2", "Insight 3"],
            critique: "One balanced critique",
            content: `# Full detailed content goes here...`,
          }
        */}
      </main>
    </div>
  );
}
