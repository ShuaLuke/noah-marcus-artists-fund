"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { donation } from "@/lib/content";

function StatusNotice() {
  const params = useSearchParams();
  const status = params.get("status");
  if (status === "success") {
    return (
      <div className="mb-8 rounded-2xl border border-teal bg-teal/10 px-6 py-4 text-teal">
        Thank you for your generosity — your donation directly supports artists
        in the DMV area.
      </div>
    );
  }
  if (status === "cancelled") {
    return (
      <div className="mb-8 rounded-2xl border border-line bg-paper px-6 py-4 text-muted">
        Your donation was cancelled. You can try again whenever you&rsquo;re
        ready.
      </div>
    );
  }
  return null;
}

export default function DonateClient() {
  const [amount, setAmount] = useState<number | "">(donation.presetAmounts[1]);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Keep preset + custom in sync
  useEffect(() => {
    if (custom !== "") setAmount(Number(custom) || "");
  }, [custom]);

  async function handleDonate() {
    setError(null);
    const value = custom !== "" ? Number(custom) : amount;
    if (!value || value < 1) {
      setError("Please choose or enter a valid amount.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: value }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(
          data.error ??
            "Card donations aren't available yet — please use a backup option below."
        );
        setLoading(false);
      }
    } catch {
      setError(
        "Something went wrong. Please try a backup option below."
      );
      setLoading(false);
    }
  }

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <Suspense fallback={null}>
        <div className="lg:col-span-2">
          <StatusNotice />
        </div>
      </Suspense>

      {/* Card / Stripe */}
      <div className="rounded-3xl border border-line bg-paper p-7 md:p-9">
        <h2 className="font-display text-2xl font-semibold">Give by card</h2>
        <p className="mt-2 text-sm text-muted">
          Secure checkout powered by Stripe.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {donation.presetAmounts.map((preset) => {
            const active = custom === "" && amount === preset;
            return (
              <button
                key={preset}
                onClick={() => {
                  setCustom("");
                  setAmount(preset);
                  setError(null);
                }}
                className={`rounded-xl border px-4 py-3 font-medium transition-colors ${
                  active
                    ? "border-coral bg-coral text-paper"
                    : "border-line hover:border-ink"
                }`}
              >
                ${preset}
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          <label className="block text-sm text-muted mb-1.5">
            Or enter a custom amount
          </label>
          <div className="flex items-center rounded-xl border border-line px-4 focus-within:border-ink">
            <span className="text-muted">$</span>
            <input
              type="number"
              min={1}
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                setError(null);
              }}
              placeholder="0"
              className="w-full bg-transparent py-3 pl-2 outline-none"
            />
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-coral">{error}</p>}

        <button
          onClick={handleDonate}
          disabled={loading}
          className="mt-6 w-full rounded-full bg-coral py-3.5 font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? "Redirecting…" : "Donate securely"}
        </button>
      </div>

      {/* Backup methods */}
      <div className="rounded-3xl bg-ink p-7 text-paper md:p-9">
        <h2 className="font-display text-2xl font-semibold">Other ways to give</h2>
        <p className="mt-2 text-sm text-paper/70">
          Prefer a different app? Use any of these.
        </p>
        <ul className="mt-6 space-y-3">
          {donation.backupLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-paper/20 px-5 py-4 transition-colors hover:border-coral hover:text-coral"
              >
                <span>{link.label}</span>
                <span aria-hidden>&rarr;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
