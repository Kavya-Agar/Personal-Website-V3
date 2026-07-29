import { DataRow, RailBox, RailHead, SectionHead } from "./ui";
import { bio, coursework, currently, practice } from "./data";

const BY_THE_NUMBERS: [string, string][] = [
  ["Graduation", "May 2027"],
  ["University", "Texas A&M"],
  ["Focus", "Product · Strategy"],
  ["Location", "Houston, TX"],
];

export function Opinion() {
  return (
    <div>
      <SectionHead
        kicker="Section A · Opinion"
        kickerColor="var(--news-maroon)"
        title="Letter from the desk"
      />

      <div
        className="news-split"
        style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32, paddingTop: 22 }}
      >
        <div>
          <h3 className="news-display" style={{ fontSize: 38, lineHeight: 1.1, marginBottom: 12 }}>
            The most interesting fintech problems aren&rsquo;t engineering problems
          </h3>
          <p
            className="news-dateline news-hr"
            style={{ fontSize: 11, paddingBottom: 12, marginBottom: 14 }}
          >
            By Kavya Agar · CS Student · Product · Fintech
          </p>
          <div
            className="news-cols news-cols-faint news-body"
            style={{ fontSize: 16.5, lineHeight: 1.6 }}
          >
            <p className="news-dropcap" style={{ marginBottom: 11 }}>
              {bio[0]}
            </p>
            <p style={{ marginBottom: 11 }}>{bio[1]}</p>
            <p>{bio[2]}</p>
          </div>

          <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--ink)" }}>
            <RailHead bare>Coursework of record</RailHead>
            <p className="news-body" style={{ fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>
              {coursework}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <RailBox outlined>
            <RailHead bare>By the numbers</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                font: "400 12.5px var(--f-mono)",
                color: "var(--ink-soft)",
              }}
            >
              {BY_THE_NUMBERS.map(([label, value]) => (
                <DataRow key={label} label={label} value={value} />
              ))}
            </div>
          </RailBox>

          <div>
            <RailHead>Practice</RailHead>
            <p className="news-body" style={{ fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-soft)" }}>
              {practice}
            </p>
          </div>

          <RailBox>
            <RailHead bare>Currently</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                font: "400 15px/1.35 var(--f-body)",
                color: "var(--ink-soft)",
              }}
            >
              {currently.map(([verb, title, trailing]) => (
                <span key={verb}>
                  {verb} — {title ? <em>{title}</em> : null}
                  {trailing}
                </span>
              ))}
            </div>
          </RailBox>
        </div>
      </div>
    </div>
  );
}
