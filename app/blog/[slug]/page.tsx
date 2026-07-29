import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { PaperNav } from "@/components/news/PaperNav";

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
    <div className="news" style={{ minHeight: "100vh" }}>
      <div className="news-grain" aria-hidden />
      <PaperNav backHref="/blog" backLabel="Blog" maxWidth={720} />

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px clamp(16px, 4vw, 32px) 72px" }}>
        <p
          className="news-kicker"
          style={{ letterSpacing: "0.2em", color: "var(--news-amber)", marginBottom: 12 }}
        >
          {post.tags.join(" · ")}
        </p>

        <h1
          className="news-display"
          style={{ fontSize: "clamp(32px, 6vw, 48px)", lineHeight: 1.08, letterSpacing: "-0.6px", marginBottom: 14 }}
        >
          {post.title}
        </h1>

        <p className="news-lede" style={{ marginBottom: 16 }}>
          {post.description}
        </p>

        <div
          className="news-dateline news-hr"
          style={{ paddingBottom: 20, marginBottom: 28 }}
        >
          By Kavya Agar · {formatDate(post.date)} · {post.readingTime} min read
        </div>

        <article className="prose max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [rehypeShiki as never, { theme: "github-light" }],
                ],
              },
            }}
          />
        </article>

        <div className="news-hr-ink" style={{ marginTop: 48, paddingTop: 20 }}>
          <Link href="/blog" className="news-draw" style={{ font: "500 12.5px var(--f-label)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
            ← Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
