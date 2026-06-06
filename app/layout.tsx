import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { site, seo } from "@/lib/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.home.title,
  description: seo.home.description,
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    type: "website",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Banner />
        <Nav />
        <main className="relative isolate flex-1">
          {/* Site-wide sunset wash at the top of every page */}
          <div
            aria-hidden
            className="top-sky pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]"
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
