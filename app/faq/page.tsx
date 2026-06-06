import type { Metadata } from "next";
import Link from "next/link";
import { seo, faqs } from "@/lib/content";
import { cta } from "@/lib/styles";

export const metadata: Metadata = {
  title: seo.faq.title,
  description: seo.faq.description,
  openGraph: { title: seo.faq.title, description: seo.faq.description },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-coral">
        FAQ
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
        Questions, answered.
      </h1>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((item, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <span className="font-display text-xl font-medium">
                {item.q}
              </span>
              <span className="shrink-0 text-2xl text-coral transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-prose leading-relaxed text-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-paper border border-line p-8 text-center">
        <p className="text-muted">Still have a question?</p>
        <Link href="/apply" className={`mt-4 ${cta.primary}`}>
          Start an application
        </Link>
      </div>
    </div>
  );
}
