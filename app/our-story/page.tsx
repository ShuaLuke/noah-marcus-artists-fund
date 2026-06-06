import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seo, noahWorks } from "@/lib/content";

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
        <p>
          Noah Marcus was a Washington, D.C. native and a student in the Painting
          and Printmaking Department at the Virginia Commonwealth University
          School of the Arts, where he was pursuing a Bachelor of Fine Arts. His
          promise as a gifted painter was revealed as early as age 17, when he
          earned ten Scholastic Art &amp; Writing Awards from the Alliance for
          Young Artists and Writers.
        </p>
        <p>
          It was Noah&rsquo;s middle-school art teacher at the Maret School who
          first recognized his talent, praising his bold use of color and the
          dynamic brush strokes in his paintings. Noah excelled at color theory
          and used color as content in his striking abstract work, working
          primarily in oil and acrylic.
        </p>
        <p>
          While at VCU, he grew increasingly agitated by social injustice and
          political issues, which became the subject of several of his most
          recent paintings — <em>Charlottesville Horror</em>, where he speaks out
          against white supremacy, and <em>Priest</em>, where he depicts
          child-abusing clergy as monsters. Noah&rsquo;s collection reveals both
          the beauty and the darkness of the world.
        </p>
      </div>

      {/* NOAH'S WORK — renders only once paintings are added to lib/content.ts */}
      {noahWorks.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Selected work
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {noahWorks.map((work) => (
              <figure
                key={work.title}
                className="overflow-hidden rounded-2xl border border-line"
              >
                <div className="relative aspect-[4/5] bg-ink/5">
                  <Image
                    src={work.image}
                    alt={`${work.title} by Noah Marcus`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <span className="font-display text-lg font-semibold italic">
                    {work.title}
                  </span>
                  {work.year && (
                    <span className="text-muted">, {work.year}</span>
                  )}
                  {work.medium && (
                    <p className="text-sm text-muted">{work.medium}</p>
                  )}
                  {work.note && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">
                      {work.note}
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* NOAH THE ATHLETE */}
      <section className="mt-14 rounded-2xl border border-line bg-paper p-7 md:p-9">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          Noah the athlete
        </h2>
        <div className="mt-4 max-w-prose space-y-5 text-lg leading-relaxed text-ink/90">
          <p>
            Noah was the quintessential — and rare — artist-athlete. He joined
            the football team in high school even though, as a friend joked, he
            was &ldquo;a buck-fifty wet.&rdquo; He was determined to make the team
            and pushed himself to near collapse at practice. In college he became
            a serious weightlifter and transformed his naturally lean frame, then
            joined the rugby team — not before assuring his worried mom that the
            sport is &ldquo;safer than football.&rdquo;
          </p>
          <p>
            Days after tearing his pectoral in a match, Noah created three
            beautiful nude sketches with his off-hand. He loved the competition
            of sport, but even more, he loved his teammates.
          </p>
        </div>
      </section>

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
