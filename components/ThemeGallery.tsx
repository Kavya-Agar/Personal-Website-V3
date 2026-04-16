"use client";

import { useEffect, useState } from "react";
import { themes, type Theme, type ThemeId, type ThemeVars, applyTheme } from "@/lib/themes";

function MiniPreview({ vars }: { vars: ThemeVars }) {
  return (
    <div style={{ background: vars["--bg"] }}>
      {/* Mini navbar */}
      <div style={{
        background: vars["--bg-secondary"],
        borderBottom: `1px solid ${vars["--border"]}`,
        padding: "5px 8px",
        display: "flex",
        alignItems: "center",
        gap: 5,
      }}>
        <span style={{ color: vars["--green"], fontFamily: "monospace", fontSize: 8, fontWeight: 700 }}>$KA</span>
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: vars["--green"], display: "inline-block" }} />
        <span style={{ flex: 1 }} />
        <span style={{
          fontFamily: "monospace", fontSize: 7,
          color: vars["--green"], padding: "1px 4px",
          border: `1px solid ${vars["--green-a35"]}`,
          borderRadius: 2,
          background: vars["--green-a8"],
        }}>⌘K</span>
      </div>
      {/* Mini content */}
      <div style={{ padding: "8px 8px 10px" }}>
        {/* Heading block */}
        <div style={{ width: 72, height: 7, borderRadius: 2, background: vars["--text-primary"], marginBottom: 4 }} />
        {/* Subtitle block */}
        <div style={{ width: 52, height: 4, borderRadius: 2, background: vars["--text-dim"], marginBottom: 7, opacity: 0.7 }} />
        {/* Terminal prompt */}
        <div style={{ fontFamily: "monospace", fontSize: 7, color: vars["--green"], marginBottom: 7, display: "flex", alignItems: "center", gap: 2 }}>
          <span>{">"} whoami</span>
          <span style={{ display: "inline-block", width: 4, height: 8, background: vars["--green"] }} />
        </div>
        {/* CTA button */}
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          height: 12, paddingLeft: 6, paddingRight: 6,
          borderRadius: 2, background: vars["--green"],
        }}>
          <span style={{ fontFamily: "monospace", fontSize: 6, color: vars["--bg"], fontWeight: 700 }}>
            View Projects →
          </span>
        </div>
      </div>
    </div>
  );
}

export function ThemeGallery() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<ThemeId>("default");

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("ka-theme") as ThemeId | null;
    if (saved && themes[saved]) setActiveId(saved);
  }, []);

  // Open via custom event (dispatched by CommandPalette)
  useEffect(() => {
    const onEvent = () => setOpen((o) => !o);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("open-theme-gallery", onEvent);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-theme-gallery", onEvent);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem("ka-theme") as ThemeId | null;
      if (saved && themes[saved]) setActiveId(saved);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
    }
  }, [open]);

  // Hover: live-preview the theme without saving
  const handleHover = (id: ThemeId) => applyTheme(id);
  // Leave without selecting: revert to active
  const handleLeave = () => applyTheme(activeId);

  // Click: save and close
  const handleSelect = (id: ThemeId) => {
    setActiveId(id);
    applyTheme(id);
    localStorage.setItem("ka-theme", id);
    setTimeout(() => setOpen(false), 180);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[210] flex items-center justify-center px-4"
      style={{
        background: visible ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(6px)" : "blur(0px)",
        transition: "background 0.2s ease, backdrop-filter 0.2s ease",
      }}
      onClick={() => { handleLeave(); setOpen(false); }}
    >
      <div
        className="w-full max-w-3xl rounded-xl overflow-hidden"
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
        {/* Header */}
        <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="flex items-center justify-between">
            <div>
              <h2
                className="font-semibold text-sm"
                style={{ color: "var(--text-primary)", fontFamily: "Inter, sans-serif" }}
              >
                Color Theme
              </h2>
              <p className="font-mono text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>
                Hover to preview · click to apply · persists across sessions
              </p>
            </div>
            <kbd
              className="font-mono text-[10px] px-1.5 py-0.5 rounded"
              style={{ color: "var(--text-muted)", background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              ESC
            </kbd>
          </div>
        </div>

        {/* Theme grid */}
        <div className="p-5 grid grid-cols-4 gap-3">
          {(Object.values(themes) as Theme[]).map((theme) => {
            const isActive = theme.id === activeId;
            return (
              <button
                key={theme.id}
                className="rounded-lg overflow-hidden cursor-pointer text-left transition-all"
                style={{
                  border: isActive
                    ? `2px solid ${theme.vars["--green"]}`
                    : `2px solid ${theme.vars["--border"]}`,
                  boxShadow: isActive ? `0 0 0 1px ${theme.vars["--green-a20"]}` : "none",
                  outline: "none",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                }}
                onMouseEnter={() => handleHover(theme.id as ThemeId)}
                onMouseLeave={handleLeave}
                onClick={() => handleSelect(theme.id as ThemeId)}
              >
                <MiniPreview vars={theme.vars} />
                {/* Label bar */}
                <div
                  className="flex items-center justify-between px-3 py-2"
                  style={{
                    background: theme.vars["--bg-secondary"],
                    borderTop: `1px solid ${theme.vars["--border"]}`,
                  }}
                >
                  <span
                    className="font-mono text-[11px] font-medium"
                    style={{ color: isActive ? theme.vars["--green"] : theme.vars["--text-primary"] }}
                  >
                    {theme.name}
                  </span>
                  {isActive && (
                    <span className="font-mono text-[10px]" style={{ color: theme.vars["--green"] }}>
                      ✓ active
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
