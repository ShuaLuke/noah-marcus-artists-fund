import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { seo, board, featuredArtists, noahWorks } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.purpose.title,
  description: seo.purpose.description,
  openGraph: { title: seo.purpose.title, description: seo.purpose.description },
};

export default function PurposePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
            Our Purpose
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
            Noah&rsquo;s passion for art lives on.
          </h1>
          <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/90">
            <p>
              The Noah Marcus Artists Fund exists to celebrate, recognize, and
              empower outspoken, emerging artists within the DMV area by
              providing the financial assistance they need to actualize their
              visions.
            </p>
            <p>
              We seek out artists who not only have something to say, but take a
              daring approach in saying it — and who, like Noah, explore color
              courageously.
            </p>
          </div>
        </div>

        {noahWorks.length > 5 && (
          <figure className="mx-auto w-full max-w-sm lg:order-last">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-xl shadow-ink/10">
              <Image
                src={noahWorks[5].image}
                alt="Painting by Noah Marcus"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted">
              Painting by Noah Marcus
            </figcaption>
          </figure>
        )}
      </div>

      {/* FEATURED ARTWORK — renders only once there are grant recipients */}
      {featuredArtists.length > 0 && (
        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          {featuredArtists.map((art) => (
            <figure
              key={art.name}
              className="group relative overflow-hidden rounded-2xl border border-line bg-ink/5"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={art.image}
                  alt={`Artwork featuring ${art.name}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-paper">
                <span className="font-display text-lg font-semibold">
                  {art.name}
                </span>
                <p className="mt-1 text-sm text-paper/85">{art.blurb}</p>
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {/* MEET THE BOARD */}
      <section className="mt-20">
        <div className="hairline mb-12" />
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Meet the Board
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {board.map((member) => (
            <div
              key={member.name}
              className="flex gap-5 rounded-2xl border border-line p-6"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={88}
                height={88}
                className="h-20 w-20 flex-shrink-0 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-sm text-coral">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
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
