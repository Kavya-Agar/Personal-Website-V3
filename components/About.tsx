"use client";

import { useState } from "react";

export function About() {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const marketData = [
    { label: "Graduation", value: "May 2027",           change: "On Track",  positive: true },
    { label: "University", value: "Texas A&M",          change: "Top 20 CS", positive: true },
    { label: "Focus",      value: "Product · Strategy", change: "PM Pivot",  positive: true },
  ];

  const coursework = [
    "Statistics", "Database Management", "Software Engineering",
    "Business Strategy", "Data Structures & Algorithms", "Computer Systems", "Operating Systems",
  ];

  const tracking = [
    "S&P 500 momentum",
    "Fintech M&A",
    "AI × Banking",
    "Stripe product bets",
    "Federal Reserve policy",
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
                {/* KA avatar — green glow ring + pulse */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-lg shrink-0"
                  style={{
                    background: "var(--green-a8)",
                    color: "var(--green)",
                    border: "2px solid var(--green)",
                    boxShadow: "0 0 12px var(--green-a20), 0 0 4px var(--green-a8)",
                    animation: "pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  }}
                >
                  KA
                </div>
                <div>
                  <p className="font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                    Kavya Agar
                  </p>
                  <p className="font-mono text-[11px] mb-3" style={{ color: "var(--text-dim)" }}>
                    CS Student · Product · Fintech
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Product Strategy", "User Research", "Data Analysis", "Roadmapping", "Cross-functional"].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] px-2.5 py-1 rounded-full"
                        style={{
                          color: "var(--green)",
                          background: hoveredTag === tag ? "var(--green-a20)" : "var(--green-a8)",
                          border: "1px solid var(--green-a20)",
                          boxShadow: hoveredTag === tag ? "0 0 6px var(--green-a35)" : "none",
                          transition: "all 150ms ease",
                          cursor: "default",
                        }}
                        onMouseEnter={() => setHoveredTag(tag)}
                        onMouseLeave={() => setHoveredTag(null)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio — left green accent border */}
              <p
                className="text-sm leading-relaxed mb-6 max-w-lg"
                style={{
                  color: "var(--text-dim)",
                  borderLeft: "2px solid var(--green)",
                  paddingLeft: "12px",
                }}
              >
                Junior at{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Texas A&amp;M</span>{" "}studying CS with
                minors in Statistics and Business. I&apos;ve been following markets since before I could write a line of
                code — something about the overlap of{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>data, behavior, and real-time systems</span>{" "}
                clicked early. Now I&apos;m moving toward PM because the most interesting fintech problems aren&apos;t
                engineering problems: they&apos;re about what to build, who it&apos;s for, and why it matters. Having an
                engineering background means I can close the gap between strategy and implementation without a translator.
              </p>

              {/* Contact info */}
              <div className="space-y-1.5 font-mono text-[11px] mb-4 pb-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
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
                    aria-label="View Kavya's resume (PDF)"
                    className="px-3 py-1 rounded-full font-mono text-[9px] transition-all shrink-0 hover:shadow-sm cursor-pointer"
                    style={{ color: "var(--green)", background: "var(--green-a8)", border: "1px solid var(--green-a20)" }}
                  >
                    view resume ↗
                  </a>
                </div>
              </div>

              {/* Currently */}
              <div className="space-y-1.5 font-mono text-[11px]">
                <p className="text-[11px] mb-2" style={{ color: "var(--green)" }}>[ CURRENTLY ]</p>
                {[
                  { key: "reading",  val: "Thinking in Bets" },
                  { key: "building", val: "fintech side project" },
                  { key: "podcast",  val: "Acquired" },
                ].map(({ key, val }) => (
                  <div key={key} className="flex gap-3">
                    <span style={{ color: "var(--yellow)" }}>{key}</span>
                    <span style={{ color: "var(--text-dim)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {/* Personal Metrics card */}
            <div className="card p-5 transition-all duration-200 hover:shadow-lg" style={{ boxShadow: "var(--shadow-1)" }}>
              <p className="font-mono text-[11px] mb-4" style={{ color: "var(--green)" }}>
                [ PERSONAL METRICS ]
              </p>
              <div className="space-y-3">
                {marketData.map(({ label, value, change, positive }) => (
                  <div key={label} className="flex items-center justify-between cursor-default">
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>{label}</span>
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-primary)" }}>{value}</span>
                    <span
                      className="font-mono text-[9px] px-2.5 py-1 rounded-full flex items-center gap-1"
                      style={{
                        color: positive ? "var(--green)" : "var(--red)",
                        background: positive ? "var(--green-a8)" : "rgba(255,61,87,0.08)",
                        border: `1px solid ${positive ? "var(--green-a20)" : "rgba(255,61,87,0.2)"}`,
                      }}
                    >
                      <span style={{ fontSize: 8 }}>{positive ? "▲" : "▼"}</span>
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
                  <span
                    key={c}
                    className="font-mono text-[9px] px-2.5 py-1 rounded-full"
                    style={{
                      color: "var(--green)",
                      background: hoveredCourse === c ? "var(--green-a20)" : "var(--green-a8)",
                      border: "1px solid var(--green-a20)",
                      boxShadow: hoveredCourse === c ? "0 0 6px var(--green-a35)" : "none",
                      transition: "all 150ms ease",
                      cursor: "default",
                    }}
                    onMouseEnter={() => setHoveredCourse(c)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Tracking card */}
            <div className="card p-5 transition-all duration-200 hover:shadow-lg mt-auto" style={{ boxShadow: "var(--shadow-1)" }}>
              <p className="font-mono text-[11px] mb-4" style={{ color: "var(--green)" }}>
                [ CURRENTLY TRACKING ]
              </p>
              <div className="space-y-2">
                {tracking.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--green)", boxShadow: "0 0 4px var(--green-a50)" }}
                    />
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
