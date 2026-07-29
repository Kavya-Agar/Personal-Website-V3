import { Heatmap } from "./Heatmap";
import { RailBox, RailHead, SectionHead } from "./ui";
import { marketsColumn, onTheDesk } from "./data";
import type { IndexRow } from "./useEdition";

export function Markets({
  indices,
  clock,
  marketOpen,
}: {
  indices: IndexRow[];
  clock: string;
  marketOpen: boolean | null;
}) {
  return (
    <div>
      <SectionHead
        kicker="Section D · Markets"
        kickerColor="#33383d"
        title="The Economy, as I read it"
      />

      <div
        className="news-split"
        style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32, paddingTop: 22 }}
      >
        <div>
          <h3 className="news-display" style={{ fontSize: 30, lineHeight: 1.15, marginBottom: 10 }}>
            Stocks close narrowly mixed as rate expectations hold the tape
          </h3>
          <div className="news-cols news-cols-faint news-body">
            {marketsColumn.map((para, i) => (
              <p key={para} style={{ marginBottom: i === marketsColumn.length - 1 ? 0 : 11 }}>
                {para}
              </p>
            ))}
          </div>

          <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--ink)" }}>
            <RailHead bare>S&amp;P 500 by sector</RailHead>
            <Heatmap />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <RailHead double>The Close</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                font: "400 12.5px var(--f-mono)",
                color: "var(--ink)",
              }}
            >
              {indices.map((i) => (
                <div
                  key={i.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 8,
                    paddingBottom: 6,
                    borderBottom: "1px dotted var(--rule-dotted)",
                  }}
                >
                  <span>{i.label}</span>
                  <span>{i.value}</span>
                  <span style={{ color: i.color }}>{i.change}</span>
                </div>
              ))}
            </div>
            <p className="news-mono" style={{ marginTop: 9, color: "var(--ink-faint)" }}>
              {marketOpen === null ? " " : `NYSE ${marketOpen ? "open" : "closed"} · ${clock}`}
            </p>
          </div>

          <div>
            <RailHead>On the Desk</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
                font: "400 15px/1.3 var(--f-body)",
                color: "var(--ink-soft)",
              }}
            >
              {onTheDesk.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <RailBox>
            <p
              style={{
                font: "400 15px/1.5 var(--f-body)",
                fontStyle: "italic",
                color: "var(--ink-muted)",
              }}
            >
              &ldquo;The stock market is a device for transferring money from the impatient to the
              patient.&rdquo;
            </p>
            <p className="news-mono" style={{ marginTop: 6, color: "var(--ink-faint)" }}>
              — Warren Buffett
            </p>
          </RailBox>
        </div>
      </div>
    </div>
  );
}
