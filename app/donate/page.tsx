import type { Metadata } from "next";
import Image from "next/image";
import { seo, featuredArtists, noahWorks } from "@/lib/content";
import DonateClient from "@/components/DonateClient";

export const metadata: Metadata = {
  title: seo.donate.title,
  description: seo.donate.description,
  openGraph: { title: seo.donate.title, description: seo.donate.description },
};

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
          Donate
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
          Empower the next bold voice.
        </h1>
        <p className="mt-5 text-lg text-muted">
          Every gift directly funds grants for emerging artists in the DMV area,
          honoring Noah&rsquo;s legacy and passion for creative expression. The
          Fund is a registered 501(c)(3), so your donation may be tax-deductible.
        </p>
      </div>

      {noahWorks.length > 1 && (
        <figure className="mt-10 overflow-hidden rounded-3xl border border-line">
          <div className="relative aspect-[16/7]">
            <Image
              src={noahWorks[3].image}
              alt="Painting by Noah Marcus"
              fill
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 py-3 text-sm text-muted">
            Painting by Noah Marcus
          </figcaption>
        </figure>
      )}

      <DonateClient />

      {/* THE ARTISTS YOU'RE SUPPORTING — renders only once there are recipients */}
      {featuredArtists.length > 0 && (
        <section className="mt-20">
          <div className="hairline mb-12" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            The artists you&rsquo;re supporting
          </h2>
          <p className="mt-3 max-w-prose text-muted">
            Your gift goes directly to emerging DMV artists like these — bold
            voices taking a daring approach to their work.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {featuredArtists.map((art) => (
              <figure
                key={art.name}
                className="group overflow-hidden rounded-2xl border border-line"
              >
                <div className="relative aspect-[4/3] bg-ink/5">
                  <Image
                    src={art.image}
                    alt={`Artwork featuring ${art.name}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <span className="font-display text-lg font-semibold">
                    {art.name}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {art.blurb}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
