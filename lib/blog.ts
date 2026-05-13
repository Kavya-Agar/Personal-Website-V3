import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft?: boolean;
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
  readingTime: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function calcReadingTime(content: string): number {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function getBlogPosts(): Promise<BlogPostMeta[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as BlogFrontmatter;
      if (fm.draft) return null;
      return { ...fm, slug, readingTime: calcReadingTime(content) };
    })
    .filter(Boolean)
    .sort(
      (a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()
    ) as BlogPostMeta[];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  if (fm.draft) return null;

  return { ...fm, slug, readingTime: calcReadingTime(content), content };
}

export async function getBlogSlugs(): Promise<string[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
      const { data } = matter(raw);
      return (data as BlogFrontmatter).draft ? null : slug;
    })
    .filter(Boolean) as string[];
}
