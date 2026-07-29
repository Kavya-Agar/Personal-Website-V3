import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import { getTeardownById, teardowns } from "@/lib/teardowns";
import { PaperNav } from "@/components/news/PaperNav";
import { RailBox, RailHead } from "@/components/news/ui";

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
    <div className="news" style={{ minHeight: "100vh" }}>
      <div className="news-grain" aria-hidden />
      <PaperNav backHref="/teardowns" backLabel="Teardowns" maxWidth={720} />

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px clamp(16px, 4vw, 32px) 72px" }}>
        <p
          className="news-kicker"
          style={{ letterSpacing: "0.2em", color: "var(--news-amber)", marginBottom: 12 }}
        >
          {teardown.category}
        </p>

        <h1
          className="news-display"
          style={{ fontSize: "clamp(32px, 6vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.6px", marginBottom: 12 }}
        >
          {teardown.appName}
        </h1>

        <p className="news-lede" style={{ marginBottom: 16 }}>
          {teardown.thesis}
        </p>

        <div className="news-dateline news-hr" style={{ paddingBottom: 20, marginBottom: 28 }}>
          {teardown.date ? formatDate(teardown.date) : "Undated"}
        </div>

        <article className="prose max-w-none">
          <MDXRemote
            source={teardown.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypeShiki as never, { theme: "github-light" }],
                ],
              },
            }}
          />
        </article>

        <div style={{ marginTop: 40 }}>
          <RailHead double>Key Insights</RailHead>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {teardown.keyInsights.map((insight, i) => (
              <li key={i} className="news-body" style={{ display: "flex", gap: 10 }}>
                <span style={{ color: "var(--news-red)", flex: "none" }}>—</span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 32 }}>
          <RailBox padding={18}>
            <RailHead bare color="var(--news-maroon)">
              One Critique
            </RailHead>
            <p className="news-body">{teardown.critique}</p>
          </RailBox>
        </div>

        <div className="news-hr-ink" style={{ marginTop: 48, paddingTop: 20 }}>
          <Link href="/teardowns" className="news-draw" style={{ font: "500 12.5px var(--f-label)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
            ← Back to Teardowns
          </Link>
        </div>
      </main>
    </div>
  );
}
