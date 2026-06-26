# Pratyay Roy — Portfolio

My personal portfolio site, built with a blueprint/schematic theme.
React + TypeScript + Vite, Tailwind CSS v4, and Framer Motion.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build     # static output in /dist
npm run preview   # preview the production build
```

The build in `dist/` is fully static and can be hosted anywhere (Vercel,
Netlify, GitHub Pages, etc.).

## Project structure

```
src/
  data/content.ts     all site content (text, links, projects, skills)
  hooks/useTheme.tsx  light/dark theme context
  components/         UI sections and effects
```

Most text changes only need an edit in `src/data/content.ts`. Design
tokens (colors, fonts, spacing) live as CSS variables at the top of
`src/index.css`.
