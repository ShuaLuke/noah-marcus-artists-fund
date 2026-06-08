# Noah Marcus Artists Fund — Brand Guidelines

The website is the living source of truth for this brand. All tokens below are
defined in code: colors in [`tailwind.config.ts`](tailwind.config.ts), fonts in
[`app/layout.tsx`](app/layout.tsx), buttons/eyebrows in
[`lib/styles.ts`](lib/styles.ts). A rendered, always-current version of this
guide lives at **`/design`**.

---

## 1. Foundation

**Mission.** To celebrate, recognize, and empower outspoken, emerging painters
ages 18–25 in Washington, DC — funding them to create new work and show it
together in a group exhibition (where they sell their work and keep 100%).

**Audience (hard criteria).** Painters, ages 18–25, based in Washington, DC. Use
"painters" (not "artists") and "Washington, DC" (never "DMV") everywhere.

**Voice & tone.** Warm, bold, and sincere. We honor Noah's memory without being
somber. We champion courage in art. Plain language, active voice, no jargon.

**Guiding principle.** *Explore color courageously.* Noah used color as content;
the brand does too.

---

## 2. Color

Grounded in Noah's hero wash (pink → lavender → light blue). **No coral** — the
accent (rose) is drawn from the wash so it harmonizes. Hex values are the
canonical tokens.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FBFAF8` | Page background (soft off-white) |
| `ink` | `#1A1714` | Headlines & body text |
| `blue` | `#CDE0EE` | Light blue fills (from the wash) |
| `blueDeep` | `#5B8FB0` | Links, deep accents, button fills |
| `rose` | `#D97A8E` | Accent (from the wash) |
| `roseDeep` | `#C76B7E` | Accent text, hover, eyebrows |
| `muted` | `#6B635A` | Secondary text |
| `line` | `#E7E2DB` | Borders, hairlines |

**Rules**
- Primary buttons use the **blue→pink gradient** (`from-blueDeep to-roseDeep`) —
  an Apple-style fade echoing the sunset sky. `roseDeep` is the text accent
  (eyebrows, links, highlights). Don't introduce new accent colors (no coral).
- **Accessibility:** `blue` and `rose` are light — never put white/light text on
  them. Body text is `ink`; accents use `roseDeep`/`blueDeep`. Colored blocks use
  a pale fill with `ink` text, or a deep gradient with `paper` text.

---

## 3. Signature motif — the sunset sky

A light-blue sky warming to pink, with wispy clouds glowing against the blue.
- `.sky-sunset` — the home hero background.
- `.top-sky` — a softer wash behind **every** page header (applied site-wide in
  the layout).

It's the brand's atmosphere. Keep it at the top of pages, fading into `paper`;
never run it at full strength behind body copy.

---

## 4. Typography

- **Display:** Fraunces (serif) — headings, the wordmark, pull quotes. Semibold,
  tight tracking.
- **Body:** Hanken Grotesk (sans) — everything else.
- **Eyebrow:** uppercase, letter-spaced, `roseDeep` — sits above headings
  (`eyebrow` in `lib/styles.ts`).

---

## 5. Logo & wordmark

- Text lockup: **Noah Marcus.** with the period in `roseDeep`.
- Full wordmark: [`/public/logo.png`](public/logo.png) — "The Noah Marcus Artist
  Fund."
- Give it clear space; place on `paper` or a light area of the sky wash.

---

## 6. Buttons (defined in `lib/styles.ts`)

| Variant | Style | When |
|---|---|---|
| `cta.primary` | Blue→pink gradient pill (`from-blueDeep to-roseDeep`), paper text | The one most important action |
| `cta.secondary` | Ink outline | Paired with a primary |
| `cta.onDark` | Paper pill | On navy / teal / ink panels |

One primary per view. To change the primary color globally, edit the single
`cta.primary` line.

---

## 7. Imagery

- **Noah's paintings are the visual core.** Feature them generously, uncropped
  where possible (see the masonry gallery on Noah's Story).
- Framed-painting card: `rounded-3xl`, `border-line`, soft shadow, caption
  below.
- Don't overlay text on paintings; let the work speak.
- People photos (board) are circular; paintings are rounded rectangles.

---

## 8. Layout

- Centered containers (`max-w-5xl`/`max-w-6xl`), generous vertical rhythm
  (`py-16 md:py-24`).
- Page headers use a two-column pattern: heading/text beside a framed painting.
- Section dividers use the `.hairline` gradient rule.

---

## 9. Do / Don't

- ✅ Lead with Noah's color. ✅ One primary action per page. ✅ Keep the sunset at
  page tops.
- ❌ Coral or new accent colors. ❌ "DMV"/Maryland/Virginia, or "artists" for
  eligibility (use painters, Washington, DC). ❌ Light text on pale fills. ❌ Text over
  paintings. ❌ Somber, corporate tone.
