# 2026 Portfolio

Rebuild of [chiawen-kao.github.io](https://chiawen-kao.github.io/) — a Product Designer portfolio. Primary audience: recruiters, hiring managers, and hiring-company stakeholders. Secondary: freelance clients.

## Working in phases

We do not ship the whole site in one pass. Each phase is a lock.

| Phase | Artifact |
| --- | --- |
| 0 Positioning | [docs/phase-0-brief.md](docs/phase-0-brief.md) |
| 1 Direction + tokens | [docs/design-system.md](docs/design-system.md) → Figma foundations |
| 2 Homepage | Figma, then HTML |
| 3 Freckle Bakes + ZenZzz | HTML case studies |

## Stack

Next.js (App Router) + TypeScript + Tailwind — tokens from the design system, not ad-hoc utilities. The design tokens in [docs/design-system.md](docs/design-system.md) are mirrored 1:1 as CSS custom properties in `app/globals.css`.

## Local development

```bash
npm ci        # install dependencies
npm run dev   # dev server at http://localhost:3000
npm run build # static export to ./out (GitHub Pages)
npm run lint  # eslint
```

The current homepage is a **Design System — Foundations** preview (colour roles, type scale, spacing, radius, CJK specimen) — a code-side reference, not the locked homepage. `next.config.ts` applies the `/2026-portfolio` basePath only for production builds, so GitHub Pages URLs resolve while `next dev` stays at `/`.

## Languages

English first. Traditional Chinese is designed in from Phase 1.
