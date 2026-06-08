import type { Metadata } from "next";
import Image from "next/image";
import { cta, eyebrow } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Brand & Design — Noah Marcus Artists Fund",
  description: "Living style guide for the Noah Marcus Artists Fund.",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "paper", hex: "#FBFAF8", use: "Page background", light: true },
  { name: "ink", hex: "#1A1714", use: "Headlines · body text" },
  { name: "blue", hex: "#CDE0EE", use: "Light blue fills (from the wash)", light: true },
  { name: "blueDeep", hex: "#5B8FB0", use: "Links · deep accents · button fills" },
  { name: "rose", hex: "#D97A8E", use: "Accent (from the wash)" },
  { name: "roseDeep", hex: "#C76B7E", use: "Accent text · hover · eyebrows" },
  { name: "muted", hex: "#6B635A", use: "Secondary text" },
  { name: "line", hex: "#E7E2DB", use: "Borders · hairlines", light: true },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div className="hairline mb-8" />
      <h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function DesignPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <p className={eyebrow}>Brand &amp; Design</p>
      <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">
        The living style guide.
      </h1>
      <p className="mt-5 max-w-prose text-lg text-muted">
        Everything that keeps the Noah Marcus Artists Fund looking like itself —
        rendered from the real design tokens the site uses. If it changes in the
        code, it changes here.
      </p>

      {/* COLOR */}
      <Section title="Color">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {palette.map((c) => (
            <div
              key={c.name}
              className="overflow-hidden rounded-2xl border border-line"
            >
              <div
                className="h-24"
                style={{
                  backgroundColor: c.hex,
                  boxShadow: c.light ? "inset 0 0 0 1px #DED6C8" : undefined,
                }}
              />
              <div className="p-3">
                <div className="font-display font-semibold capitalize">
                  {c.name}
                </div>
                <div className="text-sm uppercase text-muted">{c.hex}</div>
                <div className="mt-1 text-xs leading-snug text-muted">
                  {c.use}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SIGNATURE MOTIF */}
      <Section title="Signature motif — the sunset sky">
        <p className="max-w-prose text-muted">
          A light-blue sky warming to pink, with wispy clouds glowing against the
          blue. It sits at the top of every page. Use it as the brand&rsquo;s
          atmosphere — never behind body copy at full strength.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="sky-sunset flex h-40 items-end rounded-2xl border border-line p-4">
            <span className="text-sm text-ink/70">.sky-sunset (home hero)</span>
          </div>
          <div className="relative h-40 overflow-hidden rounded-2xl border border-line">
            <div className="top-sky absolute inset-x-0 top-0 h-full" />
            <span className="absolute bottom-4 left-4 text-sm text-ink/70">
              .top-sky (every page header)
            </span>
          </div>
        </div>
      </Section>

      {/* TYPOGRAPHY */}
      <Section title="Typography">
        <div className="space-y-6">
          <div className="rounded-2xl border border-line p-6">
            <div className="text-xs uppercase tracking-widest text-muted">
              Display — Fraunces (serif)
            </div>
            <p className="mt-2 font-display text-5xl font-semibold">
              Explore color courageously
            </p>
          </div>
          <div className="rounded-2xl border border-line p-6">
            <div className="text-xs uppercase tracking-widest text-muted">
              Body — Hanken Grotesk (sans)
            </div>
            <p className="mt-2 max-w-prose text-lg leading-relaxed">
              The Noah Marcus Artists Fund provides grants to bold, emerging
              painters ages 18–25 in Washington, DC — funding them to create new
              work and show it together.
            </p>
          </div>
          <div className="rounded-2xl border border-line p-6">
            <div className="text-xs uppercase tracking-widest text-muted">
              Eyebrow label
            </div>
            <p className={`mt-2 ${eyebrow}`}>Washington, DC</p>
          </div>
        </div>
      </Section>

      {/* BUTTONS */}
      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <span className={cta.primary}>Primary (blue → pink)</span>
          <span className={cta.secondary}>Secondary (outline)</span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-2xl bg-blueDeep p-6">
          <span className={cta.onDark}>On dark (paper)</span>
          <span className="text-sm text-paper/80">
            Used on deep-blue / colored panels.
          </span>
        </div>
      </Section>

      {/* LOGO */}
      <Section title="Logo &amp; wordmark">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-line bg-paper p-8">
            <span className="font-display text-2xl font-semibold">
              Noah Marcus<span className="text-roseDeep">.</span>
            </span>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-line bg-paper p-8">
            <Image
              src="/logo.png"
              alt="The Noah Marcus Artist Fund wordmark"
              width={1000}
              height={78}
              className="h-auto w-full max-w-xs"
            />
          </div>
        </div>
      </Section>

      {/* COMPONENTS */}
      <Section title="Components">
        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-line">
            <div className="relative aspect-[4/5]">
              <Image
                src="/noah-art/untitled-2.jpeg"
                alt="Painting by Noah Marcus"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-4 text-sm text-muted">
              Framed painting card (rounded-3xl on pages)
            </figcaption>
          </figure>
          <div className="rounded-2xl border border-line p-6">
            <div className="flex gap-4">
              <div className="h-14 w-14 shrink-0 rounded-full bg-line" />
              <div>
                <div className="font-display text-lg font-semibold">
                  Board member
                </div>
                <div className="text-sm text-roseDeep">Role / title</div>
                <p className="mt-2 text-sm text-muted">
                  Bio card pattern used on Our Purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
