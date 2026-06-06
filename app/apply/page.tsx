import type { Metadata } from "next";
import Image from "next/image";
import { seo, application, noahWorks } from "@/lib/content";
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
              If you&rsquo;re a budding artist in the DMV area with a bold
              creative vision, we invite you to apply to the Noah Marcus Artists
              Fund. Your application helps us get to know you and your work — and
              it&rsquo;s the first step toward receiving funding to support your
              artistic journey.
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
                Opens our application form in a new tab. Trouble with the button?
                Paste this link into your browser:{" "}
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
    </div>
  );
}
