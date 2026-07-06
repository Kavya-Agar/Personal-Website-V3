"use client";

import { useEffect, useState } from "react";
import type { BlogPostMeta } from "@/lib/blog";
import type { Teardown } from "@/lib/teardowns";

interface WritingItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "blog" | "teardown";
  readingTime?: number;
  category?: string;
  link: string;
}

export function Writing() {
  const [items, setItems] = useState<WritingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const [blogRes, teardowsRes] = await Promise.all([
          fetch("/api/blog"),
          fetch("/api/teardowns"),
        ]);

        const blogs: BlogPostMeta[] = await blogRes.json();
        const teardowns: Teardown[] = await teardowsRes.json();

        const combined: WritingItem[] = [
          ...blogs.map((b) => ({
            id: b.slug,
            title: b.title,
            description: b.description,
            date: b.date,
            type: "blog" as const,
            readingTime: b.readingTime,
            link: `/blog/${b.slug}`,
          })),
          ...teardowns.map((t) => ({
            id: t.id,
            title: t.appName,
            description: t.description,
            date: t.date || "",
            type: "teardown" as const,
            category: t.category,
            link: `/teardowns/${t.id}`,
          })),
        ];

        combined.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setItems(combined.slice(0, 6));
      } catch (err) {
        console.error("Failed to fetch writing items:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) {
    return (
      <section
        id="writing"
        className="py-20 px-4 sm:px-8 md:px-20"
        style={{ background: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <p style={{ color: "var(--text-dim)" }}>Loading articles...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="writing"
      className="py-20 px-4 sm:px-8 md:px-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Inter, sans-serif", color: "var(--text-primary)" }}
          >
            Writing
          </h2>
          <p
            className="text-lg"
            style={{ color: "var(--text-dim)" }}
          >
            Teardowns, essays, and analysis on fintech, payments, and product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <a
              key={`${item.type}-${item.id}`}
              href={item.link}
              className="card group h-full flex flex-col p-6 hover:border-green-a50"
              style={{
                borderColor: "var(--border)",
                background: "var(--bg-secondary)",
              }}
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold mb-2 group-hover:text-green transition-colors"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <span
                  className="px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap flex-shrink-0"
                  style={{
                    background: "var(--green-a8)",
                    color: "var(--green)",
                    border: "1px solid var(--green-a35)",
                  }}
                >
                  {item.type === "blog" ? "Article" : "Teardown"}
                </span>
              </div>

              <p
                className="text-sm mb-4 flex-1"
                style={{ color: "var(--text-dim)" }}
              >
                {item.description}
              </p>

              <div className="flex items-center justify-between text-xs font-mono">
                <time
                  dateTime={item.date}
                  style={{ color: "var(--text-muted)" }}
                >
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <div className="flex items-center gap-3">
                  {item.readingTime && (
                    <span style={{ color: "var(--text-muted)" }}>
                      {item.readingTime} min read
                    </span>
                  )}
                  {item.category && (
                    <span style={{ color: "var(--text-muted)" }}>
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer hover:gap-2"
            style={{
              color: "var(--green)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            View all articles <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
