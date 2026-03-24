# Studio — AnEvergreene Professional Hub

> **Shared practices live in the root `CLAUDE.md` one level up (`../CLAUDE.md`).**
> Claude Code loads it automatically from parent directories. That file covers
> the spirit of this work, working-together practices, who Audrey is, and session
> endings. This file covers only what's specific to Studio.

## What this project is

The website for **AnEvergreene Studio** — the umbrella brand for Audrey
Evergreene's calm-tech projects. The Studio houses products, consulting
services, and a dev/business blog, all at `audreyevergreene.me`.

Future projects may get their own sites under the Studio umbrella, sharing a
common feeling and design philosophy but with their own themes.

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

The site has a **subdued, professional aesthetic**:

- **No glow effects** — subtle border transitions and color shifts instead
- **Muted palette** — sage greens, warm earths, amber golds
- **Slower, calmer** — 300-400ms transitions, subtle noise texture
- **Dark mode default** — respects `prefers-color-scheme`, persists choice

## AI transparency

All AI-touched files need both:
- `ai_assisted: true` (boolean for filtering)
- `ai_notes:` (string describing what AI contributed)

## Configuration

- `astro.config.mjs` — site: `https://ladyaudrey.github.io`, base: `/Studio/`
- `tailwind.config.mjs` — color palette, fonts, semantic tokens
- `src/components/Header.astro` — site name and navigation
- `src/components/Footer.astro` — footer

## Commands

```bash
npm install    # install dependencies
npm run dev    # start dev server (localhost:4321)
npm run build  # build for production
npm run preview # preview production build locally
./go           # shortcut for npm run dev --open
```

## Deferred tasks

- **Restore "All posts →" link on index page** — removed while there's only one
  blog post. When a second post is published, add back the link next to the
  "Latest thoughts" heading in `src/pages/index.astro`. The old markup:
  ```html
  <div class="flex items-center justify-between mb-8">
    <h2 class="text-2xl font-heading font-semibold">Latest thoughts</h2>
    <a href="/blog/" class="text-sm text-accent hover:text-accent-hover transition-colors duration-300">
      All posts &rarr;
    </a>
  </div>
  ```
- **Inkscape source files** — treeline logo working files live in
  `public/images/Inkscape/` (git-ignored). If the final SVGs need to be
  committed for the site, export clean versions to `public/images/` instead.

## Important

- Currently served at `https://ladyaudrey.github.io/Studio/`
- Custom domain `audreyevergreene.me` reserved (CNAME in `public/`) — not yet connected
- Base path is `/Studio/` — must match the GitHub repo name
