import Link from "next/link";
import { site } from "@/lib/content";

export default function Banner() {
  if (!site.banner) return null;
  return (
    <div className="bg-navy text-paper text-sm">
      <div className="mx-auto max-w-6xl px-5 py-2.5 flex items-center justify-center gap-3 text-center">
        <span className="opacity-90">{site.banner.text}</span>
        <Link
          href={site.banner.href}
          className="shrink-0 font-medium underline decoration-coral decoration-2 underline-offset-4 hover:text-coral transition-colors"
        >
          {site.banner.cta}
        </Link>
      </div>
    </div>
  );
}
