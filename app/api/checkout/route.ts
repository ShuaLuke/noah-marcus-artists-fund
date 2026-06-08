import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { site } from "@/lib/content";

// Set STRIPE_SECRET_KEY in your environment (.env.local locally, Vercel env in prod).
const stripeKey = process.env.STRIPE_SECRET_KEY;

export async function POST(req: NextRequest) {
  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeKey);

  try {
    const { amount } = await req.json();
    const dollars = Number(amount);

    if (!Number.isFinite(dollars) || dollars < 1) {
      return NextResponse.json(
        { error: "Please enter a valid donation amount." },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") ?? site.url;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation — Noah Marcus Artists Fund",
              description:
                "Supporting emerging painters in Washington, DC.",
            },
            unit_amount: Math.round(dollars * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/donate?status=success`,
      cancel_url: `${origin}/donate?status=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
