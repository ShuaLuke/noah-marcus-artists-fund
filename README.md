# Noah Marcus Artists Fund

Production rebuild of the Fund's website. Next.js (App Router) + TypeScript + Tailwind.

## Run locally

```bash
npm install
cp .env.example .env.local   # then paste your Stripe test key
npm run dev                  # http://localhost:3000
```

## Where to edit things

- **All copy, SEO tags, nav, FAQ, donation links, launch banner:** `lib/content.ts` — one file, no design code.
- **Noah's Story narrative:** `app/our-story/page.tsx` (placeholder text marked in comments).
- **Board & Advisors:** `app/our-purpose/page.tsx` (placeholder cards).
- **Colors / fonts:** `tailwind.config.ts`.

## Donations

Stripe Checkout is the primary path (`app/api/checkout/route.ts`). PayPal / Venmo / Cash App
render as backup links from `lib/content.ts`. Set `STRIPE_SECRET_KEY` to enable card donations;
without it the page still works and falls back to the backup links.

## Applications

Currently links out to the Google Form (`application.mode = "google-form"` in `lib/content.ts`).
To build a native on-site form later, switch `mode` to `"native"` and implement the form in
`app/apply/page.tsx`.

## Deploy (Vercel)

1. Push to a Git repo.
2. Import into Vercel.
3. Add `STRIPE_SECRET_KEY` (live key) under Project → Settings → Environment Variables.
4. Add your domain (noahartistsfund.org) under Project → Settings → Domains.

## Pre-launch checklist

- [ ] Replace logo/favicon (see `app/` metadata + add files to `public/`)
- [ ] Fill in Noah's Story
- [ ] Fill in Board & Advisors
- [ ] Confirm/replace PayPal link (currently the QR-download URL)
- [ ] Set live Stripe key in Vercel
- [ ] Update FAQ deadline answer
- [ ] Connect domain
