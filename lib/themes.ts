export type ThemeId = "default" | "britain" | "monokai" | "dracula" | "vscode" | "light" | "catppuccin" | "nightowl";
export type ThemeVars = Record<string, string>;
export type Theme = { id: ThemeId; name: string; vars: ThemeVars };

function buildTheme(
  id: ThemeId,
  name: string,
  bg: string, bgSec: string, bgSubtle: string,
  border: string, borderSubtle: string, bgScrolled: string,
  textPrimary: string, textDim: string, textMuted: string,
  accent: string, accentRgb: [number, number, number],
  yellow: string, red: string
): Theme {
  const [r, g, b] = accentRgb;
  return {
    id, name,
    vars: {
      "--bg":            bg,
      "--bg-secondary":  bgSec,
      "--bg-subtle":     bgSubtle,
      "--bg-scrolled":   bgScrolled,
      "--border":        border,
      "--border-subtle": borderSubtle,
      "--text-primary":  textPrimary,
      "--text-dim":      textDim,
      "--text-muted":    textMuted,
      "--green":         accent,
      "--green-a8":      `rgba(${r},${g},${b},0.08)`,
      "--green-a20":     `rgba(${r},${g},${b},0.20)`,
      "--green-a35":     `rgba(${r},${g},${b},0.35)`,
      "--green-a50":     `rgba(${r},${g},${b},0.50)`,
      "--green-glow":    `rgba(${r},${g},${b},0.60)`,
      "--green-dim":     `rgba(${r},${g},${b},0.12)`,
      "--green-border":  `rgba(${r},${g},${b},0.35)`,
      "--yellow":        yellow,
      "--red":           red,
    },
  };
}

export const themes: Record<ThemeId, Theme> = {
  default: buildTheme(
    "default", "Terminal",
    "#0d1117", "#161b22", "#21262d",
    "#30363d", "#21262d", "rgba(13,17,23,0.92)",
    "#e6edf3", "#8b949e", "#484f58",
    "#00c853", [0, 200, 83],
    "#ffd700", "#ff3d57"
  ),
  vscode: buildTheme(
    "vscode", "VS Code",
    "#1e1e1e", "#252526", "#2d2d2d",
    "#3e3e42", "#2d2d2d", "rgba(30,30,30,0.92)",
    "#d4d4d4", "#9d9d9d", "#858585",
    "#007acc", [0, 122, 204],
    "#dcdcaa", "#f44747"
  ),
  light: buildTheme(
    "light", "Light",
    "#ffffff", "#f6f8fa", "#eaeef2",
    "#d0d7de", "#eaeef2", "rgba(255,255,255,0.92)",
    "#1f2328", "#57606a", "#8c959f",
    "#1a7f37", [26, 127, 55],
    "#9a6700", "#cf222e"
  ),
  catppuccin: buildTheme(
    "catppuccin", "Catppuccin",
    "#1e1e2e", "#181825", "#313244",
    "#45475a", "#313244", "rgba(30,30,46,0.92)",
    "#cdd6f4", "#a6adc8", "#6c7086",
    "#89b4fa", [137, 180, 250],
    "#f9e2af", "#f38ba8"
  ),
  nightowl: buildTheme(
    "nightowl", "Night Owl",
    "#011627", "#01111d", "#0b2942",
    "#1d3b53", "#0b2942", "rgba(1,22,39,0.92)",
    "#d6deeb", "#7b97b1", "#4b6479",
    "#82aaff", [130, 170, 255],
    "#ffcb8b", "#ff5874"
  ),
  britain: buildTheme(
    "britain", "Britain",
    "#010e36", "#012169", "#01308a",
    "#1a4faa", "#01308a", "rgba(1,14,54,0.92)",
    "#ffffff", "#a0b8e8", "#4a6aaa",
    "#c8102e", [200, 16, 46],
    "#ffd700", "#ff4040"
  ),
  monokai: buildTheme(
    "monokai", "Monokai",
    "#272822", "#3e3d32", "#49483e",
    "#49483e", "#3e3d32", "rgba(39,40,34,0.92)",
    "#f8f8f2", "#908080", "#75715e",
    "#a6e22e", [166, 226, 46],
    "#e6db74", "#f92672"
  ),
  dracula: buildTheme(
    "dracula", "Dracula",
    "#282a36", "#343746", "#3d3f4f",
    "#44475a", "#3d3f4f", "rgba(40,42,54,0.92)",
    "#f8f8f2", "#8892b0", "#6272a4",
    "#bd93f9", [189, 147, 249],
    "#f1fa8c", "#ff5555"
  ),
};

/** Apply a theme by setting CSS custom properties on the document root. */
export function applyTheme(id: ThemeId): void {
  const theme = themes[id];
  if (!theme) return;
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme.vars)) {
    root.style.setProperty(key, value);
  }
}
