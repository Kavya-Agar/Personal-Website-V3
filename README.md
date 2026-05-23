# kavyaagar.com

**Personal website v3** — The third rendition of my portfolio.

A finance terminal aesthetic with live market data, command palette, 8 switchable themes, a hidden terminal easter egg, and standalone pages for /now and /uses.

## Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first CSS, configured via `app/globals.css`
- **Framer Motion** — Animations (used sparingly alongside CSS keyframes)
- **React Icons** — SVG icons

## Dev

```bash
npm install
npm run dev    # localhost:3000
npm run build
npm run lint
```

## Features

- Live market data (SPX, DJI, IXIC, VIX) via Stooq & Yahoo Finance
- 8 switchable themes (Terminal, VS Code, Light, Catppuccin, Night Owl, Britain, Monokai, Dracula)
- Command palette (⌘K) for navigation and actions
- Hidden terminal easter egg (backtick to toggle) with tab-completion and command history
- TradingView S&P 500 heatmap widget
- Scroll progress bar and scroll-reveal animations
- Standalone /now and /uses pages
- Deployed on Vercel at [kavyaagar.com](https://kavyaagar.com)
