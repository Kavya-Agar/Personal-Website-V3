import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { PaperNav } from "@/components/news/PaperNav";
import { SectionHead } from "@/components/news/ui";

export const metadata = {
  title: "Blog — Kavya Agar",
  description: "Writing on product, systems thinking, and software.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="news" style={{ minHeight: "100vh" }}>
      <div className="news-grain" aria-hidden />
      <PaperNav backHref="/" backLabel="Front Page" maxWidth={780} />

      <main style={{ maxWidth: 780, margin: "0 auto", padding: "0 clamp(16px, 4vw, 32px) 72px" }}>
        <SectionHead
          kicker="Arts & Culture · The Full Run"
          kickerColor="var(--news-amber)"
          title="Blog"
        />
        <p className="news-lede news-hr" style={{ paddingBottom: 16, marginBottom: 8, marginTop: 4 }}>
          Writing on product, systems thinking, and software.
        </p>
        <p className="news-mono" style={{ color: "var(--ink-faint)", marginBottom: 28 }}>
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>

        {posts.length === 0 ? (
          <p className="news-body" style={{ color: "var(--ink-faint)" }}>
            No posts yet.
          </p>
        ) : (
          <div>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="news-story news-hr"
                style={{ display: "block", padding: "0 0 24px", marginBottom: 24 }}
              >
                <p
                  className="news-kicker"
                  style={{ letterSpacing: "0.2em", color: "var(--news-amber)", marginBottom: 8 }}
                >
                  {formatDate(post.date)} · {post.readingTime} min read
                </p>
                <h2
                  className="news-display news-headline"
                  style={{ fontSize: 30, lineHeight: 1.12, marginBottom: 9 }}
                >
                  {post.title}
                </h2>
                <p className="news-body" style={{ fontSize: 16.5, marginBottom: 12 }}>
                  {post.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="news-mono"
                        style={{
                          fontSize: 10.5,
                          padding: "3px 9px",
                          color: "var(--ink-muted)",
                          border: "1px solid var(--rule)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="news-more">Read the piece →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <p className="news-mono" style={{ color: "var(--ink-faint)", marginTop: 8 }}>
          Writing as a way of thinking out loud.
        </p>
      </main>
    </div>
  );
}
