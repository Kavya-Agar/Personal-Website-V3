const experiences = [
  {
    role: "Software Engineering Intern · Team Lead",
    company: "JPMorgan Chase & Co.",
    period: "Jun 2023 – Aug 2023",
    location: "Houston, TX",
    badge: "+90% efficiency",
    bullets: [
      "Engineered a multithreaded Java data pipeline for a distributed system migrating 10TB+ from Apache Cassandra to AWS S3, implementing custom Parquet conversion and improving migration efficiency by 90%",
      "Collaborated with 3 senior engineers through 10+ code reviews to harden system reliability, performance, and data integrity, writing unit tests and validating end-to-end pipeline correctness",
      "Led daily Agile stand-ups for an 8-person cross-functional team, coordinating sprint execution and presenting the final solution to Executive Directors",
    ],
    stack: ["Java", "Apache Cassandra", "AWS S3", "Parquet", "Agile"],
  },
  {
    role: "Technical Business Analyst Intern",
    company: "Aspen Technology",
    period: "Jan 2024 – Apr 2024",
    location: "Houston, TX",
    badge: "+15% revenue impact",
    bullets: [
      "Built automated Python web-scraping pipelines using BeautifulSoup and Selenium to analyze 5+ competing analytics platforms, reducing manual research time by 60%",
      "Partnered with PMs and engineers to translate data insights into product strategy decisions, contributing to an estimated 15% revenue impact",
    ],
    stack: ["Python", "BeautifulSoup", "Selenium", "Data Analysis"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-20"
      style={{ background: "#0d1117", borderTop: "1px solid #30363d" }}
    >
      <div className="max-w-4xl">
        <p className="font-mono text-[11px] mb-2" style={{ color: "#00c853" }}>
          [ WORK EXPERIENCE ]
        </p>
        <h2
          className="font-bold mb-12"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "#e6edf3" }}
        >
          The Ledger
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-[120px] top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #00c853, rgba(0,200,83,0.1))" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-8">
                {/* Date */}
                <div className="w-[120px] shrink-0 pt-1 text-right">
                  <p className="font-mono text-[10px] leading-relaxed" style={{ color: "#8b949e" }}>
                    {exp.period.split("–").map((part, j) => (
                      <span key={j} className="block">{part.trim()}</span>
                    ))}
                  </p>
                </div>

                {/* Dot */}
                <div className="relative flex-none mt-1.5">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={{
                      background: "#0d1117",
                      borderColor: "#00c853",
                      boxShadow: "0 0 8px rgba(0,200,83,0.4)",
                      marginLeft: -6,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="card flex-1 p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-base mb-0.5"
                        style={{ color: "#e6edf3", fontFamily: "Inter, sans-serif" }}>
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm" style={{ color: "#00c853" }}>
                        {exp.company}
                      </p>
                      <p className="font-mono text-[11px] mt-0.5" style={{ color: "#484f58" }}>
                        {exp.location}
                      </p>
                    </div>
                    <span
                      className="font-mono text-[10px] px-2 py-1 rounded shrink-0"
                      style={{
                        color: "#00c853",
                        background: "rgba(0,200,83,0.08)",
                        border: "1px solid rgba(0,200,83,0.2)",
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "#8b949e", fontFamily: "Inter, sans-serif" }}>
                        <span style={{ color: "#00c853" }} className="shrink-0 mt-0.5">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded"
                        style={{ color: "#ffd700", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
