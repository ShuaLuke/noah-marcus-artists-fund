import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.purpose.title,
  description: seo.purpose.description,
  openGraph: { title: seo.purpose.title, description: seo.purpose.description },
};

export default function PurposePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
          Our Purpose
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
          Noah&rsquo;s passion for art lives on.
        </h1>
        <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/90">
          <p>
            The Noah Marcus Artists Fund exists to celebrate, recognize, and
            empower outspoken, emerging artists within the DMV area by providing
            the financial assistance they need to actualize their visions.
          </p>
          <p>
            We seek out artists who not only have something to say, but take a
            daring approach in saying it — and who, like Noah, explore color
            courageously.
          </p>
        </div>
      </div>

      {/* MEET THE BOARD */}
      <section className="mt-20">
        <div className="hairline mb-12" />
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Meet the Board
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* PLACEHOLDER cards — replace names/roles/bios before launch */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-line p-6"
            >
              <div className="h-14 w-14 rounded-full bg-ochre/30" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                Board Member {i}
              </h3>
              <p className="text-sm text-coral">Role / title</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Short bio placeholder — replace with a sentence or two about this
                board member.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR ADVISORS */}
      <section className="mt-16">
        <div className="hairline mb-12" />
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Meet our Advisors
        </h2>
        <p className="mt-3 max-w-prose text-muted">
          Our advisors lend their expertise to help us identify and support the
          most promising emerging artists in the region.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-line p-6">
              <div className="h-14 w-14 rounded-full bg-teal/30" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                Advisor {i}
              </h3>
              <p className="text-sm text-coral">Role / title</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Short bio placeholder — replace with this advisor&rsquo;s
                background.
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link
          href="/our-story"
          className="rounded-full border border-ink px-6 py-3 font-medium transition-colors hover:bg-ink hover:text-paper"
        >
          Read Noah&rsquo;s story
        </Link>
        <Link
          href="/apply"
          className="rounded-full bg-coral px-6 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          Apply for a grant
        </Link>
      </div>
    </div>
  );
}
