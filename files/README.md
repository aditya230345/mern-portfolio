# Aditya Kumar — Modern MERN Portfolio

A highly polished, fully responsive developer portfolio built with React + Vite + pure CSS.

## 🚀 Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Then open `http://localhost:5173`

---

## 📁 Folder Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component, state management
    ├── styles/
    │   └── main.css          ← Full design system (CSS variables, all sections)
    ├── data/
    │   └── portfolioData.js  ← All content: skills, projects, services, resume
    └── components/
        ├── Loader.jsx         ← Loading animation screen
        ├── Navbar.jsx         ← Sticky nav with active link tracking
        ├── Hero.jsx           ← Hero with typewriter effect
        ├── About.jsx          ← About with info grid
        ├── Resume.jsx         ← Education & Experience timeline
        ├── Services.jsx       ← Services card grid
        ├── Skills.jsx         ← Animated skill bars + tech badges
        ├── Projects.jsx       ← Project cards with tags + links
        ├── Contact.jsx        ← Contact form + info cards
        └── Footer.jsx         ← Footer with links & copyright
```

---

## ✅ What Changed & Why

### Design System
- **New typography**: `Syne` (headings, bold geometric) + `DM Sans` (body, clean readable) — replaces generic Segoe UI
- **CSS variables**: Single source of truth for all colors, spacing, radius, transitions
- **Dark/Light theme**: Full `[data-theme="light"]` variable overrides, toggle button in navbar

### Components
- **Loader.jsx** — Animated entry screen with progress bar (new)
- **Navbar.jsx** — Sticky, glassmorphic on scroll, active link tracking, hamburger menu for mobile (upgraded)
- **Hero.jsx** — Typewriter role animation, floating tech tags, stat counters, grid background (major upgrade)
- **About.jsx** — Info grid cards replace plain `<p>` list (upgraded)
- **Resume.jsx** — Timeline layout with year badges (new section, was just a nav link before)
- **Services.jsx** — Same data, cards now have gold bottom-line hover animation (upgraded)
- **Skills.jsx** — Intersection Observer-triggered animated bars + tech badge cloud (upgraded)
- **Projects.jsx** — Tag system, placeholder emoji fallback, hover zoom on image (upgraded)
- **Contact.jsx** — Split layout: info cards + working React form with sent state (upgraded)
- **Footer.jsx** — Same data and logic preserved, new 3-column layout (upgraded)

### UX Improvements
- `reveal` class + IntersectionObserver for scroll-triggered fade-in animations (App.jsx)
- Scroll-to-top button (appears after 400px scroll)
- Smooth scrolling on all nav links
- Typewriter effect on hero role
- All nav links correctly point to their sections (fixed: Services/Skills/Resume were all `#resume`)
- Mobile hamburger menu with open/close animation

### Performance
- Vite build tool (fast HMR, optimized bundle)
- `loading="lazy"` on all project images
- Google Fonts loaded via `@import` in CSS only (no extra `<link>` tags)
- No external UI library dependencies (removed React Bootstrap entirely)

---

## 🎨 Customization

Edit `src/data/portfolioData.js` to update:
- Your name, contact info
- Skills and proficiency levels
- Projects (add `image: require('./img/...')` for real images)
- Services
- Resume/timeline entries

Edit CSS variables in `src/styles/main.css` under `:root` to change the color scheme.
