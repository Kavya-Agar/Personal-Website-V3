export function About() {
  const marketData = [
    { label: "GPA",        value: "3.5 / 4.00",              change: "Dean's List",   positive: true },
    { label: "Graduation", value: "May 2027",                 change: "On Track",      positive: true },
    { label: "University", value: "Texas A&M",                change: "Top 20 CS",     positive: true },
    { label: "Focus",      value: "SWE · ML · Cloud",         change: "Diversified",   positive: true },
  ];

  const coursework = [
    "Data Structures & Algorithms", "Operating Systems", "Computer Systems",
    "Software Engineering", "Computer Graphics", "Database Management", "Statistics",
  ];

  return (
    <section
      id="about"
      className="py-32 px-20"
      style={{ background: "#0d1117", borderTop: "1px solid #30363d" }}
    >
      <div className="max-w-6xl">
        <p className="font-mono text-[11px] mb-2" style={{ color: "#b87333" }}>
          [ ABOUT ME ]
        </p>
        <h2
          className="font-bold mb-12"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "#e6edf3" }}
        >
          The Portfolio
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Terminal panel */}
          <div className="card overflow-hidden">
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: "#161b22", borderBottom: "1px solid #30363d" }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
              <span className="font-mono text-[11px] ml-2" style={{ color: "#8b949e" }}>
                kavya@portfolio: ~/about
              </span>
            </div>
            <div className="p-6">
              {/* Profile */}
              <div
                className="flex items-start gap-4 mb-6 pb-6"
                style={{ borderBottom: "1px solid #21262d" }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-lg shrink-0"
                  style={{ background: "rgba(0,200,83,0.1)", color: "#00c853", border: "1px solid rgba(0,200,83,0.3)" }}
                >
                  KA
                </div>
                <div>
                  <p className="font-semibold text-base mb-1" style={{ color: "#e6edf3" }}>
                    Kavya Agar
                  </p>
                  <p className="font-mono text-[11px] mb-3" style={{ color: "#8b949e" }}>
                    CS Student · Software Engineer · ML Enthusiast
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "Java", "React", "Machine Learning", "AWS"].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded"
                        style={{ color: "#00c853", background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.2)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#8b949e" }}>
                CS student at{" "}
                <span style={{ color: "#e6edf3" }}>Texas A&amp;M University</span> working at
                the intersection of software engineering, machine learning, and cloud infrastructure.
                I care about building reliable, production-ready systems — from fine-tuning LLMs to
                shipping full-stack applications with real users.
              </p>

              {/* Contact info */}
              <div className="space-y-1.5 font-mono text-[11px]">
                {[
                  { label: "location", value: "Houston, TX" },
                  { label: "email",    value: "kavyaagar0@gmail.com" },
                  { label: "linkedin", value: "linkedin.com/in/kavya-agar" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span style={{ color: "#ffd700" }}>{label}</span>
                    <span style={{ color: "#8b949e" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Market Data card */}
            <div className="card p-5">
              <p className="font-mono text-[11px] mb-4" style={{ color: "#00c853" }}>
                [ MARKET DATA ]
              </p>
              <div className="space-y-3">
                {marketData.map(({ label, value, change }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="font-mono text-[11px]" style={{ color: "#8b949e" }}>{label}</span>
                    <span className="font-mono text-[11px]" style={{ color: "#e6edf3" }}>{value}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded"
                      style={{ color: "#00c853", background: "rgba(0,200,83,0.08)" }}>
                      {change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div className="card p-5">
              <p className="font-mono text-[11px] mb-4" style={{ color: "#00c853" }}>
                [ EDUCATION ]
              </p>
              <p className="font-semibold text-base mb-0.5" style={{ color: "#e6edf3" }}>
                Texas A&amp;M University
              </p>
              <p className="text-sm mb-0.5" style={{ color: "#8b949e" }}>
                B.S. in Computer Science · Minors: Statistics, Business
              </p>
              <p className="font-mono text-[11px] mb-4" style={{ color: "#484f58" }}>
                Aug 2024 – May 2027
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((c) => (
                  <span key={c} className="font-mono text-[10px] px-2 py-0.5 rounded"
                    style={{ color: "#8b949e", background: "rgba(48,54,61,0.6)", border: "1px solid #30363d" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
