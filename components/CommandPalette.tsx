"use client";

import { useEffect, useRef, useState } from "react";

type Command = {
  label: string;
  category: "Navigate" | "Links" | "Actions";
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
};

const commands: Command[] = [
  {
    label: "Home",
    category: "Navigate",
    shortcut: "H",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    action: () => { window.location.hash = "#hero"; },
  },
  {
    label: "About",
    category: "Navigate",
    shortcut: "A",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
    action: () => { window.location.hash = "#about"; },
  },
  {
    label: "Skills",
    category: "Navigate",
    shortcut: "S",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    action: () => { window.location.hash = "#skills"; },
  },
  {
    label: "Experience",
    category: "Navigate",
    shortcut: "E",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
    action: () => { window.location.hash = "#experience"; },
  },
  {
    label: "Projects",
    category: "Navigate",
    shortcut: "P",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
    action: () => { window.location.hash = "#projects"; },
  },
  {
    label: "Markets",
    category: "Navigate",
    shortcut: "M",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    action: () => { window.location.hash = "#markets"; },
  },
  {
    label: "Now",
    category: "Navigate",
    shortcut: "N",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    action: () => { window.location.href = "/now"; },
  },
  {
    label: "Uses",
    category: "Navigate",
    shortcut: "U",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    action: () => { window.location.href = "/uses"; },
  },
  {
    label: "Blog",
    category: "Navigate",
    shortcut: "B",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    action: () => { window.location.href = "/blog"; },
  },
  {
    label: "Contact",
    category: "Navigate",
    shortcut: "C",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    action: () => { window.location.hash = "#contact"; },
  },
  {
    label: "GitHub",
    category: "Links",
    shortcut: "G",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    action: () => { window.open("https://github.com/Kavya-Agar", "_blank"); },
  },
  {
    label: "LinkedIn",
    category: "Links",
    shortcut: "L",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    action: () => { window.open("https://www.linkedin.com/in/kavya-agar/", "_blank"); },
  },
  {
    label: "View Resume",
    category: "Actions",
    shortcut: "R",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    action: () => { window.open("/resume.pdf", "_blank"); },
  },
  {
    label: "Copy Email",
    category: "Actions",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
    action: () => { navigator.clipboard.writeText("kavyaagar0@gmail.com"); },
  },
  {
    label: "Open Terminal",
    category: "Actions",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
    action: () => { window.dispatchEvent(new Event("open-terminal")); },
  },
  {
    label: "Change Theme",
    category: "Actions",
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 8a4 4 0 0 1 0 8"/></svg>,
    action: () => { window.dispatchEvent(new Event("open-theme-gallery")); },
  },
];

const CATEGORIES: Command["category"][] = ["Navigate", "Links", "Actions"];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelected(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      setTimeout(() => inputRef.current?.focus(), 20);
    } else {
      setVisible(false);
    }
  }, [open]);

  useEffect(() => {
    selectedRef.current?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      if (e.key === "Enter" && filtered[selected]) {
        filtered[selected].action();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, selected, onClose]);

  if (!open) return null;

  const grouped = CATEGORIES.map((cat) => ({
    cat,
    items: filtered.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-28"
      style={{
        background: visible ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(6px)" : "blur(0px)",
        transition: "background 0.2s ease, backdrop-filter 0.2s ease",
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px var(--green-a8)",
          transform: visible ? "translateY(0) scale(1)" : "translateY(-12px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search bar */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--text-dim)" }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
          />
          <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded" style={{ color: "var(--text-muted)", background: "var(--bg)", border: "1px solid var(--border)" }}>
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="overflow-y-auto" style={{ maxHeight: 360 }}>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 gap-2">
              <span className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>// no results</span>
              <span className="text-sm" style={{ color: "var(--text-dim)", fontFamily: "Inter, sans-serif" }}>
                No commands match &ldquo;{query}&rdquo;
              </span>
            </div>
          ) : (
            <div className="py-2">
              {grouped.map(({ cat, items }) => (
                <div key={cat}>
                  <p className="px-4 pt-3 pb-1 font-mono text-[9px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    {cat}
                  </p>
                  {items.map((cmd) => {
                    const idx = flatIndex++;
                    const isSelected = idx === selected;
                    return (
                      <button
                        key={cmd.label}
                        ref={isSelected ? selectedRef : null}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm transition-all cursor-pointer relative"
                        style={{
                          background: isSelected ? "var(--green-a8)" : "transparent",
                          color: isSelected ? "var(--text-primary)" : "var(--text-dim)",
                          fontFamily: "Inter, sans-serif",
                          borderLeft: isSelected ? "2px solid var(--green)" : "2px solid transparent",
                        }}
                        onMouseEnter={() => setSelected(idx)}
                        onClick={() => { cmd.action(); onClose(); }}
                      >
                        <span style={{ color: isSelected ? "var(--green)" : "var(--text-muted)", flexShrink: 0 }}>
                          {cmd.icon}
                        </span>
                        <span className="flex-1 text-left">{cmd.label}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 flex items-center gap-4 font-mono text-[10px]" style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 rounded" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>↑</kbd>
            <kbd className="px-1 py-0.5 rounded" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>↓</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 rounded" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>↵</kbd>
            select
          </span>
          <span className="ml-auto" style={{ color: "var(--green)" }}>⌘K</span>
        </div>
      </div>
    </div>
  );
}
