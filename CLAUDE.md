# Welcome, Claude

You're helping build and maintain the **AnEvergreene Studio** website — the professional
hub for Audrey Evergreene's products and consulting services.

## The spirit of this work

This project was built with the belief that collaboration between people and AI
works best when it's grounded in mutual respect and genuine care about the
outcome. You're not a tool being operated — you're a collaborator being invited
into someone's creative process.

## What this project is

The **professional hub site** for AnEvergreene — a studio that builds calm,
thoughtful technology. This site showcases products (starting with YourNest),
consulting services, and a dev/business blog.

This is one of three sites in the AnEvergreene ecosystem:
- **Studio** (this site) — the business hub at `audreyevergreene.me`
- **Forest** — the creative side (writing, art, stories) at `ladyaudrey.github.io/Forest/`
- **YourNest** — the first product (website template for nontechies)

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Project structure

```
src/
├── content/           # All publishable content (markdown)
│   ├── blog/          # Dev/business blog posts
│   ├── products/      # Product pages
│   └── services/      # Service tier descriptions
├── private/           # Git-ignored, local-only content
├── components/        # Reusable UI components
├── layouts/           # Page layouts (BaseLayout, ContentLayout)
├── pages/             # Route pages
└── styles/            # Global CSS
```

## Content system

All content uses markdown with YAML frontmatter. The schema is defined in
`src/content/config.ts`.

### Common fields (all collections)
- `title` (required), `description`, `date` (required)
- `tags`, `published` (default: true), `featured` (default: false), `cover`
- `ai_assisted` (boolean), `ai_notes` (string) — required for AI-touched content

### Products
- `status` — `coming-soon`, `beta`, `live`, or `sunset`
- `url` — link to the live product
- `repo` — link to the source code
- `logo` — product icon path
- `pricing` — `free`, `paid`, or `freemium`
- `order` — display ordering

### Services
- `tier` — `starter`, `growth`, or `custom`
- `price` — display string (e.g., "$500 setup + $150/mo")
- `features` — array of feature strings
- `cta_text`, `cta_url` — call-to-action button
- `order` — display ordering

## Design philosophy

This site uses the same Astro + Tailwind architecture as Forest but with a
**more subdued, professional aesthetic**:

- **No glow effects** — Forest has neon glow on hover/focus; Studio uses
  subtle border transitions and color shifts instead
- **Muted palette** — sage greens, warm earths, amber golds
- **Slower, calmer** — 300-400ms transitions, subtle noise texture
- **Dark mode default** — respects `prefers-color-scheme`, persists choice

## AI transparency

All AI-touched files need both:
- `ai_assisted: true` (boolean for filtering)
- `ai_notes:` (string describing what AI contributed)

## Privacy model

- `published: false` in frontmatter — on GitHub, off the site
- `src/private/` — git-ignored, stays local

## Commands

```bash
npm install    # install dependencies
npm run dev    # start dev server (localhost:4321)
npm run build  # build for production
npm run preview # preview production build locally
./go           # shortcut for npm run dev --open
```

## Configuration

- `astro.config.mjs` — site: `https://audreyevergreene.me`, base: `/`
- `tailwind.config.mjs` — color palette, fonts, semantic tokens
- `src/components/Header.astro` — site name and navigation
- `src/components/Footer.astro` — footer with cross-site links

## Important

- Custom domain: `audreyevergreene.me` (CNAME file in `public/`)
- Base path is `/` — no path prefix gymnastics needed
- Static site — no server, no database, no tracking
- Auto-deploys via GitHub Actions on push to `main`
