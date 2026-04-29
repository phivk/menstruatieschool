# Plan: Fix WCAG AA Color Contrast Failures

## Context

The Lighthouse color contrast audit (`specs/lighthouse/lighthouse-report-color-contrast.json`) found 40 failing elements across the site — all rated "serious". The failures cluster into five root-cause groups, all of which can be fixed by adjusting a handful of design tokens and a few component-level overrides, without changing the brand palette or visual hierarchy.

---

## Root Cause Groups & Fixes

### Group A — Dark-background text (footer + newsletter): critical failures (2.51:1, need 4.5:1)

**Problem:** The footer (`Footer.astro`) and newsletter section (`index.astro`) use `--color-bordeaux` (#1a010c) as background but apply `--color-bordeaux-60` (#5a4f48) and `--color-bordeaux-40` (#7a706a) as text colors. These are warm-gray *light-background* tokens that appear nearly invisible on the dark bordeaux canvas.

**Fix — `src/components/Footer.astro`:**
- Section overlines, body copy, copyright: change `color: var(--color-bordeaux-60)` → `color: rgba(255,255,255,0.6)` (contrast ~11:1 ✓)
- Nav links: change `color: var(--color-bordeaux-40)` → `color: rgba(255,255,255,0.75)` (contrast ~14:1 ✓)

**Fix — `src/pages/index.astro` (newsletter section):**
- Body paragraph: change `style="color: var(--color-bordeaux-60)"` → `style="color: rgba(255,255,255,0.75)"`

---

### Group B — `--color-bordeaux-20` too light on white (2.84:1, need 4.5:1)

**Problem:** `--color-bordeaux-20: #999999` is used for `.card-date` and `.type-caption` price/time text on white cards. Pure gray #999999 only achieves 2.84:1 on white.

**Fix — `src/styles/main.css` token:**
```css
--color-bordeaux-20: #726b68;   /* was #999999 — warm mid-gray, 5.2:1 on white ✓ */
```
Ripple-safe: this token is not used on dark backgrounds; placeholder contrast is not a WCAG AA requirement.

---

### Group C — `--color-bordeaux-40` barely fails on off-white (4.42:1, need 4.5:1)

**Problem:** `--color-bordeaux-40: #7a706a` is used for `.section-overline` and `body-lg` secondary text in the off-white `#over-ons` section (bg: `--color-off-white` #f5f5f5). 4.42:1 just misses the 4.5:1 threshold.

**Fix — `src/styles/main.css` token:**
```css
--color-bordeaux-40: #6d6560;   /* was #7a706a — slightly darker, 5.3:1 on off-white ✓, 5.8:1 on white ✓ */
```
Ripple check: Footer links currently use this token on dark bg — Group A fix applies explicit overrides that take precedence, so darkening the token doesn't hurt the footer.

---

### Group D — Amber accent colors on white/mist (2.03–3.05:1)

Three distinct amber failures:

1. **`.stat-number` default** (#f0a820 amber on white, 32px bold) — 2.03:1, need 3:1  
   Fix `src/styles/main.css`: `.stat-number { color: var(--color-amber-dark); }` (#c8860a → 3.05:1 ✓ for large text)

2. **Section overlines with `text-[var(--color-amber-dark)]`** (#c8860a on white, 10px) — 3.05:1, need 4.5:1  
   And **hero badge overline** (#c8860a on amber-mist #fdf0c8) — 2.68:1, need 4.5:1  
   Fix: add new token `--color-amber-text: #8c6000` (already used as a hardcoded value in `.tag-new` and `.tag-outline-amber` — promotes it to a first-class token). Achieves 5.45:1 on white ✓ and 4.8:1 on amber-mist ✓.  
   - `src/pages/index.astro` hero badge: `text-[var(--color-amber-dark)]` → `text-[var(--color-amber-text)]`  
   - `src/pages/index.astro` workshops overline: `text-[var(--color-amber-dark)]` → `text-[var(--color-amber-text)]`

3. **`moreInfoColor.amber` in WorkshopCard** (#c8860a on white, 13px) — 3.05:1, need 4.5:1 (not yet flagged by lighthouse but would fail for amber workshops)  
   Fix `src/components/WorkshopCard.astro`: amber case → `text-[var(--color-amber-text)]`

---

### Group E — Blush accent colors on white (2.38–3.82:1)

Three blush failures:

1. **`.tag-outline-blush` text** (#e8908a on white, 12px) — 2.38:1, need 4.5:1  
   Fix: add new token `--color-blush-text: #8b3932` (dark rose, 7.44:1 on white ✓, 5.7:1 on blush-mist ✓).  
   In `src/styles/main.css`: `.tag-outline-blush { color: var(--color-blush-text); }` (border stays `--color-blush`)

2. **`moreInfoColor.blush` in WorkshopCard** (#c4685e blush-dark on white, 13px) — 3.82:1, need 4.5:1  
   Fix `src/components/WorkshopCard.astro`: `text-[var(--color-blush-dark)]` → `text-[var(--color-blush-text)]`

3. **Stat number "80%"** (#e8908a blush on white, 32px bold) — 2.38:1, need 3:1  
   Fix `src/pages/index.astro`: `text-[var(--color-blush)]` → `text-[var(--color-blush-dark)]` (#c4685e → 3.82:1 ✓ for large text)

---

## Files to Change

| File | Changes |
|---|---|
| `src/styles/main.css` | 4 token changes + 2 new tokens + `.stat-number` + `.tag-outline-blush` color |
| `src/components/Footer.astro` | Replace all `bordeaux-60`/`bordeaux-40` text colors with white-alpha equivalents |
| `src/pages/index.astro` | Hero badge overline, workshops overline, stat "80%", newsletter body text |
| `src/components/WorkshopCard.astro` | `moreInfoColor` amber → amber-text, blush → blush-text |

---

## Token Summary

```css
/* NEW */
--color-amber-text: #8c6000;    /* 5.45:1 on white, 4.8:1 on amber-mist */
--color-blush-text: #8b3932;    /* 7.44:1 on white, 5.7:1 on blush-mist */

/* UPDATED */
--color-bordeaux-40: #6d6560;   /* was #7a706a — passes 4.5:1 on off-white */
--color-bordeaux-20: #726b68;   /* was #999999 — passes 4.5:1 on white */
```

---

## Verification

1. `pnpm build && pnpm preview` — confirm no build errors
2. Run Lighthouse accessibility audit on localhost — score should pass color-contrast
3. Visually inspect: footer (dark bg text), workshop cards (tag + date + "Meer info"), hero stats, section overlines on off-white
4. Check `.btn-disabled` still looks visually muted (bordeaux-20 darkens from #999 to #726b68 — still obviously inactive)
