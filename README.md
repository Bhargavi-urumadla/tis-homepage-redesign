# Tulas International School (TIS) – Homepage Redesign

A modern, animated redesign of the TIS homepage focused on conversion, smooth motion and mobile responsiveness. Copy and brand details are retained from [tis.edu.in](https://tis.edu.in).

## 🚀 Live Demo
- **Live URL:**tis-homepage-redesign-8f0q20dga-bhargavi13.vercel.app
- **Repository:**https://github.com/Bhargavi-urumadla

## 🛠️ Tech Stack
React 18 · Vite · Tailwind CSS 3 · Framer Motion · Lucide React · Deployed on Vercel

## ✨ Standout Features
1. **Scroll-triggered reveals** – `ui/Reveal` staggers cards/sections (`whileInView`, `once: true`, 0.5s, respects `prefers-reduced-motion`).
2. **Scroll progress bar** – `animation/ScrollProgress` uses `useScroll` + `useSpring`.
3. **Animated dark/light switch** – `ui/ThemeToggle` + `hooks/useTheme` (CSS variables, saved in `localStorage`, no flash on load).
4. **Custom cursor** – `animation/CustomCursor` spring ring that grows over links/buttons; disabled on touch (`pointer: fine` only).

## 📦 Getting Started
```bash
git clone https://github.com/<your-username>/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Deploy (Vercel)
Import the repo on vercel.com → Framework: Vite → Deploy.

## Architecture
```
src/
├── components/
│   ├── ui/          Button, Reveal, ThemeToggle, SectionHeading
│   ├── layout/      Navbar (+ mobile menu), Footer
│   ├── sections/    Hero, About, Sports, Rankings, Testimonials, Contact
│   └── animation/   ScrollProgress, CustomCursor
├── hooks/           useTheme, useFinePointer
├── data/            content.js (all copy, nav, stats)
└── styles/          index.css (theme tokens + Tailwind)
```

## Brand Identity Retained
Navy and yellow palette, official logo and imagery, and all copy from tis.edu.in.
