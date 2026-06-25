# Pratyay Roy — Portfolio

A "blueprint / schematic" themed portfolio. React + TypeScript + Vite,
Tailwind CSS v4 + custom CSS variables, Framer Motion for animation.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production

```bash
npm run build     # outputs static files to /dist
npm run preview   # serve the production build locally to sanity-check
```

`dist/` is a fully static site — upload it anywhere (Vercel, Netlify,
GitHub Pages, your own server).

## Deploying

**Vercel** (recommended, zero config):
1. Push this folder to a GitHub repo.
2. Import the repo on vercel.com → it auto-detects Vite → Deploy.

**Netlify**:
1. Push to GitHub, or drag-and-drop the `dist/` folder after `npm run build`
   onto app.netlify.com/drop.
2. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages**:
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: "/your-repo-name/"` in `vite.config.ts`
4. `npm run build && npm run deploy`

## Things to fill in before you ship it

1. **`src/data/content.ts`** — single source of truth for all copy. The
   `Live Multimodal Assistant` and `Hercules` projects keep
   `placeholderLink: true` (no confirmed GitHub URL yet) — fill in once
   you have one. They're intentionally excluded from the pinned Projects
   board (`pinned: true` is only set on MediTrack and NutriScan) but still
   power the Live Deployments lookup, so don't delete them.
2. **Live Deployments section** — the `deployments` array in
   `content.ts`. Set `url`, `mode` (`"iframe"` or `"screenshot"`), and
   `configured: true` once each project is actually hosted.
3. **Resume** — `public/resume.pdf` is your uploaded resume, linked from
   the "Download Resume" button. Swap the file whenever you update it
   (keep the filename `resume.pdf`, or update `profile.resumeUrl` in
   `content.ts` if you rename it).
4. **Favicon** — `public/` has no favicon yet; drop one in and update the
   `<link rel="icon">` in `index.html`.
5. **OG/share image** — none set up yet.
6. Double check the LinkedIn/GitHub/LeetCode URLs in `content.ts` still
   match your current handles.

## Premium touches in this build

- **Framer Motion** everywhere: staggered entrance animations, scroll-triggered
  reveals (`whileInView`), and animated count-up stats.
- **3D tilt** on project cards — they subtly rotate toward the cursor.
- **Magnetic buttons** — primary CTAs pull gently toward the cursor on hover.
- **Cursor glow** — a soft glow follows the pointer (desktop only, respects
  `prefers-reduced-motion`, auto-disabled on touch devices).
- **Scroll progress bar** — a thin gradient bar across the top of the page.
- **Film-grain overlay** — a very low-opacity SVG noise texture.
- **Active-section nav indicator** — the nav underline glides to whichever
  section is in view.
- **Glassmorphism** — every card has real frosted-glass blur with a soft
  inner highlight.
- **Light / dark theme toggle** — top-right of the nav (sun/moon icon).
  Persisted to `localStorage`, defaults to the visitor's OS preference,
  and the correct theme is applied before first paint (a tiny inline
  script in `index.html`) so there's no flash of the wrong theme.
- **Pinned projects board** — the Projects section shows 5 "pin" slots;
  filled ones are real projects, empty ones are openly-labeled "Reserved
  for the next build" placeholders.
- All motion respects `prefers-reduced-motion`.

## Structure

```
src/
  data/content.ts        ← all resume content (edit this for text changes)
  hooks/useTheme.tsx       ← light/dark theme context
  components/
    BlueprintBackground   ← fixed grid + sheet corner marks + vignette
    GrainOverlay           ← subtle film-grain texture
    ScrollProgress         ← top scroll progress bar
    CursorGlow              ← cursor-following glow (desktop only)
    Magnetic                ← wrapper that gives buttons a magnetic hover pull
    CountUp                 ← animated count-up number for stats
    Nav                     ← header nav, photo mark, theme toggle, active-section indicator
    Hero                    ← intro + quote + tech-stack icon grid + resume download
    Marquee                 ← scrolling tech-stack ticker (pauses on hover)
    About                    ← narrative + education + trait cards
    Skills                   ← component-legend skill grid
    Timeline                 ← "Journey" — chronological milestones
    Experience                ← work history, timeline-style layout
    Projects                  ← pinned-board project cards with 3D tilt
    LiveDeployments             ← live preview / placeholder cards for deployed apps
    Certifications                ← certification strip
    Contact                        ← CTA + blueprint title-block footer
```

Color, font, and spacing tokens live as CSS variables at the top of
`src/index.css` — change them there and it cascades everywhere, including
both the dark theme (default) and the light theme override block.
