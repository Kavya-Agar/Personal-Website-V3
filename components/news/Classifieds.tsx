"use client";

import { useState } from "react";
import { RailBox, RailHead, SectionHead } from "./ui";
import { EMAIL, GITHUB, LINKEDIN } from "./data";

const FIELD_STYLE: React.CSSProperties = {
  font: "400 15px var(--f-body)",
  padding: "10px 12px",
  background: "transparent",
  border: "1px solid var(--rule-leader)",
  color: "var(--ink)",
  outline: "none",
  width: "100%",
};

const DIRECTORY: [string, string, string?][] = [
  ["Correspondence", EMAIL, `mailto:${EMAIL}`],
  ["Repository", "github.com/Kavya-Agar ↗", GITHUB],
  ["Professional", "linkedin.com/in/kavya-agar ↗", LINKEDIN],
  ["Offices", "Houston, Texas"],
  ["Dossier", "resume.pdf ↗", "/resume.pdf"],
];

export function Classifieds() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  // Same behaviour as the previous edition of the site: compose a mail draft rather
  // than post to a backend that doesn't exist.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `${fields.message}\n\n— ${fields.name} (${fields.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      fields.subject || "Notice for the desk"
    )}&body=${encodeURIComponent(body)}`;
  }

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div>
      <SectionHead
        kicker="Section G · Classifieds"
        kickerColor="var(--ink-faint)"
        title="Correspondence"
      />

      <div
        className="news-pair"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, paddingTop: 22 }}
      >
        <div>
          <p className="news-railhead news-hr-ink" style={{ paddingBottom: 6, marginBottom: 14 }}>
            Place a notice
          </p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              placeholder="Your name"
              value={fields.name}
              onChange={set("name")}
              style={FIELD_STYLE}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={fields.email}
              onChange={set("email")}
              style={FIELD_STYLE}
              required
            />
            <input
              placeholder="Internship inquiry / Collaboration / Other"
              value={fields.subject}
              onChange={set("subject")}
              style={FIELD_STYLE}
            />
            <textarea
              rows={5}
              placeholder="Tell me about the opportunity…"
              value={fields.message}
              onChange={set("message")}
              style={{ ...FIELD_STYLE, resize: "none" }}
              required
            />
            <button
              type="submit"
              className="news-btn"
              style={{
                letterSpacing: "0.2em",
                padding: 12,
                background: "var(--ink)",
                color: "var(--paper)",
                border: "none",
              }}
            >
              Send to the desk →
            </button>
            <p style={{ font: "400 13.5px var(--f-body)", color: "var(--ink-muted)" }}>
              Replies within 24 hours.
            </p>
          </form>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <RailHead double>Directory</RailHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 11,
                font: "400 16px/1.4 var(--f-body)",
                color: "var(--ink-soft)",
              }}
            >
              {DIRECTORY.map(([label, value, href]) => (
                <div key={label} style={{ display: "flex", gap: 10 }}>
                  <span
                    className="news-kicker"
                    style={{
                      letterSpacing: "0.16em",
                      color: "var(--ink-faint)",
                      width: 108,
                      flex: "none",
                      paddingTop: 4,
                    }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="news-draw"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <RailBox padding={16}>
            <RailHead bare color="var(--news-red)">
              Situations Wanted
            </RailHead>
            <p className="news-body" style={{ lineHeight: 1.5, color: "var(--ink-soft)" }}>
              Product-management internship, Summer 2027. Fintech and consumer tech preferred;
              engineering background is the edge. Referrals welcome.
            </p>
          </RailBox>
        </div>
      </div>
    </div>
  );
}
