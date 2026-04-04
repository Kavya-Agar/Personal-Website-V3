# kavyaagar.com

Personal portfolio site with a finance-terminal aesthetic — dark theme, monospace type, live market data, and a command palette.

## Stack

- **Next.js 16** — App Router
- **TypeScript**
- **Tailwind CSS v4** — CSS-first config via `globals.css`
- **Framer Motion** — used sparingly

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is in use, Next.js will pick 3001.

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Features

- **Live market ticker** — SPX, DJI, IXIC, VIX updated every 60s via `/api/market`
- **NYSE status dot** — green/red indicator in the navbar, auto-updates at market open/close
- **⌘K command palette** — keyboard-driven navigation with grouped commands and search
- **Hamburger menu** — slide-down panel with section links and icons
- **Scroll section indicator** — navbar center shows current section as you scroll
- **/now page** — standalone page, no shared chrome

## Project Structure

```
app/
  page.tsx          # Main single-page layout
  now/page.tsx      # Standalone /now page
  globals.css       # Design tokens, keyframes, shared classes
  api/market/       # Market data endpoint (Stooq + Yahoo Finance)
components/
  Navbar.tsx
  CommandPalette.tsx
  MarketStatus.tsx
  Ticker.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Experience.tsx
  Projects.tsx
  StockHeatmap.tsx
  Contact.tsx
  Footer.tsx
public/
  resume.pdf        # Add your resume here
```

## Deploying

Deploy with [Vercel](https://vercel.com) — zero configuration needed for Next.js.

## Before Going Live

- [ ] `components/Experience.tsx` — fill in real company names and bullet points
- [ ] `components/Contact.tsx` — update email, GitHub, LinkedIn, Twitter links
- [ ] `public/resume.pdf` — replace with your actual resume
