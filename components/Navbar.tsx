"use client";

import { useState, useEffect, useRef } from "react";
import { CommandPalette } from "./CommandPalette";
import { MarketStatus } from "./MarketStatus";

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
          background: scrolled ? "rgba(13,17,23,0.92)" : "#0d1117",
          borderBottom: "1px solid #30363d",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-8 md:px-20 transition-all"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="font-mono font-bold text-lg"
            style={{ color: "#00c853" }}
          >
            KA /
          </a>
          <MarketStatus />
        </div>

        {/* Section indicator */}
        <div className="flex-1 flex justify-center">
          {displayed && displayed !== "hero" && (
            <span
              className="font-mono text-xs transition-opacity duration-150"
              style={{
                color: "#8b949e",
                opacity: fading ? 0 : 1,
              }}
            >
              {"/ "}{displayed}
            </span>
          )}
        </div>

        {/* ⌘K pill */}
        <button
          onClick={() => setCmdOpen(true)}
          className="font-mono text-[11px] px-4 py-1.5 rounded-md mr-4 cursor-pointer transition-colors"
          style={{
            color: "#00c853",
            background: "rgba(0,200,83,0.1)",
            border: "1px solid rgba(0,200,83,0.5)",
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
              background: "#e6edf3",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[2px] w-5 transition-all duration-300"
            style={{
              background: "#e6edf3",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-[2px] w-5 transition-all duration-300 origin-center"
            style={{
              background: "#e6edf3",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Slide-in panel */}
      <div
        className="fixed top-0 z-[45] flex flex-col pt-16 pb-6 px-8 transition-transform duration-300"
        style={{
          right: 12,
          width: "min(260px, 85vw)",
          background: "#161b22",
          border: "1px solid #30363d",
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          boxShadow: "-8px 8px 32px rgba(0,0,0,0.5)",
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
        }}
      >
        <p className="font-mono text-[10px] mt-4 mb-3" style={{ color: "#484f58" }}>
          // navigate
        </p>

        <nav className="flex flex-col gap-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-md transition-colors group"
              style={{ color: "#8b949e", fontFamily: "Inter, sans-serif" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e6edf3";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8b949e";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ color: "#00c853" }}>{link.icon}</span>
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </nav>

        <div style={{ borderTop: "1px solid #21262d" }} className="pt-4 mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-md text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              color: "#00c853",
              background: "rgba(0,200,83,0.1)",
              border: "1px solid rgba(0,200,83,0.4)",
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
