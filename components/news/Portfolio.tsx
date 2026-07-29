import { SectionHead } from "./ui";
import { projects } from "./data";

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
                height: 118,
                backgroundColor: "var(--paper-shade)",
                backgroundImage: "radial-gradient(var(--ink) 1.4px, transparent 1.5px)",
                backgroundSize: "7px 7px",
                opacity: 0.4,
                marginBottom: 10,
                display: "flex",
                alignItems: "flex-end",
                padding: 9,
              }}
            >
              <span
                className="news-kicker"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: "var(--ink)",
                  background: "var(--paper)",
                  padding: "3px 7px",
                }}
              >
                Placeholder · screenshot or diagram
              </span>
            </div>
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
