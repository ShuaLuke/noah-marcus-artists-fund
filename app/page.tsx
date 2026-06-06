import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-20 pb-16 md:pt-28 md:pb-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="animate-rise text-sm font-medium uppercase tracking-[0.2em] text-coral">
              DC &middot; Maryland &middot; Virginia
            </p>
            <h1 className="animate-rise font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl mt-4">
              Celebrating artists
              <br />
              who explore color
              <br />
              <span className="text-coral">courageously.</span>
            </h1>
            <p className="animate-rise mt-7 max-w-xl text-lg text-muted">
              The Noah Marcus Artists Fund provides grants to bold, emerging
              artists in the DMV area — helping them actualize their vision and
              share their voices.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="rounded-full bg-ink px-7 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                Donate
              </Link>
              <Link
                href="/apply"
                className="rounded-full border border-ink px-7 py-3 font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                Apply for a grant
              </Link>
            </div>
          </div>

          {/* Featured artwork from the community the Fund supports */}
          <figure className="animate-rise relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-xl shadow-ink/10">
              <Image
                src="/art/adam-reid.jpeg"
                alt="Featured artwork by supported artist Adam Reid"
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted">
              Work by Adam Reid, a supported artist
            </figcaption>
          </figure>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 md:py-24 text-center">
          <blockquote className="font-display text-2xl font-medium leading-snug md:text-4xl">
            &ldquo;Art can be so turbulent at times for the creator. You never
            really know what will come over you, what will inspire you&hellip;
            suddenly you&rsquo;re just enthralled in an idea or some desperate
            need to speak.&rdquo;
          </blockquote>
          <cite className="mt-6 block not-italic text-coral">
            &mdash; Noah Marcus
          </cite>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Our mission
          </h2>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink/90">
            <p>
              The mission of the Noah Marcus Artists Fund is to celebrate,
              recognize, and empower outspoken, emerging artists within the
              D.C., Maryland, and Virginia (DMV) area by providing financial
              assistance that enables them to actualize their visions.
            </p>
            <p>
              With Noah&rsquo;s influence in mind, the Fund encourages artists
              who not only have something to say, but are taking a daring
              approach in saying it. Noah&rsquo;s uniquely bold use of color
              allowed him to express his beliefs, his convictions, and his
              truest self. In his memory, the Fund especially seeks to highlight
              those who explore color courageously.
            </p>
            <Link
              href="/our-purpose"
              className="inline-block font-medium text-coral underline decoration-2 underline-offset-4 hover:text-ink transition-colors"
            >
              Learn more about our purpose &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <figure className="order-2 md:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/art/yetunde-sapp.jpg"
                  alt="Artist Yetunde Sapp with her paintings"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                Yetunde Sapp, surrounded by her work.
              </figcaption>
            </figure>
            <div className="order-1 max-w-prose space-y-5 text-lg leading-relaxed text-ink/90 md:order-2">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Who we support
              </h2>
              <p>
                We believe art has the power to transform lives, inspire change,
                and bring people together. We are committed to supporting local
                painters who are pushing boundaries, challenging norms, and
                creating innovative, impactful work.
              </p>
              <Link
                href="/apply"
                className="inline-block font-medium text-coral underline decoration-2 underline-offset-4 hover:text-ink transition-colors"
              >
                Apply for a grant &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN OUR CAUSE */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-3xl bg-teal px-8 py-14 text-paper md:px-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold md:text-5xl max-w-2xl">
            Join our cause.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-paper/90">
            Your contribution — through gifts, purchases, or simply spreading
            the word — ensures Noah&rsquo;s legacy leaves a lasting impact on the
            lives and work of artists across the DMV area.
          </p>
          <Link
            href="/donate"
            className="mt-8 inline-block rounded-full bg-paper px-7 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Donate today
          </Link>
        </div>
      </section>
    </>
  );
}
