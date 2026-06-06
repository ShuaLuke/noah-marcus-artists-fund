import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seo, noahWorks, noahPortrait } from "@/lib/content";
import { cta, eyebrow } from "@/lib/styles";

export const metadata: Metadata = {
  title: seo.story.title,
  description: seo.story.description,
  openGraph: { title: seo.story.title, description: seo.story.description },
};

export default function StoryPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className={eyebrow}>Noah&rsquo;s Story</p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
        A life lived in bold color.
      </h1>

      <figure className="mt-8 max-w-sm">
        <Image
          src={noahPortrait}
          alt="Noah Marcus"
          width={1170}
          height={1176}
          priority
          sizes="(min-width: 640px) 24rem, 100vw"
          className="h-auto w-full rounded-3xl border border-line"
        />
        <figcaption className="mt-3 text-sm text-muted">Noah Marcus</figcaption>
      </figure>

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
        <p>
          Noah was also the quintessential, and rare, artist-athlete. He played
          high-school football, became a serious weightlifter in college, and
          joined the rugby team — and just days after tearing a pectoral in a
          match, he created three beautiful nude sketches with his off-hand. He
          loved the competition of sport, but even more, he loved his teammates.
        </p>
      </div>

      {/* NOAH'S WORK — masonry so each painting shows at its true proportions */}
      {noahWorks.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Selected work
          </h2>
          <div className="mt-6 gap-5 [column-fill:_balance] sm:columns-2">
            {noahWorks.map((work) => (
              <figure
                key={work.image}
                className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-line"
              >
                <Image
                  src={work.image}
                  alt={`${work.title} by Noah Marcus`}
                  width={work.width}
                  height={work.height}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="p-4">
                  <span className="font-display text-lg font-semibold italic">
                    {work.title}
                  </span>
                  {work.year && <span className="text-muted">, {work.year}</span>}
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

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/our-purpose" className={cta.secondary}>
          Our purpose
        </Link>
        <Link href="/donate" className={cta.primary}>
          Support the Fund
        </Link>
      </div>
    </article>
  );
}
