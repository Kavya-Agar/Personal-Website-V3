"use client";

export function About() {
  const marketData = [
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
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl">
        <p className="font-mono text-[11px] mb-2" style={{ color: "var(--coffee)" }}>
          [ ABOUT ME ]
        </p>
        <h2
          className="font-bold mb-12"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "var(--text-primary)" }}
        >
          The Portfolio
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Terminal panel */}
          <div className="card overflow-hidden">
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
              <span className="font-mono text-[11px] ml-2" style={{ color: "var(--text-dim)" }}>
                kavya@portfolio: ~/about
              </span>
            </div>
            <div className="p-6">
              {/* Profile */}
              <div
                className="flex items-start gap-4 mb-6 pb-6"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-lg shrink-0"
                  style={{ background: "var(--green-a8)", color: "var(--green)", border: "1px solid var(--green-a20)" }}
                >
                  KA
                </div>
                <div>
                  <p className="font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                    Kavya Agar
                  </p>
                  <p className="font-mono text-[11px] mb-3" style={{ color: "var(--text-dim)" }}>
                    CS Student · Software Engineer · ML Enthusiast
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Python", "Java", "React", "Machine Learning", "AWS"].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded"
                        style={{ color: "var(--green)", background: "var(--green-a8)", border: "1px solid var(--green-a20)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-dim)" }}>
                CS student at{" "}
                <span style={{ color: "var(--text-primary)" }}>Texas A&amp;M University</span> working at
                the intersection of software engineering, machine learning, and cloud infrastructure.
                I care about building reliable, production-ready systems — from fine-tuning LLMs to
                shipping full-stack applications with real users.
              </p>

              {/* Contact info */}
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex gap-3">
                  <span style={{ color: "var(--yellow)" }}>location</span>
                  <span style={{ color: "var(--text-dim)" }}>Houston, TX</span>
                </div>
                <div className="flex gap-3">
                  <span style={{ color: "var(--yellow)" }}>email</span>
                  <span style={{ color: "var(--text-dim)" }}>kavyaagar0@gmail.com</span>
                </div>
                <div className="flex gap-3 items-center justify-between">
                  <a
                    href="https://linkedin.com/in/kavya-agar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 items-center group"
                    onMouseEnter={(e) => {
                      const val = e.currentTarget.querySelector<HTMLElement>(".link-val");
                      if (val) val.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      const val = e.currentTarget.querySelector<HTMLElement>(".link-val");
                      if (val) val.style.color = "var(--text-dim)";
                    }}
                  >
                    <span style={{ color: "var(--yellow)" }}>linkedin</span>
                    <span className="link-val transition-colors" style={{ color: "var(--text-dim)" }}>
                      linkedin.com/in/kavya-agar
                    </span>
                    <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--green)" }}>
                      ↗
                    </span>
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded font-mono text-[10px] transition-colors shrink-0"
                    style={{ color: "var(--green)", background: "var(--green-a8)", border: "1px solid var(--green-a20)" }}
                  >
                    view resume ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Market Data card */}
            <div className="card p-5">
              <p className="font-mono text-[11px] mb-4" style={{ color: "var(--green)" }}>
                [ MARKET DATA ]
              </p>
              <div className="space-y-3">
                {marketData.map(({ label, value, change }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>{label}</span>
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-primary)" }}>{value}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded"
                      style={{ color: "var(--green)", background: "var(--green-a8)" }}>
                      {change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div className="card p-5">
              <p className="font-mono text-[11px] mb-4" style={{ color: "var(--green)" }}>
                [ EDUCATION ]
              </p>
              <p className="font-semibold text-base mb-0.5" style={{ color: "var(--text-primary)" }}>
                Texas A&amp;M University
              </p>
              <p className="text-sm mb-0.5" style={{ color: "var(--text-dim)" }}>
                B.S. in Computer Science · Minors: Statistics, Business
              </p>
              <p className="font-mono text-[11px] mb-4" style={{ color: "var(--text-muted)" }}>
                Aug 2024 – May 2027
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((c) => (
                  <span key={c} className="font-mono text-[10px] px-2 py-0.5 rounded"
                    style={{ color: "var(--text-dim)", background: "var(--bg-subtle)", border: "1px solid var(--border)" }}>
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
