# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # start dev server (localhost:4321)
pnpm build     # static build → dist/
pnpm preview   # preview the dist/ build
pnpm format    # format all files with Prettier
```

No test or lint scripts are configured.

## Architecture

**Stack:** Astro 5 (static output) + Preact + Tailwind v4.

**Routing** is file-based under `src/pages/`. Workshop detail pages are generated via `getStaticPaths` in `src/pages/workshops/[slug].astro` from the content collection.

**Content** lives in `content/workshops/*.mdoc` as Markdoc with frontmatter. The schema is defined in `src/content.config.ts` — every frontmatter field (title, date, accentColor, statusType, ticketUrl, learnings, etc.) is validated with Zod there. Add new workshops by creating `.mdoc` files in that folder (or via the Keystatic CMS at `/keystatic`).

**Component model:** Use `.astro` components for anything static/server-rendered. Use `.jsx` (Preact) only for interactive islands, loaded with an `client:*` directive (e.g. `client:load`). `NavToggle.jsx` is the only current interactive island.

**Design system** is entirely in `src/styles/main.css` via Tailwind v4's `@theme` block — all color tokens, font families, type scale, spacing, shadows, and border radii are defined there. Component utility classes (`.btn`, `.tag`, `.card`, `.nav-link`, etc.) are defined in `@layer components` in the same file. Always use these tokens and classes rather than arbitrary values where possible.

**Accent colors** (`vermilion`, `amber`, `blush`) drive per-workshop theming. Components map `data.accentColor` to specific CSS token classes — follow that same lookup-object pattern when adding new color-dependent elements.

**Language:** The site is in Dutch (`lang="nl"`). All UI copy should be in Dutch.
