import { SectionHead } from "./ui";
import { projects } from "./data";
import { projectFigures, projectFigureCaptions } from "./ProjectFigures";

export function Portfolio() {
  return (
    <div>
      <SectionHead
        kicker="Section C · Technology"
        kickerColor="var(--news-blue)"
        title="The Portfolio"
        deck="Six projects shipped · three in production · every repository open for inspection."
      />

      <div
        className="news-pair"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px", paddingTop: 22 }}
      >
        {projects.map((p) => (
          <article
            key={p.name}
            className="news-hr news-story"
            style={{ paddingBottom: 20, marginBottom: 20 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 7,
              }}
            >
              <span className="news-kicker" style={{ letterSpacing: "0.2em", color: p.statusColor }}>
                {p.status}
              </span>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="news-more news-draw"
              >
                View repository ↗
              </a>
            </div>
            <h3
              className="news-display news-headline"
              style={{ fontSize: 32, lineHeight: 1.08, marginBottom: 9 }}
            >
              {p.name}
            </h3>
            <div
              style={{
                border: "1px solid var(--rule)",
                background: "var(--paper)",
                padding: "10px 12px 8px",
                marginBottom: 6,
              }}
            >
              {(() => {
                const Figure = projectFigures[p.name];
                return Figure ? <Figure /> : null;
              })()}
            </div>
            <p
              className="news-mono"
              style={{ color: "var(--ink-muted)", fontSize: 11, lineHeight: 1.4, marginBottom: 10 }}
            >
              {projectFigureCaptions[p.name]}
            </p>
            <p className="news-body" style={{ marginBottom: 9 }}>
              {p.desc}
            </p>
            <p className="news-mono" style={{ color: "var(--ink-muted)" }}>
              {p.stackLine}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
