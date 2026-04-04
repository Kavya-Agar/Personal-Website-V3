const projects = [
  {
    name: "Financial NER Analyzer",
    desc: "Production-ready document classifier with custom entity recognition for transaction amounts, dates, and account numbers. Fine-tuned DistilBERT on 116K+ tokens achieving 98% accuracy.",
    stack: ["Python", "PyTorch", "HuggingFace", "AWS", "React", "Docker"],
    status: "LIVE",
    href: "https://github.com/Kavya-Agar/financial-ner-project",
  },
  {
    name: "Stock Sentiment Dashboard",
    desc: "End-to-end ML pipeline serving 50+ users with real-time sentiment analysis from Reddit and Finnhub. Ensemble NLP inference achieving 78% accuracy with CloudWatch health monitoring.",
    stack: ["Python", "AWS", "HuggingFace", "Terraform", "Flask", "React"],
    status: "LIVE",
    href: "https://github.com/Kavya-Agar/Stock-Sentiment-Dashboard",
  },
  {
    name: "FIN-ance",
    desc: "Cross-platform payment and expense-tracking app with ML-based spending forecasts (90% accuracy). Django REST API handling 1,000+ daily requests with OAuth 2.0 and iOS WidgetKit client.",
    stack: ["Django", "React", "TensorFlow", "SwiftUI", "PostgreSQL", "Docker"],
    status: "LIVE",
    href: "https://github.com/Kavya-Agar/fin-ance",
  },
  {
    name: "aggiering",
    desc: "An unofficial webring connecting Texas A&M students and alumni to strengthen the Aggie network. Discover and link Aggie-built sites.",
    stack: ["Web", "JavaScript"],
    status: "OPEN SOURCE",
    href: "https://github.com/Kavya-Agar/aggiering",
  },
  {
    name: "Portfolio V3",
    desc: "This site — finance terminal aesthetic with live market ticker, animated chart, command palette (⌘K), and real-time S&P/DOW/NASDAQ data.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "WIP",
    href: "https://github.com/Kavya-Agar/Personal-Website-V3",
  },
  {
    name: "Pomodoro",
    desc: "Minimalist focus timer implementing the Pomodoro technique with session tracking and customizable work/break intervals.",
    stack: ["JavaScript", "HTML/CSS"],
    status: "OPEN SOURCE",
    href: "https://github.com/Kavya-Agar/pomodoro",
  },
];

const statusStyles: Record<string, { color: string; bg: string; border: string }> = {
  LIVE:          { color: "#00c853", bg: "rgba(0,200,83,0.08)",    border: "rgba(0,200,83,0.25)" },
  "OPEN SOURCE": { color: "#58a6ff", bg: "rgba(88,166,255,0.08)",  border: "rgba(88,166,255,0.25)" },
  WIP:           { color: "#ffd700", bg: "rgba(255,215,0,0.08)",   border: "rgba(255,215,0,0.25)" },
  RESEARCH:      { color: "#b87333", bg: "rgba(184,115,51,0.08)",  border: "rgba(184,115,51,0.25)" },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-20"
      style={{ background: "#161b22", borderTop: "1px solid #30363d" }}
    >
      <div className="max-w-6xl">
        <p className="font-mono text-[11px] mb-2" style={{ color: "#00c853" }}>
          [ PROJECTS ]
        </p>
        <h2
          className="font-bold mb-2"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "#e6edf3" }}
        >
          The Portfolio
        </h2>
        <p className="font-mono text-sm mb-12" style={{ color: "#8b949e" }}>
          {projects.length} projects shipped · 3 in production · ∞ ideas in the pipeline
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => {
            const style = statusStyles[proj.status] ?? statusStyles.WIP;
            return (
              <a
                key={proj.name}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex flex-col gap-3 cursor-pointer no-underline"
              >
                <div className="flex items-start justify-between">
                  <h3
                    className="font-semibold text-base leading-tight"
                    style={{ color: "#e6edf3", fontFamily: "Inter, sans-serif" }}
                  >
                    {proj.name}
                  </h3>
                  <span
                    className="font-mono text-[9px] px-1.5 py-0.5 rounded shrink-0 ml-2"
                    style={{ color: style.color, background: style.bg, border: `1px solid ${style.border}` }}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-xs leading-relaxed flex-1"
                  style={{ color: "#8b949e", fontFamily: "Inter, sans-serif" }}>
                  {proj.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((s) => (
                      <span key={s} className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                        style={{ color: "#8b949e", background: "rgba(48,54,61,0.8)", border: "1px solid #30363d" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-[10px] shrink-0 ml-3" style={{ color: "#484f58" }}>↗</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
