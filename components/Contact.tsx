"use client";

import { useState } from "react";

const contactLinks = [
  { label: "Email",    value: "kavyaagar0@gmail.com",           href: "mailto:kavyaagar0@gmail.com" },
  { label: "GitHub",   value: "github.com/Kavya-Agar",          href: "https://github.com/Kavya-Agar" },
  { label: "LinkedIn", value: "linkedin.com/in/kavya-agar",     href: "https://www.linkedin.com/in/kavya-agar/" },
  { label: "Location", value: "Houston, TX",                    href: null },
  { label: "Status",   value: "Summer 2026 Internships",        href: null },
];

export function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-8 md:px-20"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] mb-2" style={{ color: "var(--coffee)" }}>
          [ CONTACT ]
        </p>
        <h2 className="font-bold mb-2"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 48, color: "var(--text-primary)" }}>
          Open a Position
        </h2>
        <p className="font-mono text-sm mb-12" style={{ color: "var(--text-dim)" }}>
          Place your order — I respond within 24 hours
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact form */}
          <div className="card overflow-hidden">
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}
            >
              <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                kavya@portfolio: ~/contact --new-message
              </span>
            </div>
            <div className="p-6">
              {sent ? (
                <div className="py-8 text-center">
                  <p className="font-mono text-sm mb-2" style={{ color: "var(--green)" }}>
                    ✓ Message received
                  </p>
                  <p className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: "name",    placeholder: "Your name",                                    type: "text" },
                    { key: "email",   placeholder: "Your email",                                   type: "email" },
                    { key: "subject", placeholder: "Internship inquiry / Collaboration / Other",   type: "text" },
                  ].map(({ key, placeholder, type }) => (
                    <input
                      key={key}
                      type={type}
                      placeholder={placeholder}
                      value={fields[key as keyof typeof fields]}
                      onChange={(e) => setFields((f) => ({ ...f, [key]: e.target.value }))}
                      required
                      className="w-full bg-transparent font-mono text-sm py-2.5 px-3 rounded outline-none transition-colors"
                      style={{ color: "var(--text-primary)", border: "1px solid var(--border)", caretColor: "var(--green)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green-a50)")}
                      onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  ))}
                  <textarea
                    placeholder="Tell me about the opportunity..."
                    rows={4}
                    value={fields.message}
                    onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                    required
                    className="w-full bg-transparent font-mono text-sm py-2.5 px-3 rounded outline-none resize-none transition-colors"
                    style={{ color: "var(--text-primary)", border: "1px solid var(--border)", caretColor: "var(--green)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--green-a50)")}
                    onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded font-semibold text-sm transition-opacity hover:opacity-90"
                    style={{ background: "var(--green)", color: "var(--bg)", fontFamily: "Inter, sans-serif" }}
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Order book */}
          <div className="card p-6">
            <p className="font-mono text-[11px] mb-5" style={{ color: "var(--green)" }}>
              [ ORDER BOOK ]
            </p>
            <div className="space-y-4">
              {contactLinks.map(({ label, value, href }) =>
                href ? (
                  <a key={label} href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    onMouseEnter={(e) => {
                      const val = e.currentTarget.querySelector<HTMLElement>(".link-val");
                      if (val) val.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      const val = e.currentTarget.querySelector<HTMLElement>(".link-val");
                      if (val) val.style.color = "var(--text-dim)";
                    }}
                  >
                    <span className="font-mono text-[11px] w-24 shrink-0" style={{ color: "var(--yellow)" }}>
                      {label}
                    </span>
                    <span className="link-val text-sm transition-colors"
                      style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
                      {value}
                    </span>
                    <span className="ml-auto font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--green)" }}>
                      ↗
                    </span>
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-3">
                    <span className="font-mono text-[11px] w-24 shrink-0" style={{ color: "var(--yellow)" }}>
                      {label}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
                      {value}
                    </span>
                  </div>
                )
              )}
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
              <p className="text-xs italic leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                &ldquo;The stock market is a device for transferring money from the impatient to the patient.&rdquo;
              </p>
              <p className="font-mono text-[10px] mt-2" style={{ color: "var(--border)" }}>
                — Warren Buffett
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
