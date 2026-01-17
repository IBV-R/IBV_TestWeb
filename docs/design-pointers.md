# Phase 2 — Design Pointers & Strategy for IBV

This document converts the competitive analysis into actionable guidance for IndusBridgeventures.com.

---

## 1) Design patterns to adopt (3–5)

### 1. Thesis-forward hero (single bold proposition)
- **Pattern**: one strong mission sentence + short subcopy + 1–2 CTAs.
- **Why**: deep tech audiences want immediate clarity.
- **Implementation**: `Hero` component with primary CTA (“Speak with us”) and secondary CTA (“Explore our thesis”).

### 2. Surface + border card system
- **Pattern**: subtle card surfaces with thin borders; hover state changes background.
- **Why**: conveys institutional polish without visual noise.
- **Implementation**: `Card` component with `bg-surface` and `border-border`.

### 3. Grid-first sections
- **Pattern**: features / focus areas / team presented as grids.
- **Why**: creates scannability and strong information hierarchy.
- **Implementation**: reusable grid layouts across pages.

### 4. Sticky navigation with persistent CTA
- **Pattern**: sticky header + “Get in touch” CTA.
- **Why**: increases conversion and reduces friction.

### 5. Subtle “tech glow” backgrounds
- **Pattern**: radial gradients / glows behind hero and CTAs.
- **Why**: deep-tech aesthetic without heavy imagery.

---

## 2) Content & messaging frameworks (3–5)

### 1. “Find, fund, scale” framework
- Use three pillars: sourcing edge, capital + support, and cross-border scale.

### 2. “What we look for” founder qualification
- Bullet the bar: founders, field-proven tech, clear adoption path, 10× scale.

### 3. “Focus areas” with one-line explainers
- Avoid only listing categories; provide a short explanation of why each matters.

### 4. “Dual-use by design” positioning
- Emphasize the ability to win both defence and commercial markets.

### 5. “India as build hub, global as market”
- Communicate why India’s engineering + manufacturing advantage is structural.

---

## 3) Recommended page structure for IBV

**Primary navigation (keep lean)**
- Home
- About
- Investment Thesis
- Portfolio
- Team
- Contact

**Secondary (footer / deep links)**
- For Startups
- For Investors
- I2A Launchpad
- (Optional) Insights

---

## 4) Typography recommendations

- **Font**: a modern grotesk/sans (Geist, Inter, or similar)
- **H1**: large, tight tracking, high contrast
- **Body**: 16–18px, generous line-height
- **Eyebrows**: 0.2em letter-spacing, small caps feel (signals institutional)

---

## 5) Color palette (aligned to current IBV brand)

Recommended tokens
- Background: **deep navy / near‑black** (matches Seraphim-style deep tech aesthetic)
- Foreground: near‑white for legibility
- Surface: translucent “glass” layers for cards
- Border: low-contrast thin lines
- Accent: **IBV blue** (observed on the current site) — used for CTAs and highlights

Optional
- A clean light mode variant using the same accent family

The codebase implements this with CSS variables in `app/globals.css`:
- `--background`, `--surface`, `--border`, `--accent`

---

## 6) Visual imagery guidelines

If/when IBV adds imagery, prefer:
- Hardware, aerospace, defence systems, satellite/launch imagery
- Abstract technical motifs: grids, signals, optics, fabrication
- Founder photos only if high quality and consistent

Avoid:
- Generic startup stock photos
- Overly busy gradients and excessive animation

---

## Notes for Phase 3 implementation

- Use the Next.js App Router (`app/<page>/page.tsx`)
- Keep pages mostly server components
- Use Tailwind-only styling (no extra CSS frameworks)
- Ensure accessible forms, labels, focus states, and semantic headings
