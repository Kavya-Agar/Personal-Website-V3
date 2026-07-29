import { RailHead, SectionHead } from "./ui";
import { alsoFamiliarWith, certs, skillColumns, toolsOfTheTrade } from "./data";

export function Almanac() {
  return (
    <div>
      <SectionHead
        kicker="Section F · Almanac"
        kickerColor="var(--ink-muted)"
        title="The Stack, by the tables"
      />

      <div
        className="news-triple"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32,
          paddingTop: 22,
        }}
      >
        {skillColumns.map((col) => (
          <div key={col.title}>
            <RailHead>{col.title}</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                font: "400 12.5px var(--f-mono)",
                color: "var(--ink-soft)",
              }}
            >
              {col.skills.map((s) => (
                <div key={s.name}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 6,
                      marginBottom: 4,
                    }}
                  >
                    <span>{s.name}</span>
                    {/* dotted leader, as a print table would run it */}
                    <span style={{ flex: 1, borderBottom: "1px dotted var(--rule-leader)" }} />
                    <span style={{ color: "var(--ink-muted)" }}>{s.pct}</span>
                  </div>
                  <div style={{ height: 5, background: "var(--track)" }}>
                    <div style={{ height: "100%", width: s.pct, background: "var(--ink)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="news-split"
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: 32,
          marginTop: 26,
          paddingTop: 18,
          borderTop: "1px solid var(--ink)",
        }}
      >
        <div>
          <RailHead bare>Also familiar with</RailHead>
          <p className="news-body">{alsoFamiliarWith}</p>

          <p className="news-railhead" style={{ margin: "20px 0 10px" }}>
            Style · Tools of the trade
          </p>
          <div className="news-cols" style={{ columnRule: "none" }}>
            {toolsOfTheTrade.map((line, i) => (
              <p
                key={line}
                className="news-body-sm"
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.5,
                  marginBottom: i === toolsOfTheTrade.length - 1 ? 0 : 9,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div>
          <RailHead double>Of Record · Certifications</RailHead>
          {certs.map((c) => (
            <div key={c.name} className="news-hr" style={{ paddingBottom: 11, marginBottom: 11 }}>
              <h4 className="news-display" style={{ fontSize: 19, lineHeight: 1.2, marginBottom: 3 }}>
                {c.name}
              </h4>
              <p className="news-mono" style={{ color: "var(--ink-faint)" }}>
                {c.issuer} · {c.date}
              </p>
              <p style={{ font: "400 14px/1.4 var(--f-body)", color: "var(--ink-soft)" }}>
                {c.credentialId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
