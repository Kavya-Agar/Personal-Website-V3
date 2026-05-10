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
    name: "Quant-Options-Engine",
    desc: "From-scratch options pricing engine implementing Black-Scholes Greeks, 50K-path Monte Carlo GBM simulation with antithetic variance reduction, and a Brent's method IV solver across live options chains via yfinance/FRED. FastAPI backend serving a React dashboard with real-time Greeks sliders and a theoretical vs. market mispricing chart.",
    stack: ["Python", "FastAPI", "React", "NumPy", "SciPy", "Recharts"],
    status: "LIVE",
    href: "https://github.com/Kavya-Agar/Quant-Options-Engine",
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

// Status badge colors are semantic data — intentionally fixed across themes
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
      className="py-20 md:py-32 px-4 sm:px-8 md:px-20"
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[11px] mb-2" style={{ color: "var(--green)" }}>
          [ PROJECTS ]
        </p>
        <h2
          className="font-bold mb-2"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "var(--text-primary)" }}
        >
          The Portfolio
        </h2>
        <p className="font-mono text-sm mb-12" style={{ color: "var(--text-dim)" }}>
          {projects.length} projects shipped · 3 in production · ∞ ideas in the pipeline
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => {
            const style = statusStyles[proj.status] ?? statusStyles.WIP;

            return (
              <a
                key={proj.name}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 flex flex-col gap-3 cursor-pointer no-underline transition-all duration-200 hover:shadow-lg hover:scale-[1.01]"
                style={{
                  color: "var(--text-primary)",
                  borderColor: "var(--green-a20)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="font-semibold text-base leading-tight flex-1"
                    style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
                  >
                    {proj.name}
                  </h3>
                  <span
                    className="font-mono text-[9px] px-2 py-1 rounded-full shrink-0 whitespace-nowrap"
                    style={{ color: style.color, background: style.bg, border: `1px solid ${style.border}` }}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
                  {proj.desc}
                </p>

                <div className="flex items-center justify-between mt-auto gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.slice(0, 3).map((s) => (
                      <span key={s} className="font-mono text-[9px] px-2 py-1 rounded-full"
                        style={{ color: "var(--green)", background: "var(--green-a8)", border: "1px solid var(--green-a20)" }}>
                        {s}
                      </span>
                    ))}
                    {proj.stack.length > 3 && (
                      <span className="font-mono text-[9px] px-2 py-1" style={{ color: "var(--text-muted)" }}>
                        +{proj.stack.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[10px] shrink-0" style={{ color: "var(--green)" }}>↗</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
