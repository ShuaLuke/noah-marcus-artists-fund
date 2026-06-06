"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
            onClick={() => setOpen(false)}
          >
            Noah Marcus<span className="text-coral">.</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.map((item) => {
              const active = pathname === item.href;
              const isApply = item.label === "Apply";
              if (isApply) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-coral px-4 py-1.5 font-medium text-paper transition-transform hover:-translate-y-0.5"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-coral ${
                    active ? "text-coral" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-ink transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-ink transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base border-b border-line/60 last:border-0 ${
                  pathname === item.href ? "text-coral" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
