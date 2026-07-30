// Static copy of the newspaper edition's content, transcribed from the Claude Design
// source (`Newspaper Portfolio - Site.dc.html`). Anything the site can source live
// — indices, the clock, the dateline, essays and teardowns — is fetched at runtime
// instead; see `useIndices.ts` and `useDispatches.ts`.

export type SectionKey =
  | "front"
  | "opinion"
  | "biz"
  | "tech"
  | "markets"
  | "arts"
  | "almanac"
  | "classifieds";

export interface Section {
  key: SectionKey;
  /** Plain-language name, for readers who don't want the newspaper conceit. */
  plain: string;
  /** Newspaper section name. */
  label: string;
  /** Folio, i.e. the page number a print edition would use. */
  folio: string;
}

export const SECTIONS: Section[] = [
  { key: "front", plain: "Home", label: "Front Page", folio: "A1" },
  { key: "opinion", plain: "About", label: "Opinion", folio: "A2" },
  { key: "biz", plain: "Experience", label: "Business", folio: "B1" },
  { key: "tech", plain: "Projects", label: "Technology", folio: "C1" },
  { key: "markets", plain: "Interests", label: "Markets", folio: "D1" },
  { key: "arts", plain: "Writing", label: "Arts & Culture", folio: "E4" },
  { key: "almanac", plain: "Skills", label: "Almanac", folio: "F2" },
  { key: "classifieds", plain: "Contact", label: "Classifieds", folio: "G6" },
];

export const SECTION_KEYS = SECTIONS.map((s) => s.key);

export function isSectionKey(value: string): value is SectionKey {
  return (SECTION_KEYS as string[]).includes(value);
}

/**
 * Epoch for the masthead's "Vol. / No." line — this repo's first commit, i.e.
 * when the site itself launched. Volume advances yearly from here, issue
 * number advances monthly within a volume (both roll over on the day-of-month
 * anniversary, not the 1st, so a mid-month launch date doesn't skip an issue).
 */
const LAUNCH_DATE = new Date("2026-04-04T00:00:00-05:00");

const ROMAN_TABLE: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

function toRoman(num: number): string {
  let n = num;
  let out = "";
  for (const [value, symbol] of ROMAN_TABLE) {
    while (n >= value) {
      out += symbol;
      n -= value;
    }
  }
  return out;
}

/** e.g. "Vol. I · No. 4" — see `LAUNCH_DATE` for the cadence. */
export function volumeAndIssue(now: Date = new Date()): string {
  const monthsElapsed =
    (now.getFullYear() - LAUNCH_DATE.getFullYear()) * 12 +
    (now.getMonth() - LAUNCH_DATE.getMonth()) -
    (now.getDate() < LAUNCH_DATE.getDate() ? 1 : 0);
  const clamped = Math.max(0, monthsElapsed);
  const volume = Math.floor(clamped / 12) + 1;
  const issue = (clamped % 12) + 1;
  return `Vol. ${toRoman(volume)} · No. ${issue}`;
}

export const EDITIONS = ["morning", "evening", "sunday"] as const;
export type Edition = (typeof EDITIONS)[number];

export interface LedgerEntry {
  period: string;
  location: string;
  role: string;
  company: string;
  badge: string;
  bullets: string[];
  stackLine: string;
}

export const ledger: LedgerEntry[] = [
  {
    period: "May 2026 – Present",
    location: "Houston, TX",
    role: "Business Development Intern",
    company: "Aspen Technology",
    badge: "Current",
    bullets: ["Upcoming for summer 2026, on the business development desk."],
    stackLine: "Business Development · Strategy",
  },
  {
    period: "Jan 2024 – Apr 2024",
    location: "Houston, TX",
    role: "Technical Business Analyst Intern",
    company: "Aspen Technology",
    badge: "+15% revenue impact",
    bullets: [
      "Built automated Python web-scraping pipelines using BeautifulSoup and Selenium to analyze 5+ competing analytics platforms, reducing manual research time by 60%.",
      "Partnered with PMs and engineers to translate data insights into product strategy decisions, contributing to an estimated 15% revenue impact.",
    ],
    stackLine: "Python · BeautifulSoup · Selenium · Data Analysis",
  },
  {
    period: "Jun 2023 – Aug 2023",
    location: "Houston, TX",
    role: "Software Engineering Intern · Team Lead",
    company: "JPMorgan Chase & Co.",
    badge: "+90% efficiency",
    bullets: [
      "Engineered a multithreaded Java data pipeline for a distributed system migrating 10TB+ from Apache Cassandra to AWS S3, implementing custom Parquet conversion and improving migration efficiency by 90%.",
      "Collaborated with 3 senior engineers through 10+ code reviews to harden system reliability, performance, and data integrity, writing unit tests and validating end-to-end pipeline correctness.",
      "Led daily Agile stand-ups for an 8-person cross-functional team, coordinating sprint execution and presenting the final solution to Executive Directors.",
    ],
    stackLine: "Java · Apache Cassandra · AWS S3 · Parquet · Agile",
  },
];

export interface Project {
  name: string;
  status: string;
  statusColor: string;
  href: string;
  desc: string;
  stackLine: string;
}

export const projects: Project[] = [
  {
    name: "Financial NER Analyzer",
    status: "Live",
    statusColor: "var(--news-green)",
    href: "https://github.com/Kavya-Agar/financial-ner-project",
    desc: "Production-ready document classifier with custom entity recognition for transaction amounts, dates, and account numbers. Fine-tuned DistilBERT on 116K+ tokens achieving 98% accuracy.",
    stackLine: "Python · PyTorch · HuggingFace · AWS · React · Docker",
  },
  {
    name: "Stock Sentiment Dashboard",
    status: "Live",
    statusColor: "var(--news-green)",
    href: "https://github.com/Kavya-Agar/Stock-Sentiment-Dashboard",
    desc: "End-to-end ML pipeline serving 50+ users with real-time sentiment analysis from Reddit and Finnhub. Ensemble NLP inference achieving 78% accuracy with CloudWatch health monitoring.",
    stackLine: "Python · AWS · HuggingFace · Terraform · Flask · React",
  },
  {
    name: "FIN-ance",
    status: "Live",
    statusColor: "var(--news-green)",
    href: "https://github.com/Kavya-Agar/fin-ance",
    desc: "Cross-platform payment and expense-tracking app with ML-based spending forecasts (90% accuracy). Django REST API handling 1,000+ daily requests with OAuth 2.0 and an iOS WidgetKit client.",
    stackLine: "Django · React · TensorFlow · SwiftUI · PostgreSQL · Docker",
  },
  {
    name: "Quant-Options-Engine",
    status: "Live",
    statusColor: "var(--news-green)",
    href: "https://github.com/Kavya-Agar/Quant-Options-Engine",
    desc: "From-scratch options pricing engine implementing Black-Scholes Greeks, 50K-path Monte Carlo GBM simulation with antithetic variance reduction, and a Brent's method IV solver across live options chains via yfinance/FRED. FastAPI backend serving a React dashboard with real-time Greeks sliders.",
    stackLine: "Python · FastAPI · React · NumPy · SciPy · Recharts",
  },
  {
    name: "Portfolio V3",
    status: "Work in progress",
    statusColor: "var(--news-amber)",
    href: "https://github.com/Kavya-Agar/Personal-Website-V3",
    desc: "The previous edition of this site — a finance terminal aesthetic with live market ticker, animated chart, command palette, and real-time index data.",
    stackLine: "Next.js · TypeScript · Tailwind CSS",
  },
  {
    name: "Root-Diffing-Agent",
    status: "Work in progress",
    statusColor: "var(--news-amber)",
    href: "https://github.com/Kavya-Agar/Root-Diffing-Agent",
    desc: "When an app breaks after a deploy, this correlates error-log spikes against the commit and config diff history instead of manually git-bisecting — ranking likely culprits by statistical correlation across a noisy signal, with reasoning, not just “last commit before the error.”",
    stackLine: "Python · Git · pandas · statistical correlation",
  },
];

export interface Skill {
  name: string;
  pct: string;
}

export interface SkillColumn {
  title: string;
  skills: Skill[];
}

export const skillColumns: SkillColumn[] = (
  [
    {
      title: "Languages",
      skills: [
        ["Python", 92],
        ["Java", 88],
        ["JavaScript / TS", 85],
        ["C / C++", 78],
        ["SQL", 82],
      ],
    },
    {
      title: "Frameworks & ML",
      skills: [
        ["React / Django", 88],
        ["PyTorch / TensorFlow", 82],
        ["HuggingFace", 80],
        ["Scikit-learn", 85],
        ["Pandas", 88],
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        ["AWS", 85],
        ["Docker", 80],
        ["Kubernetes", 72],
        ["Terraform", 72],
        ["Git / CI-CD", 92],
      ],
    },
  ] as { title: string; skills: [string, number][] }[]
).map((c) => ({
  title: c.title,
  skills: c.skills.map(([name, lvl]) => ({ name, pct: `${lvl}%` })),
}));

export interface Cert {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export const certs: Cert[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jun 2025",
    credentialId: "CLF-C02 · Expires Jun 2028",
  },
  {
    name: "IBM DevOps & Software Engineering",
    issuer: "IBM",
    date: "Jul 2025",
    credentialId: "15-Course Professional Certificate",
  },
  {
    name: "Databricks Generative AI Fundamentals",
    issuer: "Databricks",
    date: "Aug 2025",
    credentialId: "Expires Aug 2027",
  },
];

export const alsoFamiliarWith =
  "Swift · R · Flask · Selenium · PostgreSQL · MongoDB · DynamoDB · Cassandra · Elasticsearch · LangChain · GitHub Actions · Jenkins · HTML/CSS · JavaScript";

export const toolsOfTheTrade = [
  "MacBook Air 13″, Apple M3, 16 GB, with a 4K external display.",
  "VS Code as primary IDE, Catppuccin Macchiato; Xcode for Swift.",
  "macOS Terminal with Zsh, fzf and the GitHub CLI.",
  "Notion, Figma, Discord, and lo-fi on Spotify.",
];

export const coursework =
  "Statistics · Database Management · Software Engineering · Business Strategy · Data Structures & Algorithms · Computer Systems · Operating Systems";

export const practice =
  "Product Strategy · User Research · Data Analysis · Roadmapping · Cross-functional leadership";

export const onTheDesk = [
  "S&P 500 momentum",
  "Fintech M&A",
  "AI × Banking",
  "Stripe product bets",
  "Federal Reserve policy",
];

/** `[verb, title, trailing]` — only the work's title is set in italics. */
export const currently: [string, string, string?][] = [
  ["Reading", "Inspired", ", Marty Cagan"],
  ["Building", "", "a fintech side project"],
  ["Listening", "Acquired"],
  ["Brewing", "", "Ethiopian Yirgacheffe"],
];

export const bio = [
  "Junior at Texas A&M studying CS with minors in Statistics and Business. I've been following markets since before I could write a line of code — something about the overlap of data, behavior, and real-time systems clicked early.",
  "Now I'm moving toward PM because the most interesting fintech problems aren't engineering problems: they're about what to build, who it's for, and why it matters.",
  "Having an engineering background means I can close the gap between strategy and implementation without a translator.",
];

export const marketsColumn = [
  "The S&P 500 held its advance while the NASDAQ gave back a quarter point and volatility eased, leaving the broad market roughly where it began the week.",
  "Earnings have stopped setting the direction. What moves the tape now is the expected path of policy — and the sectors most sensitive to it are the ones I watch closest, because they set the pace for fintech product decisions.",
  "Payments infrastructure keeps compounding: the businesses that treat rails as product rather than plumbing continue to take share, which is the thesis behind most of what I build and write.",
  "Follow the desk notes in Arts & Culture for the long-form version of this argument.",
];

export const EMAIL = "kavyaagar0@gmail.com";
export const GITHUB = "https://github.com/Kavya-Agar";
export const LINKEDIN = "https://www.linkedin.com/in/kavya-agar/";
