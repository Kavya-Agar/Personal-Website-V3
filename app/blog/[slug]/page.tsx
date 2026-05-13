import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Kavya Agar`,
    description: post.description,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 md:px-20 h-16"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Link
          href="/blog"
          className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-[var(--text-primary)]"
          style={{ color: "var(--text-dim)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          blog
        </Link>
        <Link href="/" className="font-mono font-bold text-lg" style={{ color: "var(--green)" }}>
          $KA
        </Link>
      </header>

      {/* Content */}
      <main className="px-8 md:px-20 py-16 max-w-3xl">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Title */}
        <h1
          className="font-bold mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 48,
            lineHeight: 1.1,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {post.title}
        </h1>

        {/* Description */}
        <p
          className="text-xl font-semibold mb-4"
          style={{ fontFamily: "Inter, sans-serif", color: "var(--green)" }}
        >
          {post.description}
        </p>

        {/* Meta */}
        <p className="font-mono text-[11px] mb-8" style={{ color: "var(--text-dim)" }}>
          {formatDate(post.date)} · {post.readingTime} min read
        </p>

        <div className="mb-10" style={{ height: 1, background: "var(--border-subtle)" }} />

        {/* Body */}
        <article className="prose prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypeShiki as never, { theme: "github-dark" }],
                ],
              },
            }}
          />
        </article>

        {/* Footer */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <Link
            href="/blog"
            className="flex items-center gap-2 font-mono text-sm transition-colors hover:text-[var(--text-primary)] w-fit"
            style={{ color: "var(--text-dim)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
