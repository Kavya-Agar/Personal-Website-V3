export function Footer() {
  return (
    <footer
      className="py-12 md:py-16 px-4 sm:px-8 md:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
        © 2025 Kavya Agar
      </span>
      <span className="font-mono text-[10px] text-center sm:text-left" style={{ color: "var(--text-muted)" }}>
        Built with Next.js · Fueled by coffee
      </span>
      <span className="font-mono text-[10px] flex items-center gap-1.5 whitespace-nowrap">
        <span style={{ color: "var(--text-muted)" }}>press</span>
        <kbd
          className="px-2 py-1 rounded transition-all"
          style={{
            background: "var(--green-a8)",
            border: "1px solid var(--green-a20)",
            color: "var(--green)",
            fontSize: "9px",
            fontWeight: 500,
          }}
        >
          ⌘K
        </kbd>
      </span>
    </footer>
  );
}
