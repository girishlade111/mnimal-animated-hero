# Mnimal Animated Hero

A minimal, dark, animated hero-section landing page built with Next.js. Bold oversized typography with an animated line-shadow effect, glowing orange radial-gradient backdrop, shimmering CTA button, and a responsive nav with mobile menu — all animation done client-side with Motion.

**Live demo:** https://girishlade111.github.io/mnimal-animated-hero/

## Features

- **Animated headline** — `LineShadowText` component renders a diagonal striped shadow under the hero text, animated with Motion
- **Neon gradient backdrop** — layered SVG radial gradients (white-hot core fading into orange) on a black canvas
- **Shimmer button** — CTA button with an animated shine sweep
- **Responsive nav** — desktop links + hamburger menu on mobile
- **Dark theme** — pure-black canvas, high-contrast typography
- **Static-export ready** — builds to plain HTML/CSS/JS (`output: 'export'`), deployable anywhere including GitHub Pages

## Tech stack

- **Next.js 15** (App Router, static export) + **React 19** + TypeScript
- **Motion** (`motion/react`) — animation
- **Tailwind CSS** + **shadcn/ui** bits (button)
- **Geist** font, **lucide-react** icons, **@vercel/analytics**

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # outputs to ./out
```

## Project structure

```
app/
  page.tsx                 # The hero page
  layout.tsx               # Root layout + metadata
  globals.css
components/
  line-shadow-text.tsx     # Animated line-shadow headline text
  shimmer-button.tsx       # Shimmer-sweep CTA button
  theme-provider.tsx
  ui/button.tsx            # shadcn button
public/                    # Placeholder images/logos
next.config.mjs            # output: 'export', images unoptimized
```

## Notes

- `basePath: '/mnimal-animated-hero'` is set in `next.config.mjs` so asset URLs resolve under the GitHub Pages subpath. Remove it if you deploy to a root domain or Vercel.
- Next.js was bumped from 15.2.4 to 15.2.8 for the React2Shell (CVE-2025-55182) security patch.

## Original v0 project

This repository was initialized from a [v0](https://v0.app) project. Any changes made in the v0 chat are automatically synced here.

---

Built by Girish Lade — https://ladestack.in
