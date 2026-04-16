"use client";

import { useEffect, useRef, useState } from "react";

type Line = { type: "input" | "output" | "error"; text: string };

const COMMANDS: Record<string, (args: string[]) => string[]> = {
  help: () => [
    "available commands:",
    "  whoami          display user info",
    "  ls [dir]        list directory contents",
    "  cat [file]      display file contents",
    "  uname -a        system information",
    "  date            current timestamp",
    "  pwd             print working directory",
    "  echo [text]     print text",
    "  coffee          the good stuff",
    "  clear           clear terminal",
    "  exit            close terminal",
  ],
  whoami: () => ["kavya · cs student @ texas a&m · swe / ml / cloud"],
  ls: (args) => {
    const target = args[0] ?? ".";
    if (target === "projects/" || target === "projects") {
      return [
        "drwxr-xr-x  llm-finetune/",
        "drwxr-xr-x  cloud-infra/",
        "drwxr-xr-x  portfolio-v2/",
        "drwxr-xr-x  algo-trader/",
        "drwxr-xr-x  ml-pipeline/",
      ];
    }
    if (target === "skills/" || target === "skills") {
      return ["python  java  typescript  react  aws  docker  sql  ml"];
    }
    return ["about.md  skills.json  experience.json  projects/  contact.md  resume.pdf"];
  },
  cat: (args) => {
    const file = args[0] ?? "";
    if (file === "cv.txt" || file === "resume.pdf") {
      return [
        "Kavya Agar — CS Student @ Texas A&M",
        "─────────────────────────────────────",
        "GPA       3.5 / 4.00 · Dean's List",
        "Focus     SWE · ML · Cloud",
        "Stack     Python, Java, TypeScript, AWS",
        "Status    open to SWE internships · Summer 2026",
      ];
    }
    if (file === "about.md") {
      return [
        "# about",
        "cs student building at the intersection of software",
        "engineering, ml, and cloud infrastructure.",
        "currently fueled by espresso and clean code.",
      ];
    }
    if (file === "skills.json") {
      return [
        "{",
        '  "languages": ["Python", "Java", "TypeScript"],',
        '  "cloud": ["AWS", "Docker", "GitHub Actions"],',
        '  "ml": ["PyTorch", "scikit-learn", "SageMaker"]',
        "}",
      ];
    }
    return [`cat: ${file}: No such file or directory`];
  },
  uname: () => ["KA-OS 2026.4.10 #1 SMP PREEMPT kavya@MacBook-Air arm64"],
  date: () => [new Date().toUTCString()],
  pwd: () => ["/home/kavya/portfolio"],
  echo: (args) => [args.join(" ")],
  coffee: () => {
    window.open("https://www.nescafe.com/us/products/gold-espresso-instant-coffee-35-oz/", "_blank");
    return ["brewing..."];
  },
};

const BOOT_LINES: Line[] = [
  { type: "output", text: "kavya@portfolio — zsh 5.9" },
  { type: "output", text: 'type "help" for available commands.' },
  { type: "output", text: "" },
];

export function TerminalEaster() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState<Line[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key === "`" && !["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onEvent = () => setOpen((o) => !o);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-terminal", onEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-terminal", onEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setVisible(false);
    }
  }, [open]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) {
      setLines((l) => [...l, { type: "input", text: "" }]);
      return;
    }

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      setCmdHistory((h) => [trimmed, ...h]);
      setHistIdx(-1);
      return;
    }
    if (cmd === "exit") {
      setLines((l) => [
        ...l,
        { type: "input", text: raw },
        { type: "output", text: "session terminated." },
      ]);
      setInput("");
      setTimeout(() => setOpen(false), 500);
      setCmdHistory((h) => [trimmed, ...h]);
      setHistIdx(-1);
      return;
    }

    const handler = COMMANDS[cmd];
    const newLines: Line[] = [{ type: "input", text: raw }];
    if (handler) {
      handler(args).forEach((t) => newLines.push({ type: "output", text: t }));
    } else {
      newLines.push({ type: "error", text: `command not found: ${cmd}  (try "help")` });
    }
    newLines.push({ type: "output", text: "" });

    setLines((l) => [...l, ...newLines]);
    setCmdHistory((h) => [trimmed, ...h]);
    setHistIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); runCommand(input); }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = histIdx + 1;
      if (idx < cmdHistory.length) { setHistIdx(idx); setInput(cmdHistory[idx]); }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = histIdx - 1;
      if (idx < 0) { setHistIdx(-1); setInput(""); }
      else { setHistIdx(idx); setInput(cmdHistory[idx]); }
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      if (!partial) return;
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(partial));
      if (match) setInput(match);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[190] flex items-center justify-center px-4"
      style={{
        background: visible ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(4px)" : "blur(0px)",
        transition: "background 0.2s ease, backdrop-filter 0.2s ease",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-xl overflow-hidden flex flex-col"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px var(--green-a8)",
          transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
          maxHeight: "65vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 shrink-0"
          style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}
        >
          <button
            onClick={() => setOpen(false)}
            className="w-3 h-3 rounded-full transition-opacity hover:opacity-70 cursor-pointer"
            style={{ background: "#ff5f56" }}
          />
          <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
          <span className="font-mono text-[11px] mx-auto" style={{ color: "var(--text-dim)" }}>
            kavya@portfolio: ~
          </span>
          <kbd
            className="font-mono text-[9px] px-1.5 py-0.5 rounded ml-auto"
            style={{ color: "var(--text-muted)", background: "var(--bg)", border: "1px solid var(--border)" }}
          >
            ESC
          </kbd>
        </div>

        {/* Output */}
        <div
          ref={outputRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-xs"
          style={{ minHeight: 180 }}
        >
          {lines.map((line, i) => (
            <div key={i} className="leading-relaxed">
              {line.type === "input" ? (
                <span>
                  <span style={{ color: "var(--green)" }}>$ </span>
                  <span style={{ color: "var(--text-primary)" }}>{line.text}</span>
                </span>
              ) : line.type === "error" ? (
                <span style={{ color: "var(--red)" }}>{line.text}</span>
              ) : (
                <span style={{ color: "var(--text-dim)" }}>{line.text}</span>
              )}
            </div>
          ))}
        </div>

        {/* Input line */}
        <div
          className="flex items-center gap-2 px-4 py-3 font-mono text-xs shrink-0"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
          onClick={() => inputRef.current?.focus()}
        >
          <span style={{ color: "var(--green)" }}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none"
            style={{ color: "var(--text-primary)", caretColor: "var(--green)" }}
            placeholder="type a command..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
