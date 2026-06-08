import type { Metadata } from "next";
import Image from "next/image";
import { seo, application, noahWorks, grant } from "@/lib/content";
import { cta, eyebrow } from "@/lib/styles";

export const metadata: Metadata = {
  title: seo.apply.title,
  description: seo.apply.description,
  openGraph: { title: seo.apply.title, description: seo.apply.description },
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={eyebrow}>Apply</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
            Tell us about your work.
          </h1>
          <div className="mt-6 max-w-prose space-y-5 text-lg leading-relaxed text-ink/90">
            <p>
              The Noah Marcus Artists Fund awards grants to painters to create
              new work and show it together in a group exhibition — where you can
              sell your work and keep 100% of sales.
            </p>
          </div>

          {/* Eligibility callout — hard criteria + the spirit */}
          <div className="mt-6 rounded-2xl border border-line bg-blue/30 p-6">
            <p className="font-display text-lg font-semibold">
              Open to painters ages 18–25 based in Washington, DC.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">
              This is for you if you&rsquo;re bold and outspoken, courageous with
              color, and have something urgent to say through your painting —
              like Noah.
            </p>
          </div>

          {application.mode === "google-form" ? (
            <div className="mt-8">
              <a
                href={application.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cta.primary}
              >
                Start your application &rarr;
              </a>
              <p className="mt-4 text-sm text-muted">
                Opens our application form in a new tab. You&rsquo;ll receive
                confirmation that we&rsquo;ve received it, and the Fund will
                follow up directly. Trouble with the button? Paste this link
                into your browser:{" "}
                <span className="break-all">{application.googleFormUrl}</span>
              </p>
            </div>
          ) : (
            // Native form placeholder — build out when application.mode === "native"
            <div className="mt-8 rounded-2xl border border-dashed border-line p-8 text-muted">
              Native application form coming soon.
            </div>
          )}
        </div>

        {noahWorks.length > 1 && (
          <figure className="mx-auto w-full max-w-sm lg:order-last">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-xl shadow-ink/10">
              <Image
                src={noahWorks[1].image}
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

      {/* ABOUT THE GRANT */}
      <section className="mt-20">
        <div className="hairline mb-12" />
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          About the grant
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/90">
          {grant.model}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-semibold">
              What the grant funds
            </h3>
            <ul className="mt-4 space-y-2 text-ink/90">
              {grant.funds.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roseDeep" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <dl className="grid grid-cols-3 gap-4 self-start rounded-2xl border border-line bg-blue/30 p-6 text-center">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">
                Amount
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold">
                {grant.amountDisplay}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">
                Per year
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold">
                {grant.perYear}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">
                Deadline
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold">
                {grant.deadline}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
