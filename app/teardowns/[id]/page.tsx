import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import { getTeardownById, teardowns } from "@/lib/teardowns";

export async function generateStaticParams() {
  return teardowns.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teardown = getTeardownById(id);
  if (!teardown) return {};
  return {
    title: `${teardown.appName} Teardown — Kavya Agar`,
    description: teardown.description,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function TeardownDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teardown = getTeardownById(id);
  if (!teardown) notFound();

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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          teardowns
        </Link>
        <Link href="/" className="font-mono font-bold text-lg" style={{ color: "var(--green)" }}>
          $KA
        </Link>
      </header>

      {/* Content */}
      <main className="px-8 md:px-20 py-16 max-w-3xl">
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
        <p className="text-xl font-semibold mb-6" style={{ color: "var(--green)", fontFamily: "Inter, sans-serif" }}>
          {teardown.thesis}
        </p>

        {/* Meta */}
        <p className="font-mono text-[11px] mb-8 pb-8" style={{ color: "var(--text-dim)", borderBottom: "1px solid var(--border-subtle)" }}>
          {teardown.date ? formatDate(teardown.date) : ""}
        </p>

        {/* Body */}
        <article className="prose prose-invert max-w-none">
          <MDXRemote
            source={teardown.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypeShiki as never, { theme: "github-dark" }],
                ],
              },
            }}
          />
        </article>

        {/* Key insights */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <h2 className="font-semibold text-lg mb-6" style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}>
            Key Insights
          </h2>
          <ul className="space-y-3">
            {teardown.keyInsights.map((insight, i) => (
              <li key={i} className="flex gap-3 text-base" style={{ color: "var(--text-primary)" }}>
                <span style={{ color: "var(--green)" }} className="shrink-0 mt-1">▸</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Critique */}
        <div className="mt-12 pt-8 pb-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <h2 className="font-semibold text-lg mb-4" style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}>
            Critique
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {teardown.critique}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <Link
            href="/teardowns"
            className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-[var(--text-primary)] w-fit"
            style={{ color: "var(--text-dim)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Teardowns
          </Link>
        </div>
      </main>
    </div>
  );
}
