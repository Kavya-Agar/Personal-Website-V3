import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

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
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Header */}
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
        <Link href="/" className="font-mono font-bold text-lg" style={{ color: "var(--green)" }}>
          $KA
        </Link>
      </header>

      {/* Content */}
      <main className="px-8 md:px-20 py-20 max-w-5xl">
        <p className="font-mono text-[11px] mb-4" style={{ color: "var(--text-dim)" }}>
          // blog.md
        </p>

        <h1
          className="font-bold mb-3"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 80, color: "var(--text-primary)", lineHeight: 1 }}
        >
          Blog
        </h1>

        <p className="text-base mb-2" style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
          Writing on product, systems thinking, and software.
        </p>
        <p className="font-mono text-[11px] mb-10" style={{ color: "var(--text-muted)" }}>
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>

        <div className="mb-12" style={{ height: 1, background: "var(--border-subtle)" }} />

        {posts.length === 0 ? (
          <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
            // no posts yet
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 block cursor-pointer transition-all duration-200 hover:shadow-lg group"
                style={{ textDecoration: "none" }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
                    {formatDate(post.date)}
                  </span>
                  <span className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
                    {post.readingTime} min read
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-bold text-xl mb-2 transition-colors group-hover:text-[var(--green)]"
                  style={{ fontFamily: "Inter, sans-serif", color: "var(--text-primary)" }}
                >
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
                  {post.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] px-2.5 py-1 rounded-full"
                        style={{
                          color: "var(--green)",
                          background: "var(--green-a8)",
                          border: "1px solid var(--green-a20)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--green)" }}
                  >
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <p className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
            // writing as a way of thinking out loud
          </p>
        </div>
      </main>
    </div>
  );
}
