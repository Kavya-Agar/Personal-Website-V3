import { RailBox, RailHead } from "./ui";
import { WorldMap } from "./WorldMap";
import { SECTIONS, bio, certs, EMAIL, volumeAndIssue, type SectionKey } from "./data";
import type { IndexRow, WeatherReading } from "./useEdition";

export function FrontPage({
  dateLine,
  indices,
  weather,
  go,
}: {
  dateLine: string;
  indices: IndexRow[];
  weather: WeatherReading | null;
  go: (key: SectionKey) => void;
}) {
  return (
    <div>
      {/* Folio line */}
      <div
        className="news-dateline news-hr"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: "4px 16px",
          padding: "14px 0 8px",
        }}
      >
        <span>{volumeAndIssue()}</span>
        {/* Empty until mount — see useDateline() */}
        <span>{dateLine || " "}</span>
        <span>Houston, Texas</span>
        <span>Portfolio of Kavya Agar</span>
      </div>

      {/* Masthead */}
      <div className="news-hr-double" style={{ textAlign: "center", padding: "22px 0 14px" }}>
        <h1 className="news-masthead">The Kavya Times</h1>
        <p
          className="news-dateline"
          style={{ marginTop: 14, letterSpacing: "0.34em", fontSize: 12 }}
        >
          Systems · Markets · And the space between
        </p>
      </div>

      <div
        className="news-front-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.55fr 1fr 232px",
          gap: 26,
          paddingTop: 22,
        }}
      >
        {/* -- Lead story ------------------------------------------------- */}
        <div>
          <p className="news-kicker" style={{ letterSpacing: "0.24em", color: "var(--news-red)", marginBottom: 10 }}>
            The Candidate
          </p>
          <h2
            className="news-display"
            style={{
              fontSize: "clamp(38px, 6.5vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-1px",
              marginBottom: 14,
            }}
          >
            Technical depth, product vision
          </h2>
          <p
            className="news-lede news-hr"
            style={{ paddingBottom: 12, marginBottom: 12 }}
          >
            Kavya Agar, a junior at Texas A&amp;M, is building at the intersection of software
            and markets — and is open to internships for Summer 2027.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 14,
              marginBottom: 16,
            }}
          >
            <span className="news-dateline" style={{ letterSpacing: "0.18em" }}>
              By Kavya Agar · Houston, Texas
            </span>
            <span className="news-mono" style={{ color: "var(--news-green)" }}>
              ● Open to internships · Summer 2027
            </span>
          </div>

          <WorldMap />
          <p
            className="news-hr"
            style={{
              font: "400 13px/1.35 var(--f-body)",
              color: "var(--ink-muted)",
              paddingBottom: 14,
            }}
          >
            Fig. 1 — Countries visited: Canada, the U.S., Mexico, the U.K., France, Belgium,
            the Netherlands, India.
          </p>

          <div className="news-cols news-body" style={{ marginTop: 14, fontSize: 16.5 }}>
            <p className="news-dropcap" style={{ marginBottom: 11 }}>
              {bio[0]}
            </p>
            <p style={{ marginBottom: 11 }}>{bio[1]}</p>
            <p>{bio[2]}</p>
          </div>

          <div
            className="news-print-hide"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 16,
              paddingTop: 12,
              borderTop: "1px solid var(--ink)",
            }}
          >
            <button
              type="button"
              onClick={() => go("tech")}
              className="news-btn"
              style={{
                padding: "10px 16px",
                background: "var(--ink)",
                color: "var(--paper)",
                border: "none",
              }}
            >
              See the projects →
            </button>
            <button
              type="button"
              onClick={() => go("classifieds")}
              className="news-btn"
              style={{
                padding: "10px 16px",
                background: "transparent",
                color: "var(--ink)",
                border: "1px solid var(--ink)",
              }}
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* -- Second column ---------------------------------------------- */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button
            type="button"
            onClick={() => go("tech")}
            className="news-story news-hr"
            style={{
              display: "block",
              textAlign: "left",
              background: "none",
              border: "none",
              borderBottom: "1px solid var(--rule)",
              padding: "0 0 14px",
              cursor: "pointer",
            }}
          >
            <p className="news-kicker" style={{ color: "var(--news-blue)", marginBottom: 8 }}>
              Technology
            </p>
            <h3
              className="news-display news-headline"
              style={{ fontSize: 27, lineHeight: 1.12, marginBottom: 8 }}
            >
              Six shipped, three in production
            </h3>
            <p
              className="news-body"
              style={{ fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-soft)", marginBottom: 8 }}
            >
              A financial NER analyzer at 98% accuracy, a sentiment dashboard serving 50+ users,
              and an options engine pricing Greeks from scratch.
            </p>
            <span className="news-more news-draw">Continued on C1 →</span>
          </button>

          <button
            type="button"
            onClick={() => go("biz")}
            className="news-story"
            style={{
              display: "block",
              textAlign: "left",
              background: "none",
              border: "none",
              borderBottom: "1px solid var(--rule)",
              padding: "0 0 14px",
              cursor: "pointer",
            }}
          >
            <p className="news-kicker" style={{ color: "var(--news-green)", marginBottom: 8 }}>
              Business
            </p>
            <h3
              className="news-display news-headline"
              style={{ fontSize: 27, lineHeight: 1.12, marginBottom: 8 }}
            >
              Three terms, three desks
            </h3>
            <p
              className="news-body"
              style={{ fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-soft)", marginBottom: 8 }}
            >
              Business development at Aspen Technology (an Emerson company), where a 400-account CRM tool grew into a
              40,000+ account global market analysis presented to AspenTech&apos;s President; a
              10TB Cassandra-to-S3 migration at JPMorgan Chase &amp; Co., improving throughput 90%.
            </p>
            <span className="news-more news-draw">Continued on B1 →</span>
          </button>

          <RailBox padding={15}>
            <p className="news-kicker" style={{ color: "#33383d", marginBottom: 10 }}>
              Markets · The Close
            </p>
            <div
              className="news-hr"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                font: "400 12px var(--f-mono)",
                color: "var(--ink)",
                paddingBottom: 10,
              }}
            >
              {indices.map((i) => (
                <div key={i.label} style={{ display: "grid", gridTemplateColumns: "1fr 10ch 1fr", columnGap: 8 }}>
                  <span>{i.label}</span>
                  <span style={{ textAlign: "right" }}>{i.value}</span>
                  <span style={{ color: i.color, textAlign: "right" }}>{i.change}</span>
                </div>
              ))}
            </div>
            <p
              className="news-body"
              style={{ marginTop: 10, fontSize: 15, lineHeight: 1.45, color: "var(--ink-soft)" }}
            >
              Indices closed narrowly mixed; volatility eased. Rate expectations, not earnings,
              remain the swing factor — the read that shapes what I build next.
            </p>
          </RailBox>

          <button
            type="button"
            onClick={() => go("opinion")}
            className="news-story"
            style={{
              display: "block",
              textAlign: "left",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <p className="news-kicker" style={{ color: "var(--news-maroon)", marginBottom: 8 }}>
              Opinion
            </p>
            <h3
              className="news-display news-headline"
              style={{ fontSize: 24, lineHeight: 1.15, marginBottom: 7 }}
            >
              The gap between strategy and implementation
            </h3>
            <span className="news-more news-draw">Read the column →</span>
          </button>
        </div>

        {/* -- Rail ------------------------------------------------------- */}
        <div
          className="news-front-rail"
          style={{
            paddingLeft: 20,
            borderLeft: "1px solid var(--rule)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div>
            <RailHead>Inside</RailHead>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {SECTIONS.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => go(s.key)}
                  className="news-story"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 8,
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    font: "400 15px/1.3 var(--f-body)",
                    color: "var(--ink-soft)",
                    textAlign: "left",
                  }}
                >
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span className="news-headline">{s.plain}</span>
                    <span className="news-mono" style={{ color: "var(--ink-faint)" }}>
                      {s.label}
                    </span>
                  </span>
                  <span className="news-mono" style={{ color: "var(--ink-faint)", flex: "none" }}>
                    {s.folio}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <RailBox padding={12} outlined>
            <RailHead bare>Weather</RailHead>
            <p className="news-body-sm">
              Houston, {weather ? `${weather.condition}, ${weather.tempF}°` : "— , —°"}. Personal
              forecast: recruiting season, high pressure. Reading <em>Inspired</em>; brewing
              Ethiopian Yirgacheffe, pour-over.
            </p>
          </RailBox>

          <div>
            <RailHead>Certified</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                font: "400 13.5px/1.35 var(--f-body)",
                color: "var(--ink-soft)",
              }}
            >
              {certs.map((c) => (
                <span key={c.name}>
                  {c.name} <span style={{ color: "var(--ink-faint)" }}>· {c.date}</span>
                </span>
              ))}
            </div>
          </div>

          <RailBox padding={12}>
            <RailHead bare color="var(--news-red)">
              Situations Wanted
            </RailHead>
            <p className="news-body-sm" style={{ fontSize: 14.5 }}>
              Product-management internship, Summer 2027. Fintech and consumer tech preferred.
              Referrals welcome.
            </p>
            <p style={{ marginTop: 7, font: "400 12px var(--f-mono)" }}>
              <a className="news-draw" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
          </RailBox>
        </div>
      </div>
    </div>
  );
}
