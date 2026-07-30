// Bespoke "Fig. N" line-art diagrams for the Portfolio section, one per project,
// in the same blueprint/technical-illustration convention as WorldMap.tsx (Fig. 1)
// and Heatmap.tsx (Fig. 2). Replaces the design's placeholder screenshot blocks.

const INK = "var(--ink)";
const FAINT = "var(--ink-faint)";
const MUTED = "var(--ink-muted)";
const MONO = "var(--f-mono)";
const LABEL = "var(--f-label)";

function Kicker({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text
      x={x}
      y={y}
      style={{ font: `600 8.5px ${LABEL}`, letterSpacing: "0.14em", fill: FAINT }}
    >
      {children}
    </text>
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  dashed,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="var(--paper)"
        stroke={INK}
        strokeWidth={1}
        strokeDasharray={dashed ? "2 2" : undefined}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + (sub ? -1 : 3)}
        textAnchor="middle"
        style={{ font: `600 8px ${LABEL}`, letterSpacing: "0.06em", fill: INK }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 10}
          textAnchor="middle"
          style={{ font: `400 7px ${MONO}`, fill: FAINT }}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={INK}
      strokeWidth={1}
      markerEnd="url(#pf-arrow)"
    />
  );
}

function ArrowDefs() {
  return (
    <defs>
      <marker
        id="pf-arrow"
        viewBox="0 0 8 8"
        refX="6"
        refY="4"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
      </marker>
    </defs>
  );
}

const svgProps = {
  viewBox: "0 0 300 132",
  style: { width: "100%", height: 130, display: "block" } as const,
};

export function NerFigure() {
  const sentence = "Paid $4,200.00 on 03/14/26 to acct #9931";
  const spans = [
    { start: 5, len: 9, tag: "AMOUNT", conf: "0.98" },
    { start: 18, len: 8, tag: "DATE", conf: "0.99" },
    { start: 35, len: 5, tag: "ACCT_NO", conf: "0.96" },
  ];
  const x0 = 12;
  const cw = 6.35;
  return (
    <svg {...svgProps}>
      <Kicker x={12} y={14}>
        ENTITY EXTRACTION
      </Kicker>
      {spans.map((s) => (
        <rect
          key={s.tag}
          x={x0 + s.start * cw - 2}
          y={26}
          width={s.len * cw + 4}
          height={15}
          fill="var(--paper-tint)"
        />
      ))}
      <text x={x0} y={38} style={{ font: `400 11px ${MONO}`, fill: INK }} xmlSpace="preserve">
        {sentence}
      </text>
      {spans.map((s) => {
        const cx = x0 + (s.start + s.len / 2) * cw;
        const chipW = 68;
        const chipX = Math.min(Math.max(cx - chipW / 2, 6), 300 - chipW - 6);
        return (
          <g key={s.tag}>
            <line
              x1={cx}
              y1={41}
              x2={cx}
              y2={78}
              stroke={FAINT}
              strokeWidth={1}
              strokeDasharray="2 2"
            />
            <rect
              x={chipX}
              y={78}
              width={chipW}
              height={30}
              fill="none"
              stroke={INK}
              strokeWidth={1}
            />
            <text
              x={chipX + chipW / 2}
              y={78 + 13}
              textAnchor="middle"
              style={{ font: `600 8px ${LABEL}`, letterSpacing: "0.06em", fill: INK }}
            >
              {s.tag}
            </text>
            <text
              x={chipX + chipW / 2}
              y={78 + 24}
              textAnchor="middle"
              style={{ font: `400 7.5px ${MONO}`, fill: FAINT }}
            >
              conf {s.conf}
            </text>
          </g>
        );
      })}
      <text x={12} y={123} style={{ font: `400 7.5px ${MONO}`, fill: FAINT }}>
        DistilBERT · fine-tuned · 116K+ tokens
      </text>
    </svg>
  );
}

export function SentimentFigure() {
  return (
    <svg {...svgProps}>
      <ArrowDefs />
      <Kicker x={12} y={12}>
        SENTIMENT PIPELINE
      </Kicker>
      <Box x={14} y={20} w={80} h={22} label="REDDIT" />
      <Box x={206} y={20} w={80} h={22} label="FINNHUB" />
      <Arrow d="M60,42 L115,60" />
      <Arrow d="M240,42 L185,60" />
      <Box x={110} y={60} w={80} h={22} label="NLP ENSEMBLE" sub="78% acc." />
      <Arrow d="M150,82 L150,98" />
      <path
        d="M124,110 A26,26 0 0 1 176,110"
        fill="none"
        stroke={INK}
        strokeWidth={1}
      />
      <line
        x1={150}
        y1={110}
        x2={168}
        y2={92}
        stroke={INK}
        strokeWidth={1.4}
      />
      <circle cx={150} cy={110} r={1.6} fill={INK} />
      <text x={150} y={123} textAnchor="middle" style={{ font: `400 8px ${MONO}`, fill: INK }}>
        sentiment +0.62
      </text>
      <line
        x1={190}
        y1={70}
        x2={224}
        y2={92}
        stroke={FAINT}
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      <Box x={224} y={92} w={64} h={20} label="CLOUDWATCH" sub="health" />
      <text x={12} y={126} style={{ font: `400 7.5px ${MONO}`, fill: FAINT }}>
        50+ users served
      </text>
    </svg>
  );
}

export function FinanceFigure() {
  return (
    <svg {...svgProps}>
      <ArrowDefs />
      <Kicker x={12} y={12}>
        SYSTEM ARCHITECTURE
      </Kicker>
      <Box x={10} y={20} w={78} h={22} label="SWIFTUI · iOS" />
      <Box x={10} y={56} w={78} h={22} label="REACT WEB" />
      <Arrow d="M88,31 L134,44" />
      <Arrow d="M88,67 L134,54" />
      <Box x={136} y={38} w={100} h={26} label="DJANGO REST API" sub="OAuth 2.0" />
      <Arrow d="M236,48 L262,48" />
      <g>
        <path
          d="M262,36 a10,4 0 0 1 20,0 v20 a10,4 0 0 1 -20,0 z"
          fill="var(--paper)"
          stroke={INK}
          strokeWidth={1}
        />
        <path d="M262,36 a10,4 0 0 0 20,0" fill="none" stroke={INK} strokeWidth={1} />
      </g>
      <text x={272} y={68} textAnchor="middle" style={{ font: `400 7px ${MONO}`, fill: FAINT }}>
        Postgres
      </text>
      <Arrow d="M186,64 L186,90" />
      <Box x={140} y={92} w={92} h={24} label="ML FORECAST" sub="TensorFlow · 90% acc." />
      <text x={12} y={124} style={{ font: `400 7.5px ${MONO}`, fill: FAINT }}>
        1,000+ requests/day
      </text>
    </svg>
  );
}

export function OptionsFigure() {
  const axisY = 96;
  const axisX = 34;
  return (
    <svg {...svgProps}>
      <Kicker x={12} y={12}>
        LONG CALL PAYOFF
      </Kicker>
      <line x1={axisX} y1={16} x2={axisX} y2={axisY} stroke={FAINT} strokeWidth={1} />
      <line x1={axisX} y1={axisY} x2={284} y2={axisY} stroke={FAINT} strokeWidth={1} />
      <line
        x1={axisX}
        y1={88}
        x2={284}
        y2={88}
        stroke={FAINT}
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      <path
        d={`M${axisX + 6},88 L150,88 L268,22`}
        fill="none"
        stroke="var(--news-green)"
        strokeWidth={1.6}
      />
      <line
        x1={150}
        y1={88}
        x2={150}
        y2={axisY}
        stroke={FAINT}
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      <text x={150} y={110} textAnchor="middle" style={{ font: `400 8px ${MONO}`, fill: INK }}>
        K
      </text>
      <circle cx={186} cy={88} r={2} fill={INK} />
      <text x={186} y={80} textAnchor="middle" style={{ font: `400 7px ${MONO}`, fill: FAINT }}>
        B/E
      </text>
      <text
        x={12}
        y={26}
        style={{ font: `400 7px ${MONO}`, fill: FAINT }}
      >
        P/L
      </text>
      <text x={284} y={axisY + 11} textAnchor="end" style={{ font: `400 7px ${MONO}`, fill: FAINT }}>
        underlying price
      </text>
      <text x={12} y={124} style={{ font: `400 7.5px ${MONO}`, fill: FAINT }}>
        50K-path Monte Carlo GBM · Brent IV solver
      </text>
    </svg>
  );
}

export function PortfolioV3Figure() {
  return (
    <svg {...svgProps}>
      <rect x={10} y={8} width={280} height={112} fill="var(--paper)" stroke={INK} strokeWidth={1} />
      <rect x={10} y={8} width={280} height={16} fill="var(--paper-tint)" stroke={INK} strokeWidth={1} />
      {[18, 25, 32].map((cx) => (
        <circle key={cx} cx={cx} cy={16} r={2.1} fill="none" stroke={INK} strokeWidth={0.8} />
      ))}
      <rect x={46} y={11} width={210} height={9} rx={2} fill="none" stroke={FAINT} strokeWidth={0.8} />
      <line x1={22} y1={36} x2={80} y2={36} stroke={FAINT} strokeWidth={1.2} strokeDasharray="3 2" />
      <line x1={90} y1={36} x2={130} y2={36} stroke={FAINT} strokeWidth={1.2} strokeDasharray="3 2" />
      <line x1={140} y1={36} x2={180} y2={36} stroke={FAINT} strokeWidth={1.2} strokeDasharray="3 2" />
      <rect x={20} y={46} width={230} height={11} fill="none" stroke={INK} strokeWidth={0.8} strokeDasharray="2 2" />
      <text x={25} y={54} style={{ font: `400 7px ${MONO}`, fill: FAINT }}>
        TICKER · live indices
      </text>
      <line x1={22} y1={70} x2={128} y2={70} stroke={INK} strokeWidth={1.6} />
      <line x1={22} y1={80} x2={108} y2={80} stroke={INK} strokeWidth={1.6} />
      <line x1={22} y1={90} x2={90} y2={90} stroke={INK} strokeWidth={1.6} />
      <rect x={150} y={64} width={130} height={48} fill="none" stroke={FAINT} strokeWidth={1} />
      <path
        d="M156,100 L172,88 L188,96 L204,74 L220,84 L236,68 L252,78 L268,60"
        fill="none"
        stroke="var(--news-green)"
        strokeWidth={1.4}
      />
      <text x={22} y={110} style={{ font: `400 7.5px ${MONO}`, fill: FAINT }}>
        finance-terminal aesthetic
      </text>
    </svg>
  );
}

export function RootDiffingFigure() {
  const candidates = [
    { hash: "e91d3f", score: 0.91, suspect: true },
    { hash: "5f2b91", score: 0.42, suspect: false },
    { hash: "70ab34", score: 0.18, suspect: false },
  ];
  const barX = 92;
  const maxBarW = 108;
  const rowY = [89, 102, 115];
  return (
    <svg {...svgProps}>
      <Kicker x={12} y={12}>
        SPIKE ↔ COMMIT CORRELATION
      </Kicker>

      {/* error-rate signal over time, deploys ticked below */}
      <line x1={14} y1={46} x2={286} y2={46} stroke={FAINT} strokeWidth={1} />
      <path
        d="M14,40 L90,39 Q130,38 150,34 Q162,20 172,17 Q182,20 194,34 Q210,38 250,39 L286,40"
        fill="none"
        stroke="var(--news-red)"
        strokeWidth={1.4}
      />
      <line
        x1={172}
        y1={17}
        x2={172}
        y2={41}
        stroke="var(--news-red)"
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      {[
        { x: 40, hash: "a1c9", suspect: false },
        { x: 100, hash: "5f2b", suspect: false },
        { x: 172, hash: "e91d", suspect: true },
        { x: 240, hash: "70ab", suspect: false },
      ].map((c) => (
        <g key={c.x}>
          <line
            x1={c.x}
            y1={41}
            x2={c.x}
            y2={51}
            stroke={c.suspect ? "var(--news-red)" : INK}
            strokeWidth={c.suspect ? 2 : 1}
          />
          <text
            x={c.x}
            y={60}
            textAnchor="middle"
            style={{
              font: `400 7px ${MONO}`,
              fill: c.suspect ? "var(--news-red)" : FAINT,
            }}
          >
            {c.hash}
          </text>
        </g>
      ))}

      <line x1={14} y1={67} x2={286} y2={67} stroke="var(--rule-faint)" strokeWidth={1} />
      <text x={14} y={77} style={{ font: `600 7px ${LABEL}`, letterSpacing: "0.1em", fill: FAINT }}>
        RANKED CANDIDATES
      </text>

      <rect
        x={10}
        y={rowY[0] - 7}
        width={280}
        height={14}
        fill="none"
        stroke="var(--news-red)"
        strokeWidth={0.8}
        strokeDasharray="2 2"
      />
      {candidates.map((c, i) => {
        const w = maxBarW * c.score;
        const y = rowY[i];
        return (
          <g key={c.hash}>
            <text x={14} y={y + 3} style={{ font: `600 8px ${MONO}`, fill: INK }}>
              {i + 1}
            </text>
            <text
              x={26}
              y={y + 3}
              style={{
                font: `${c.suspect ? 700 : 400} 7.5px ${MONO}`,
                fill: c.suspect ? "var(--news-red)" : INK,
              }}
            >
              {c.hash}
            </text>
            <rect
              x={barX}
              y={y - 4}
              width={w}
              height={7}
              fill={c.suspect ? "var(--news-red)" : INK}
              fillOpacity={c.suspect ? 1 : 0.35 - i * 0.1}
            />
            <text x={barX + w + 5} y={y + 3} style={{ font: `400 7px ${MONO}`, fill: FAINT }}>
              {c.score.toFixed(2)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export const projectFigures: Record<string, () => React.JSX.Element> = {
  "Financial NER Analyzer": NerFigure,
  "Stock Sentiment Dashboard": SentimentFigure,
  "FIN-ance": FinanceFigure,
  "Quant-Options-Engine": OptionsFigure,
  "Portfolio V3": PortfolioV3Figure,
  "Root-Diffing-Agent": RootDiffingFigure,
};

export const projectFigureCaptions: Record<string, string> = {
  "Financial NER Analyzer":
    "Fig. 3 — Entity tagging over a synthetic transaction line: amount, date, and account number spans with model confidence.",
  "Stock Sentiment Dashboard":
    "Fig. 4 — Reddit and Finnhub feed an NLP ensemble; output resolves to a sentiment score, monitored via CloudWatch.",
  "FIN-ance":
    "Fig. 5 — iOS and web clients share one Django REST API, backed by Postgres, with a separate ML forecasting path.",
  "Quant-Options-Engine":
    "Fig. 6 — Long call payoff at expiry: flat below the strike (K), then 1:1 above it, crossing breakeven (B/E).",
  "Portfolio V3":
    "Fig. 7 — Wireframe of the prior edition: live ticker strip, hero copy, and an animated index chart.",
  "Root-Diffing-Agent":
    "Fig. 8 — Four deploys, one error spike: candidates re-ranked by correlation strength, not merge order — e91d3f leads at 0.91.",
};
