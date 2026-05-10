"use client";

export function About() {
  const marketData = [
    { label: "Graduation", value: "May 2027",                 change: "On Track",      positive: true },
    { label: "University", value: "Texas A&M",                change: "Top 20 CS",     positive: true },
    { label: "Focus",      value: "Product · Strategy",       change: "PM Pivot",      positive: true },
  ];

  const coursework = [
    "Statistics", "Database Management", "Software Engineering",
    "Business Strategy", "Data Structures & Algorithms", "Computer Systems", "Operating Systems",
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-8 md:px-20"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
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
          <div className="card overflow-hidden transition-all duration-200 hover:shadow-lg" style={{ boxShadow: "var(--shadow-1)" }}>
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
                    CS Student · Aspiring PM · Builder
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Product Strategy", "User Research", "Data Analysis", "Roadmapping", "Cross-functional"].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] px-2.5 py-1 rounded-full transition-colors"
                        style={{ color: "var(--green)", background: "var(--green-a8)", border: "1px solid var(--green-a20)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed mb-6 max-w-lg" style={{ color: "var(--text-dim)" }}>
                CS student at{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Texas A&amp;M University</span> pivoting
                into product management. I spent years learning how software is built — now I care more
                about <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>what to build and why</span>. I
                bring an engineering foundation to product decisions: understanding tradeoffs, speaking to
                devs, and grounding strategy in data.
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
                    className="flex gap-3 items-center group cursor-pointer transition-colors"
                  >
                    <span style={{ color: "var(--yellow)" }}>linkedin</span>
                    <span className="transition-colors group-hover:text-primary" style={{ color: "var(--text-dim)" }}>
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
                    className="px-3 py-1 rounded-full font-mono text-[9px] transition-all shrink-0 hover:shadow-sm"
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
            <div className="card p-5 transition-all duration-200 hover:shadow-lg" style={{ boxShadow: "var(--shadow-1)" }}>
              <p className="font-mono text-[11px] mb-4" style={{ color: "var(--green)" }}>
                [ MARKET DATA ]
              </p>
              <div className="space-y-3">
                {marketData.map(({ label, value, change }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>{label}</span>
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-primary)" }}>{value}</span>
                    <span className="font-mono text-[9px] px-2.5 py-1 rounded-full transition-colors"
                      style={{ color: "var(--green)", background: "var(--green-a8)", border: "1px solid var(--green-a20)" }}>
                      {change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div className="card p-5 transition-all duration-200 hover:shadow-lg" style={{ boxShadow: "var(--shadow-1)" }}>
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
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="font-mono text-[9px] px-2.5 py-1 rounded-full transition-colors"
                    style={{ color: "var(--green)", background: "var(--green-a8)", border: "1px solid var(--green-a20)" }}>
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
