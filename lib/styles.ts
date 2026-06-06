// ============================================================================
//  SHARED UI STYLES  —  the single source of truth for buttons/CTAs.
//  Change a value here and every call-to-action across the site updates.
// ============================================================================

// Call-to-action button styles. Brand decision: CORAL is the primary action
// color (our signature). To flip the primary to ink, change `primary` below —
// that one line updates every primary button site-wide.
export const cta = {
  // Primary action (most important thing on the page).
  // Blue→pink gradient (an "Apple-style" fade) echoing the sunset sky. Kept dark
  // enough end-to-end so the white label stays legible.
  primary:
    "inline-block rounded-full bg-gradient-to-r from-blue to-plum px-7 py-3 font-semibold text-paper transition-transform hover:-translate-y-0.5",
  // Secondary action (paired with a primary).
  secondary:
    "inline-block rounded-full border border-ink px-7 py-3 font-medium transition-colors hover:bg-ink hover:text-paper",
  // For use on dark backgrounds (navy/teal/ink panels).
  onDark:
    "inline-block rounded-full bg-paper px-7 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5",
} as const;

// Small eyebrow label that sits above page/section headings.
export const eyebrow =
  "text-sm font-medium uppercase tracking-[0.2em] text-coral";
