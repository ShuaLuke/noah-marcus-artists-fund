import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.story.title,
  description: seo.story.description,
  openGraph: { title: seo.story.title, description: seo.story.description },
};

export default function StoryPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
        Noah&rsquo;s Story
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
        A life lived in bold color.
      </h1>

      <div className="mt-10 max-w-prose space-y-6 text-lg leading-relaxed text-ink/90">
        {/* ───────────────────────────────────────────────────────────────
            PLACEHOLDER — replace with Noah's real story before launch.
            Edit this text directly; no design changes needed.
        ──────────────────────────────────────────────────────────────── */}
        <p>
          Noah Marcus saw the world in vivid, unapologetic color. [This page is
          a placeholder — replace with the biography and memories the family and
          board would like to share.]
        </p>
        <p>
          Describe Noah&rsquo;s journey as an artist: what drew him to painting,
          the themes he returned to, the way his bold use of color let him
          express his beliefs, his convictions, and his truest self.
        </p>
        <p>
          Close with how that spirit lives on through the Fund — and an
          invitation for readers to be part of it.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/our-purpose"
          className="rounded-full border border-ink px-6 py-3 font-medium transition-colors hover:bg-ink hover:text-paper"
        >
          Our purpose
        </Link>
        <Link
          href="/donate"
          className="rounded-full bg-coral px-6 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          Support the Fund
        </Link>
      </div>
    </article>
  );
}
