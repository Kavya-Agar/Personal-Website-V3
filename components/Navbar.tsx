"use client";

import { useState, useEffect, useRef } from "react";
import { CommandPalette } from "./CommandPalette";
import { MarketStatus } from "./MarketStatus";
import { NavClock } from "./NavClock";

const navLinks = [
  {
    label: "About",
    href: "#about",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Markets",
    href: "#markets",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    label: "Now",
    href: "/now",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Uses",
    href: "/uses",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export function Navbar() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [displayed, setDisplayed] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sections = ["hero", "about", "skills", "experience", "projects", "markets", "contact"];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      let current: string | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activeSection === displayed) return;
    setFading(true);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    fadeTimer.current = setTimeout(() => {
      setDisplayed(activeSection);
      setFading(false);
    }, 150);
  }, [activeSection]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


  return (
    <>
      <nav
        style={{
          background: scrolled ? "var(--bg-scrolled)" : "var(--bg)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-8 md:px-20 transition-all"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="font-mono font-bold text-lg"
            style={{ color: "var(--green)" }}
          >
            $KA
          </a>
          <MarketStatus />
          <NavClock />
        </div>

        {/* Section indicator — absolutely centered so it's always at page midpoint */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          {displayed && displayed !== "hero" && (
            <span
              className="font-mono text-xs transition-opacity duration-150"
              style={{
                color: "var(--text-dim)",
                opacity: fading ? 0 : 1,
              }}
            >
              {"/ "}{displayed}
            </span>
          )}
        </div>

        {/* Spacer to push right-side controls to the right */}
        <div className="flex-1" />

        {/* ⌘K pill */}
        <button
          onClick={() => setCmdOpen(true)}
          className="font-mono text-[11px] px-4 py-1.5 rounded-md mr-4 cursor-pointer transition-colors"
          style={{
            color: "var(--green)",
            background: "var(--green-a8)",
            border: "1px solid var(--green-a50)",
          }}
          aria-label="Open command palette"
        >
          ⌘K
        </button>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block h-[2px] w-5 transition-all duration-300 origin-center"
            style={{
              background: "var(--text-primary)",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[2px] w-5 transition-all duration-300"
            style={{
              background: "var(--text-primary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-[2px] w-5 transition-all duration-300 origin-center"
            style={{
              background: "var(--text-primary)",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>

        {/* GitHub link */}
        <a
          href="https://github.com/Kavya-Agar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 ml-1 transition-colors"
          style={{ color: "var(--text-dim)" }}
          aria-label="GitHub profile"
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </nav>

      {/* Slide-in panel */}
      <div
        className="fixed top-0 z-[45] flex flex-col pt-16 pb-6 px-8 transition-transform duration-300"
        style={{
          right: 12,
          width: "min(260px, 85vw)",
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          boxShadow: "-8px 8px 32px rgba(0,0,0,0.5)",
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
        }}
      >
        <p className="font-mono text-[10px] mt-4 mb-3" style={{ color: "var(--text-muted)" }}>
          // navigate
        </p>

        <nav className="flex flex-col gap-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-md transition-colors group"
              style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-dim)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ color: "var(--green)" }}>{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </nav>

        <div style={{ borderTop: "1px solid var(--border-subtle)" }} className="pt-4 mt-4">
          <a
            href="/Kavya%20Agar%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-md text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              color: "var(--green)",
              background: "var(--green-a8)",
              border: "1px solid var(--green-a35)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Resume ↗
          </a>
        </div>
      </div>

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
