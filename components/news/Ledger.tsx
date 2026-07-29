import { RailBox, RailHead, SectionHead } from "./ui";
import { certs, ledger } from "./data";

export function Ledger() {
  return (
    <div>
      <SectionHead
        kicker="Section B · Business"
        kickerColor="var(--news-green)"
        title="The Ledger"
        deck="Three internships across business development, analytics, and distributed systems engineering."
      />

      <div
        className="news-split"
        style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 32, paddingTop: 22 }}
      >
        <div>
          {ledger.map((e) => (
            <article
              key={`${e.company}-${e.period}`}
              className="news-hr"
              style={{ paddingBottom: 22, marginBottom: 22 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <p style={{ font: "400 12px var(--f-mono)", color: "var(--ink-faint)" }}>
                  {e.period} · {e.location}
                </p>
                <span
                  className="news-kicker"
                  style={{
                    letterSpacing: "0.16em",
                    color: "var(--news-green)",
                    border: "1px solid var(--news-green)",
                    padding: "3px 8px",
                  }}
                >
                  {e.badge}
                </span>
              </div>
              <h3 className="news-display" style={{ fontSize: 34, lineHeight: 1.1, marginBottom: 6 }}>
                {e.role}
              </h3>
              <p
                className="news-dateline"
                style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--news-link)", marginBottom: 12 }}
              >
                {e.company}
              </p>
              <div className="news-cols news-cols-faint news-body">
                {e.bullets.map((b) => (
                  <p key={b} style={{ marginBottom: 10 }}>
                    {b}
                  </p>
                ))}
              </div>
              <p
                className="news-mono"
                style={{ marginTop: 12, color: "var(--ink-muted)" }}
              >
                {e.stackLine}
              </p>
            </article>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <RailBox outlined>
            <RailHead bare>Education</RailHead>
            <p className="news-display" style={{ fontSize: 19, lineHeight: 1.2, marginBottom: 4 }}>
              Texas A&amp;M University
            </p>
            <p className="news-body-sm">
              B.S. Computer Science · Minors in Statistics and Business
            </p>
            <p className="news-mono" style={{ marginTop: 6, color: "var(--ink-faint)" }}>
              Aug 2024 – May 2027
            </p>
          </RailBox>

          <div>
            <RailHead>Of Record</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 9,
                font: "400 14px/1.35 var(--f-body)",
                color: "var(--ink-soft)",
              }}
            >
              {certs.map((c) => (
                <div key={c.name}>
                  <span style={{ display: "block" }}>{c.name}</span>
                  <span style={{ font: "400 11px var(--f-mono)", color: "var(--ink-faint)" }}>
                    {c.issuer} · {c.credentialId}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <RailBox>
            <RailHead bare color="var(--news-red)">
              Situations Wanted
            </RailHead>
            <p className="news-body-sm" style={{ fontSize: 14.5 }}>
              PM internship, Summer 2027.
            </p>
            <a
              href="/resume.pdf"
              className="news-btn"
              style={{
                display: "inline-block",
                marginTop: 9,
                fontSize: 11,
                padding: "7px 12px",
                background: "var(--ink)",
                color: "var(--paper)",
              }}
            >
              Full résumé ↗
            </a>
          </RailBox>
        </div>
      </div>
    </div>
  );
}
