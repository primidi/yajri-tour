# BRAND-BRIEF.md
**Purpose:** Source of truth for brand, voice, and non-technical product decisions.
Feed this to `/grill-with-docs` before your first session, and reference it
(`docs/BRAND-BRIEF.md`) in any `/prototype` prompt so the agent anchors to real
material instead of generic travel-site defaults. This file rarely changes —
`CONTEXT.md` is the living, evolving vocabulary layer built ON TOP of this.

---

## 1. Business Identity

- **Name:** Yajri Tour and Travel
- **Positioning:** Private tour operator, East Java, boutique/relaxed-pace —
  explicitly NOT a mass-market open-trip operator. The itinerary PDF states
  this directly: *"designed for travelers who prefer a relaxed pace while
  enjoying every destination without rushing."* This is a real differentiator,
  not filler copy — most competitor language rushes travelers through Bromo
  at 2am. Lean into "unrushed" as a repeatable brand word.
- **Core route:** 4D3N Mount Bromo – Tumpak Sewu – Ijen (flagship product),
  starting Surabaya/Malang, ending Ketapang or Bali transfer.
- **Contact:** WhatsApp +62 823-4371-0016 (all booking/pricing funnels here,
  no on-site checkout)
- **Payment methods accepted (mention as trust signal, not a checkout flow):**
  Cash, Bank Transfer, Wise, PayPal, Visa & Mastercard

## 2. Visual Identity (extracted from pamphlet, treat as locked)

| Token | Value | Notes |
|---|---|---|
| Deep Navy | `#0F2540` | Dominant background, nav, footer |
| Gold | `#C9A227` | CTAs, headings, dividers, star ratings |
| Sky/Teal | `#3FA9DC` | Checkmark icons, secondary accents |
| Off-white | `#F7F7F5` | Light section backgrounds |
| Charcoal | `#1C1C1C` | Body text on light backgrounds |

- **Typography feel:** serif display (pamphlet's "EXPLORE EAST JAVA" headline)
  + clean sans body. Placeholder pairing: Fraunces (display) + Inter (body).
  The serif is doing real brand work — it's what separates this from a
  generic all-sans WP-travel-template look. Don't let the agent quietly drop
  it in favor of an all-sans system font stack.
- **Photography direction:** moody, golden-hour/blue-hour, wide landscape
  shots of volcanic terrain and waterfalls — NOT bright stock-photo travel
  imagery. Pamphlet examples: Bromo crater at dusk with smoke, Ijen blue
  fire glow, Tumpak Sewu curtain waterfall from below.
- **Logo:** circular "T" badge mark (Yajri Trans), currently only available
  as a flattened pamphlet image — vector source needed from client before
  final polish.

## 3. Voice & Tone — Positive and Negative Examples

Use these as calibration anchors. When the agent (or you) writes new copy,
check it against both columns.

| ✅ On-brand (matches pamphlet/itinerary voice) | ❌ Off-brand (generic travel-template voice) |
|---|---|
| "Designed for travelers who prefer a relaxed pace while enjoying every destination without rushing." | "Experience the adventure of a lifetime!" |
| "Piece of Niagara Indonesia" (Tumpak Sewu, pamphlet's actual phrase) | "Discover breathtaking waterfalls" |
| "Transparent Pricing (No Hidden Costs)" | "Best prices guaranteed!!!" |
| "Phenomenal Blue Fire, Stunning Acid Lake" — specific, sensory | "A magical experience awaits" |
| Route/logistics stated plainly and specifically (times, hotel check-in windows, jeep pickup at 02:30) | Vague "early morning" / "later that day" |

General rule: the pamphlet earns trust through **specificity** (exact times,
exact inclusions, exact route names) — not through generic excitement
language. Any copy the agent generates should default to specific and
factual over enthusiastic and vague.

## 4. Core Content Inventory (what's REAL vs PLACEHOLDER — keep this current)

**Real, sourced from pamphlet + itinerary PDF:**
- 3 core destinations: Mount Bromo, Tumpak Sewu Waterfall, Kawah Ijen Blue Fire
- Full 4-day itinerary with times (Day 1: Malang/Jodipan arrival, Day 2:
  Tumpak Sewu + Kapas Biru, Day 3: Bromo sunrise + drive to Ijen, Day 4: Ijen
  trek + Bali/Ketapang transfer)
- Tour Includes / Excludes lists (private vehicle, driver, fuel/tolls,
  3 nights + breakfast, 4x4 jeep at Bromo, entrance tickets, local guide at
  Ijen & Tumpak Sewu, gas mask, mineral water, health cert assistance /
  excludes lunch-dinner, personal expenses, insurance, horse riding, tips)
- Pricing tiers by pax count (2–9+, with/without hotel, Ketapang vs Bali
  finish) — kept in WhatsApp-only disclosure per your original brief, NOT
  displayed on-site
- Fleet: 3 vehicle types shown (van, Innova-type MPV, Avanza-type MPV)

**PLACEHOLDER — do not treat as final, do not let agent invent supporting
detail around these:**
- Batu tour content (only exists as a badge label, no source material)
- Pantai Selatan Malang tour content (same)
- All testimonials (real one arrives later per client; current 3 are
  generic-but-honest placeholders, explicitly marked `isPlaceholder: true`)
- Logo vector file
- Additional high-res photography beyond pamphlet images

## 5. Non-Technical Product Decisions (already made — don't re-litigate per session)

- **Story/Portfolio content appears BEFORE pricing signals**, directly after
  Hero. Source: client's own testimonial feedback that foreign tourists want
  story and portfolio before price. This is a business decision, not a
  design preference — treat it as fixed.
- **Price is never shown on-site.** Every price-adjacent CTA routes to
  WhatsApp with a pre-filled, context-specific message (see conversation
  history / AGENTS.md for the exact message-per-section pattern).
- **Recommendation badges are additive, not exclusive** — a destination
  (Bromo) can be tagged both "Popular with Foreign Travelers" and "Popular
  with Local Travelers." Never frame these as segregating tourist types;
  frame as helpful curation.
- **EN copy is not a literal translation of ID copy.** EN gets more
  story/logistics depth (foreign travelers research further ahead — altitude,
  pace, what's included). ID can stay closer to the pamphlet's direct,
  practical register.
- **Single scrolling page**, not a multi-page site — confirmed decision,
  don't suggest restructuring into separate tour pages unless the catalog
  actually grows beyond these destinations.

## 6. Anti-Genericness Checklist (use this when reviewing `/prototype` output)

Ask of any generated section:
1. Would this exact layout/copy work equally well for a generic Bali or
   Yogyakarta tour site? If yes, it's too generic — inject a East-Java/
   Bromo-Ijen-Tumpak-Sewu-specific detail (a real place name, a real time,
   a real included item) until it wouldn't.
2. Does it use the serif/sans pairing and navy/gold/sky palette, or has it
   drifted to an all-sans, all-blue "default Tailwind SaaS" look?
3. Does the copy lean on specificity (§3) or generic excitement language?
4. If it invents a fact (a testimonial detail, a destination description for
   Batu/Pantai Selatan Malang), flag it — cross-check against §4's
   real-vs-placeholder inventory before accepting.