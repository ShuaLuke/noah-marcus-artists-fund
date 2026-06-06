import type { Metadata } from "next";
import { seo } from "@/lib/content";
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

      <DonateClient />
    </div>
  );
}
