"use client";

import { SECTIONS, type Edition, type SectionKey } from "./data";

const EDITION_LABEL: Record<Edition, string> = {
  morning: "morning ed.",
  evening: "evening ed.",
  sunday: "sunday ed.",
};

export function Masthead({
  section,
  indexOpen,
  edition,
  go,
  toggleIndex,
  cycleEdition,
}: {
  section: SectionKey;
  indexOpen: boolean;
  edition: Edition;
  go: (key: SectionKey) => void;
  toggleIndex: () => void;
  cycleEdition: () => void;
}) {
  return (
    <div
      className="news-masthead-bar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "var(--paper)",
        borderBottom: "1px solid var(--ink)",
      }}
    >
      <div
        className="news-bar"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "9px clamp(16px, 4vw, 32px)",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <button
          type="button"
          onClick={() => go("front")}
          aria-label="Front page"
          style={{
            font: "400 24px/1 var(--f-display)",
            letterSpacing: "0.02em",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            color: "var(--ink)",
            flex: "none",
          }}
        >
          K·A
        </button>

        <span
          className="news-nav-rule"
          style={{ width: 1, height: 18, background: "var(--rule)", flex: "none" }}
        />

        <nav className="news-nav" style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
          {SECTIONS.map((s) => {
            const active = s.key === section;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => go(s.key)}
                aria-current={active ? "page" : undefined}
                className="news-navitem"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  borderBottomColor: active ? "var(--ink)" : "transparent",
                  padding: "3px 0",
                  cursor: "pointer",
                  color: active ? "var(--ink)" : "var(--ink-faint)",
                }}
              >
                <span
                  style={{
                    font: "600 13.5px var(--f-label)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.plain}
                </span>
                <span
                  style={{
                    font: "400 10.5px var(--f-mono)",
                    letterSpacing: "0.02em",
                    color: "var(--ink-faint)",
                  }}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <button
          type="button"
          onClick={cycleEdition}
          title="Switch edition — changes the paper tint"
          className="news-swatch"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            font: "400 11.5px var(--f-mono)",
            padding: "6px 11px",
            background: "transparent",
            border: "1px solid var(--rule)",
            color: "var(--ink-muted)",
            cursor: "pointer",
            flex: "none",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 9,
              height: 9,
              background: "var(--paper)",
              border: "1px solid var(--ink-faint)",
              display: "inline-block",
            }}
          />
          <span className="news-ed-label">{EDITION_LABEL[edition]}</span>
        </button>

        <button
          type="button"
          onClick={toggleIndex}
          aria-expanded={indexOpen}
          aria-controls="news-index-panel"
          style={{
            font: "400 11.5px var(--f-mono)",
            padding: "6px 11px",
            background: "transparent",
            border: "1px solid var(--rule)",
            color: "var(--ink-muted)",
            cursor: "pointer",
            flex: "none",
          }}
        >
          ⌘K index
        </button>

        <a
          href="/resume.pdf"
          className="news-btn"
          style={{
            fontSize: 12.5,
            letterSpacing: "0.16em",
            padding: "7px 14px",
            background: "var(--ink)",
            color: "var(--paper)",
            flex: "none",
          }}
        >
          Résumé ↗
        </a>
      </div>

      {/* ⌘K index — overlays the page rather than pushing it, so opening it
          doesn't shift the section underneath. */}
      <div
        id="news-index-panel"
        className="news-index"
        data-open={indexOpen}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "100%",
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "18px clamp(16px, 4vw, 32px)",
          borderBottom: "1px solid var(--ink)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p
            style={{
              font: "400 11.5px var(--f-mono)",
              color: "#9d968a",
              marginBottom: 12,
            }}
          >
            index — jump to a section · esc to close
          </p>
          <div
            className="news-index-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px 24px",
            }}
          >
            {SECTIONS.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => go(s.key)}
                className="news-draw"
                style={{
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  font: "400 17px/1.3 var(--f-body)",
                  color: "var(--paper)",
                }}
              >
                {s.plain}{" "}
                <span style={{ font: "400 11px var(--f-mono)", color: "#9d968a" }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
