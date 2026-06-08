import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { seo, featuredArtists, noahWorks, grant, site } from "@/lib/content";
import { eyebrow } from "@/lib/styles";
import DonateClient from "@/components/DonateClient";

export const metadata: Metadata = {
  title: seo.donate.title,
  description: seo.donate.description,
  openGraph: { title: seo.donate.title, description: seo.donate.description },
};

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={eyebrow}>Donate</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
            Empower the next bold voice.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            The Fund is built on seed funding from Noah&rsquo;s family, so every
            additional dollar raised goes directly to supporting painters in
            Washington, DC. The Fund is a registered 501(c)(3), so your donation
            may be tax-deductible.
          </p>
          <p className="mt-4 text-muted">
            New here?{" "}
            <Link
              href="/our-story"
              className="font-medium text-roseDeep underline decoration-2 underline-offset-4 hover:text-ink transition-colors"
            >
              Read Noah&rsquo;s story
            </Link>{" "}
            to see the &ldquo;why&rdquo; behind the Fund.
          </p>
          {site.ein && (
            <p className="mt-4 text-sm text-muted">EIN: {site.ein}</p>
          )}
        </div>

        {noahWorks.length > 2 && (
          <figure className="mx-auto w-full max-w-sm lg:order-last">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-xl shadow-ink/10">
              <Image
                src={noahWorks[2].image}
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

      <DonateClient />

      {/* WHERE YOUR GIFT GOES */}
      <section className="mt-20">
        <div className="hairline mb-12" />
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Where your gift goes
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/90">
          {grant.model}
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Grant amount", v: grant.amountDisplay },
            { t: "Painters funded / year", v: grant.perYear },
            { t: "Commission taken", v: grant.commission },
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-line bg-blue/30 p-6 text-center"
            >
              <dt className="text-xs uppercase tracking-widest text-muted">
                {s.t}
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* THE ARTISTS YOU'RE SUPPORTING — renders only once there are recipients */}
      {featuredArtists.length > 0 && (
        <section className="mt-20">
          <div className="hairline mb-12" />
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            The artists you&rsquo;re supporting
          </h2>
          <p className="mt-3 max-w-prose text-muted">
            Your gift goes directly to emerging Washington, DC painters like
            these — bold voices taking a daring approach to their work.
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
