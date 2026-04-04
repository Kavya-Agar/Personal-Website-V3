"use client";

import { useEffect } from "react";

export function ResumeModal({ onClose }: { onClose: () => void }) {
  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      {/* Window */}
      <div
        className="relative flex flex-col rounded-lg overflow-hidden shadow-2xl"
        style={{
          width: "min(900px, 100%)",
          height: "min(90vh, 1000px)",
          background: "#161b22",
          border: "1px solid #30363d",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-3 shrink-0"
          style={{ background: "#0d1117", borderBottom: "1px solid #30363d" }}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full transition-opacity hover:opacity-80"
              style={{ background: "#ff5f56" }}
              aria-label="Close"
            />
            <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
          </div>
          <span className="font-mono text-[11px]" style={{ color: "#8b949e" }}>
            Kavya_Agar_Resume.pdf
          </span>
          <a
            href="/resume.pdf"
            download="Kavya_Agar_Resume.pdf"
            className="font-mono text-[10px] px-2 py-1 rounded transition-colors hover:opacity-80"
            style={{
              color: "#00c853",
              background: "rgba(0,200,83,0.08)",
              border: "1px solid rgba(0,200,83,0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            ↓ Download
          </a>
        </div>

        {/* PDF viewer */}
        <iframe
          src="/resume.pdf#toolbar=0"
          className="flex-1 w-full"
          style={{ border: "none", background: "#1c2128" }}
          title="Kavya Agar Resume"
        />
      </div>
    </div>
  );
}
