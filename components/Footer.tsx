import Link from "next/link";
import { site, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="h-1 w-full bg-gradient-to-r from-blueDeep via-rose to-roseDeep" />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-xl font-semibold">
              Noah Marcus Artists Fund
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Celebrating and empowering emerging painters in Washington, DC.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Pages
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-roseDeep transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-roseDeep transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-roseDeep transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <p className="text-xs leading-relaxed text-muted">
          The Noah Marcus Artists Fund is a 501(c)(3) non-profit, tax-exempt
          organization under the IRS tax code. &copy;{" "}
          {new Date().getFullYear()} Noah Marcus Artists Fund.
        </p>
      </div>
    </footer>
  );
}
