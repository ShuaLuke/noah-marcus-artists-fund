import Link from "next/link";
import { site } from "@/lib/content";

export default function Banner() {
  if (!site.banner) return null;
  return (
    <div className="bg-blue text-ink text-sm">
      <div className="mx-auto max-w-6xl px-5 py-2.5 flex items-center justify-center gap-3 text-center">
        <span className="opacity-90">{site.banner.text}</span>
        <Link
          href={site.banner.href}
          className="shrink-0 font-semibold text-roseDeep underline decoration-roseDeep decoration-2 underline-offset-4 hover:text-ink transition-colors"
        >
          {site.banner.cta}
        </Link>
      </div>
    </div>
  );
}
