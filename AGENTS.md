# Project Agent Instructions — Yajri Tour Site

## Stack
Astro 5 + Tailwind 4 (Vite plugin, NOT @astrojs/tailwind). TypeScript strict.
Content lives in src/content/ collections — edit those, not hardcoded markup,
when changing destination copy, badges, or testimonials.

## Brand rules (non-negotiable)
- Colors: use theme tokens only (bg-navy, text-gold, text-sky, bg-offwhite) —
  never hardcode hex values in components.
- Typography: font-display (Fraunces) for headings, font-body (Inter) for
  everything else. Never default to a single sans-serif for both.
- No stock-photo-bright imagery direction in any placeholder — moody/golden-hour.

## Content rules
- Every destination needs both `hookId`/`hookEn` and a distinct
  `whatsappMessageId`/`whatsappMessageEn` pre-filled message — see
  src/content/config.ts schema.
- EN copy is not a literal translation of ID copy. Follow these strict copywriting formulas for destination `hook` fields:
  - **ID Formula (Direct/Practical)**: `[Practical Proposition] + [Key Highlights/Itinerary]`. (e.g., "Private trip Bromo: sunrise Penanjakan, jelajahi kawah aktif, tanpa ribet.")
  - **EN Formula (Story/Context)**: `[Sensory/Atmospheric Hook] + [Geographic Context/Significance] + [Experience]`. (e.g., "Journey into the heart of East Java to experience a golden sunrise and hike an active volcano.")
- Never invent a testimonial as if real. Mark placeholders with
  isPlaceholder: true.

## Task scoping
Work one component/section at a time per the build sequence below. Don't
refactor unrelated files in the same task.

## Build sequence
1. Layout + brand kit (theme tokens, fonts, Header, Footer, WhatsAppCTA)
2. Hero
3. Story/Portfolio section + TestimonialCard component
4. Destinations section + Badge component
5. Itinerary timeline
6. Why Choose Us / Fleet / FAQ
7. Final CTA band
8. EN route (src/pages/en/index.astro) — reuses all above components,
   different content collection language fields
9. SEO pass: meta tags, sitemap check, alt text audit

## Agent skills

### Issue tracker

Issues and specs live as markdown files under `.scratch/<feature>/` in this repo. See `docs/agents/issue-tracker.md`.

### Triage labels

Default canonical triage roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout (`CONTEXT.md` + `docs/adr/`). See `docs/agents/domain.md`.