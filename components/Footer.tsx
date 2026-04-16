export function Footer() {
  return (
    <footer
      className="py-8 px-20 flex items-center justify-between"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
        © 2025 Kavya Agar
      </span>
      <span className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
        Built with Next.js · Fueled by coffee ☕
      </span>
      <span className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
        press{" "}
        <kbd
          className="px-1.5 py-0.5 rounded text-[10px]"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            color: "var(--text-dim)",
          }}
        >
          ⌘K
        </kbd>{" "}
        to navigate
      </span>
    </footer>
  );
}
