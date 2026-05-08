"use client";

import Link from "next/link";
import { getTeardownById } from "@/lib/teardowns";
import { useParams } from "next/navigation";

export default function TeardownDetailPage() {
  const params = useParams();
  const teardown = getTeardownById(params.id as string);

  if (!teardown) {
    return (
      <div className="min-h-screen" style={{ background: "var(--bg)" }}>
        <header
          className="flex items-center justify-between px-8 md:px-20 h-16"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <Link
            href="/teardowns"
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

        <main className="px-8 md:px-20 py-20 max-w-4xl">
          <p style={{ color: "var(--text-dim)" }}>Teardown not found</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 md:px-20 h-16"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Link
          href="/teardowns"
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
      <main className="px-8 md:px-20 py-16 max-w-4xl">
        {/* Category badge */}
        <span
          className="font-mono text-[10px] px-2 py-1 rounded inline-block mb-4"
          style={{
            color: "var(--green)",
            background: "var(--green-a8)",
            border: "1px solid rgba(0,200,83,0.2)",
          }}
        >
          {teardown.category}
        </span>

        {/* Title */}
        <h1
          className="font-bold mb-2"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 48,
            color: "var(--text-primary)",
            lineHeight: 1.2,
          }}
        >
          {teardown.appName}
        </h1>

        {/* Thesis */}
        <p
          className="text-xl font-semibold mb-8"
          style={{ color: "var(--green)", fontFamily: "Inter, sans-serif" }}
        >
          {teardown.thesis}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 mb-8 pb-8" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
            {new Date(teardown.id === "stripe" ? "2026-05-07" : teardown.id === "wise" ? "2026-04-15" : "2026-03-20").toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" }
            )}
          </span>
        </div>

        {/* Main content - rendered as markdown-ish text */}
        <div
          className="prose prose-invert max-w-none"
          style={{ color: "var(--text-primary)" }}
        >
          {teardown.content.split("\n\n").map((paragraph, idx) => {
            // Check if it's a heading
            if (paragraph.startsWith("# ")) {
              return (
                <h2
                  key={idx}
                  className="font-bold text-2xl mt-10 mb-4"
                  style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
                >
                  {paragraph.replace(/^# /, "")}
                </h2>
              );
            }

            if (paragraph.startsWith("## ")) {
              return (
                <h3
                  key={idx}
                  className="font-semibold text-base mt-6 mb-3"
                  style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
                >
                  {paragraph.replace(/^## /, "")}
                </h3>
              );
            }

            // Regular paragraph
            if (paragraph.trim()) {
              return (
                <p
                  key={idx}
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
                >
                  {paragraph}
                </p>
              );
            }

            return null;
          })}
        </div>

        {/* Key insights */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <h2
            className="font-semibold text-lg mb-6"
            style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
          >
            Key Insights
          </h2>
          <ul className="space-y-3">
            {teardown.keyInsights.map((insight, i) => (
              <li key={i} className="flex gap-3 text-base" style={{ color: "var(--text-primary)" }}>
                <span style={{ color: "var(--green)" }} className="shrink-0 mt-1">
                  ▸
                </span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Critique */}
        <div className="mt-12 pt-8 pb-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <h2
            className="font-semibold text-lg mb-4"
            style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
          >
            Critique
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {teardown.critique}
          </p>
        </div>
      </main>
    </div>
  );
}
