export function Footer() {
  return (
    <footer
      className="py-8 px-20 flex items-center justify-between"
      style={{ borderTop: "1px solid #30363d" }}
    >
      <span className="font-mono text-[11px]" style={{ color: "#484f58" }}>
        © 2025 Kavya Agar
      </span>
      <span className="font-mono text-[11px]" style={{ color: "#484f58" }}>
        Built with Next.js · Fueled by coffee ☕
      </span>
      <span className="font-mono text-[11px]" style={{ color: "#484f58" }}>
        press{" "}
        <kbd
          className="px-1.5 py-0.5 rounded text-[10px]"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            color: "#8b949e",
          }}
        >
          ⌘K
        </kbd>{" "}
        to navigate
      </span>
    </footer>
  );
}
