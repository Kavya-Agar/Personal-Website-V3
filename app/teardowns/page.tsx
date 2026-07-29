import Link from "next/link";
import { teardowns } from "@/lib/teardowns";
import { PaperNav } from "@/components/news/PaperNav";
import { RailBox, RailHead, SectionHead } from "@/components/news/ui";

function readingTime(content: string) {
  return Math.ceil(content.split(/\s+/).length / 200);
}

export const metadata = {
  title: "Teardowns — Kavya Agar",
  description: "Product teardowns and case studies of fintech apps.",
};

export default function TeardownsPage() {
  const sorted = [...teardowns].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  return (
    <div className="news" style={{ minHeight: "100vh" }}>
      <div className="news-grain" aria-hidden />
      <PaperNav backHref="/" backLabel="Front Page" maxWidth={900} />

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px) 72px" }}>
        <SectionHead
          kicker="Arts & Culture · Product Teardowns"
          kickerColor="var(--news-amber)"
          title="Teardowns"
        />
        <p className="news-lede news-hr" style={{ paddingBottom: 16, margin: "4px 0 8px" }}>
          I write teardowns to think in public about product. Every decision a company makes —
          what to build, how to price it, where to put the button — reflects a belief about the
          user and the market. Writing forces clarity on those beliefs. These are mine.
        </p>
        <p className="news-mono" style={{ color: "var(--ink-faint)", marginBottom: 28 }}>
          {teardowns.length} teardowns · fintech focus · updated irregularly
        </p>

        <div>
          {sorted.map((study) => (
            <article key={study.id} className="news-hr" style={{ padding: "0 0 28px", marginBottom: 28 }}>
              <p
                className="news-kicker"
                style={{ letterSpacing: "0.2em", color: "var(--news-amber)", marginBottom: 8 }}
              >
                {study.category} · ~{readingTime(study.content)} min read
              </p>

              <Link href={`/teardowns/${study.id}`} className="news-story" style={{ display: "block" }}>
                <h2
                  className="news-display news-headline"
                  style={{ fontSize: 30, lineHeight: 1.12, marginBottom: 6 }}
                >
                  {study.appName}
                </h2>
                <p className="news-lede" style={{ fontSize: 19, marginBottom: 10 }}>
                  {study.thesis}
                </p>
              </Link>

              <p className="news-body" style={{ fontSize: 16.5, marginBottom: 16 }}>
                {study.description}
              </p>

              <div
                className="news-split"
                style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24, marginBottom: 16 }}
              >
                <div>
                  <RailHead bare>Key Insights</RailHead>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {study.keyInsights.map((insight, i) => (
                      <li key={i} className="news-body-sm" style={{ display: "flex", gap: 8 }}>
                        <span style={{ color: "var(--news-red)", flex: "none" }}>—</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <RailBox padding={13}>
                  <RailHead bare color="var(--news-maroon)">
                    One Critique
                  </RailHead>
                  <p className="news-body-sm" style={{ fontSize: 14.5 }}>
                    {study.critique}
                  </p>
                </RailBox>
              </div>

              <Link href={`/teardowns/${study.id}`} className="news-more news-draw">
                Read the full teardown →
              </Link>
            </article>
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
