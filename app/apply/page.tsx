import type { Metadata } from "next";
import { seo, application } from "@/lib/content";

export const metadata: Metadata = {
  title: seo.apply.title,
  description: seo.apply.description,
  openGraph: { title: seo.apply.title, description: seo.apply.description },
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
        Apply
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
        Tell us about your work.
      </h1>
      <div className="mt-6 max-w-prose space-y-5 text-lg leading-relaxed text-ink/90">
        <p>
          If you&rsquo;re a budding artist in the DMV area with a bold creative
          vision, we invite you to apply to the Noah Marcus Artists Fund. Your
          application helps us get to know you and your work — and it&rsquo;s the
          first step toward receiving funding to support your artistic journey.
        </p>
      </div>

      {application.mode === "google-form" ? (
        <div className="mt-10">
          <a
            href={application.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-coral px-8 py-3.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
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
        <div className="mt-10 rounded-2xl border border-dashed border-line p-8 text-muted">
          Native application form coming soon.
        </div>
      )}
    </div>
  );
}
