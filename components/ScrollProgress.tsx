"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--green), var(--green-a50))",
        boxShadow: "0 0 8px var(--green-glow)",
        transition: "width 0.05s linear",
      }}
    />
  );
}
