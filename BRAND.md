# Noah Marcus Artists Fund — Brand Guidelines

The website is the living source of truth for this brand. All tokens below are
defined in code: colors in [`tailwind.config.ts`](tailwind.config.ts), fonts in
[`app/layout.tsx`](app/layout.tsx), buttons/eyebrows in
[`lib/styles.ts`](lib/styles.ts). A rendered, always-current version of this
guide lives at **`/design`**.

---

## 1. Foundation

**Mission.** To celebrate, recognize, and empower outspoken, emerging artists in
the DC, Maryland, and Virginia (DMV) area — providing the financial assistance
they need to actualize their visions.

**Voice & tone.** Warm, bold, and sincere. We honor Noah's memory without being
somber. We champion courage in art. Plain language, active voice, no jargon.

**Guiding principle.** *Explore color courageously.* Noah used color as content;
the brand does too.

---

## 2. Color

Drawn directly from Noah's paintings. Hex values are the canonical tokens.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F7F3EC` | Page background (warm off-white) |
| `ink` | `#1A1714` | Primary text |
| `coral` | `#D8463A` | **Signature text accent** (eyebrows, links, highlights) |
| `ochre` | `#E0A43B` | Warm accent, attribution text |
| `teal` | `#2A8F84` | Secondary accent, success states |
| `blue` | `#3A6E99` | Noah's signature blue |
| `navy` | `#22425C` | Deep sky — banner, quote band |
| `plum` | `#8C3F63` | Twilight accent |
| `sky` | `#BCDCEF` | Sunset sky (light) |
| `blush` | `#E8A0B6` | Sunset pink (cloud wisps) |
| `muted` | `#6B635A` | Secondary text |
| `line` | `#DED6C8` | Borders, hairlines |

**Rules**
- Primary buttons use the **blue→pink gradient** (`from-blue to-plum`) — an
  Apple-style fade echoing the sunset sky. `coral` is the text accent (eyebrows,
  links, highlights), not buttons. Don't introduce new accent colors.
- Use `blue`, `navy`, and `plum` for atmosphere (gradients, bands), not for body
  text.
- Dark bands (`navy`, `ink`, gradients) always use `paper` text.

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
- **Eyebrow:** uppercase, letter-spaced, `coral` — sits above headings
  (`eyebrow` in `lib/styles.ts`).

---

## 5. Logo & wordmark

- Text lockup: **Noah Marcus.** with the period in `coral`.
- Full wordmark: [`/public/logo.png`](public/logo.png) — "The Noah Marcus Artist
  Fund."
- Give it clear space; place on `paper` or a light area of the sky wash.

---

## 6. Buttons (defined in `lib/styles.ts`)

| Variant | Style | When |
|---|---|---|
| `cta.primary` | Blue→pink gradient pill, paper text | The one most important action |
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
- ❌ New accent colors. ❌ Mixing coral and ink as "primary." ❌ Text over
  paintings. ❌ Somber, corporate tone.
