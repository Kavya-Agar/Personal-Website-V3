import { RailHead, SectionHead } from "./ui";
import type { Essay, TeardownRow } from "./useEdition";

export function ArtsCulture({
  essays,
  teardowns,
  loading,
}: {
  essays: Essay[];
  teardowns: TeardownRow[];
  loading: boolean;
}) {
  return (
    <div>
      <SectionHead
        kicker="Section E · Arts & Culture"
        kickerColor="var(--news-amber)"
        title="Essays & Teardowns"
      />

      <div
        className="news-split"
        style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32, paddingTop: 22 }}
      >
        <div>
          {loading ? (
            <p className="news-mono" style={{ color: "var(--ink-faint)" }}>
              [ setting the essays… ]
            </p>
          ) : essays.length === 0 ? (
            <p className="news-body">No essays in this edition.</p>
          ) : (
            essays.map((w) => (
              <article
                key={w.id}
                className="news-hr news-story"
                style={{ paddingBottom: 20, marginBottom: 20 }}
              >
                <p className="news-kicker" style={{ letterSpacing: "0.2em", color: "var(--news-amber)", marginBottom: 7 }}>
                  {w.kind} · {w.meta} · {w.date}
                </p>
                <h3
                  className="news-display news-headline"
                  style={{ fontSize: 32, lineHeight: 1.1, marginBottom: 9 }}
                >
                  {w.title}
                </h3>
                <p className="news-body" style={{ fontSize: 16.5, marginBottom: 9 }}>
                  {w.description}
                </p>
                <a href={w.link} className="news-more news-draw">
                  Read the piece →
                </a>
              </article>
            ))
          )}
        </div>

        <div>
          <RailHead double>Teardowns</RailHead>
          {loading ? (
            <p className="news-mono" style={{ color: "var(--ink-faint)" }}>
              [ setting the teardowns… ]
            </p>
          ) : (
            teardowns.map((t) => (
              <article
                key={t.id}
                className="news-hr news-story"
                style={{ paddingBottom: 13, marginBottom: 13 }}
              >
                <h4
                  className="news-display news-headline"
                  style={{ fontSize: 21, lineHeight: 1.15, marginBottom: 4 }}
                >
                  {t.title}
                </h4>
                <p
                  style={{ font: "400 11px var(--f-mono)", color: "var(--ink-faint)", marginBottom: 6 }}
                >
                  {t.meta}
                  {t.date ? ` · ${t.date}` : ""}
                </p>
                <p className="news-body-sm" style={{ fontSize: 14.5, lineHeight: 1.45, marginBottom: 6 }}>
                  {t.description}
                </p>
                <a
                  href={t.link}
                  className="news-more news-draw"
                  style={{ fontSize: 10.5 }}
                >
                  Read →
                </a>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
