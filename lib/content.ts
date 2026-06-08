// ============================================================================
//  SITE CONTENT & CONFIG  —  edit everything here, no design files needed.
//  Copy, SEO tags, donation links, and the launch banner all live in this one
//  file. Change text, save, commit, deploy.
// ============================================================================

export const site = {
  name: "Noah Marcus Artists Fund",
  url: "https://noahartistsfund.org", // update once domain is connected
  instagram: "https://instagram.com/noahmarcusartistfund",
  // ⚠️ CONFIRM before launch that this is the right public address.
  email: "noahmarcusartistsfund@gmail.com",
  // 501(c)(3) EIN. Leave null until the Fund provides it; it stays hidden while
  // null, then displays on the Donate page so donors can verify.
  ein: null as string | null,
  // Set to null to hide the banner. Edit text/href to change it.
  banner: {
    text: "The Noah Marcus Artists Fund is now accepting applications for our inaugural cohort.",
    cta: "Apply",
    href: "/apply",
  } as { text: string; cta: string; href: string } | null,
};

// --- Grant details (finalized) ----------------------------------------------
export const grant = {
  amountDisplay: "up to $5,000", // internal range $2,000–$5,000
  perYear: "3–4", // grants awarded each year
  deadline: "Fall 2026",
  commission: "0%", // the Fund takes no cut of exhibition sales
  // The model — this is the differentiator; feature it.
  model:
    "Grant winners are funded to create new work, then mount a group exhibition together. At the show, painters may sell their work and keep 100% of sales — the Fund takes no commission.",
  // Front-page spend examples (confirm/adjust categories with the Fund).
  funds: [
    "Paint, canvases, and materials to make new work",
    "Studio space to create in",
    "Framing and preparation for the exhibition",
  ],
};

// --- SEO: per-page title + meta description (straight from your copy doc) ---
export const seo = {
  home: {
    title: "Noah Marcus Artists Fund",
    description:
      "Inspired by Noah Marcus, we award grants to painters ages 18–25 in Washington, DC to create new work and show it together in a group exhibition.",
  },
  story: {
    title: "Noah's Story - Noah Marcus Artists Fund",
    description:
      "Discover the life of Noah Marcus and how his passion for painting inspired a fund supporting young painters in Washington, DC, created in his memory.",
  },
  purpose: {
    title: "Our Purpose - Noah Marcus Artists Fund",
    description:
      "Noah's passion for painting lives on. See how his legacy now fuels young painters in Washington, DC through grants and a shared group exhibition.",
  },
  donate: {
    title: "Donate - Noah Marcus Artists Fund",
    description:
      "Support the Noah Marcus Artists Fund and empower painters ages 18–25 in Washington, DC through grants that honor Noah's legacy and love of color.",
  },
  apply: {
    title: "Apply - Noah Marcus Artists Fund",
    description:
      "Painters ages 18–25 in Washington, DC: apply for a grant of up to $5,000 to create new work and exhibit it with the Noah Marcus Artists Fund.",
  },
  faq: {
    title: "FAQ - Noah Marcus Artists Fund",
    description:
      "Answers about the Noah Marcus Artists Fund — who can apply (painters 18–25 in Washington, DC), how grants and the group exhibition work, and how to give.",
  },
};

// --- Donation methods --------------------------------------------------------
// Stripe is the primary path (handled by /api/checkout). The others render as
// backup links. Paste real handles/links from your setup doc.
export const donation = {
  // Suggested one-tap amounts (USD) shown on the donate page.
  presetAmounts: [25, 50, 100, 250],
  backupLinks: [
    {
      label: "PayPal",
      // Replace with your paypal.me link, e.g. https://paypal.me/noahmarcusfund
      href: "https://www.paypal.com/qr-codes/download",
    },
    {
      label: "Venmo (@noahmarcusartistsfund)",
      href: "https://venmo.com/code?user_id=4384627925977048796&created=1753456516.862104&printed=1",
    },
    {
      label: "Cash App ($noahmartistsfund)",
      href: "https://cash.app/$noahmartistsfund",
    },
  ],
};

// --- Application -------------------------------------------------------------
// Stubbed: links out to your Google Form for now. Swap `mode` to "native"
// later when you want an on-site form.
export const application = {
  mode: "google-form" as "google-form" | "native",
  googleFormUrl: "https://forms.gle/qrdhX8Dnwz1qbVib6",
};

// --- Navigation --------------------------------------------------------------
export const nav = [
  { label: "Home", href: "/" },
  { label: "Noah's Story", href: "/our-story" },
  { label: "Our Purpose", href: "/our-purpose" },
  { label: "Donate", href: "/donate" },
  { label: "FAQ", href: "/faq" },
  { label: "Apply", href: "/apply" },
];

// --- Board members -----------------------------------------------------------
// Photos live in /public/board. NOTE: the Lisa vs. Annie photo mapping is a
// best guess pulled from the old site — verify and swap `photo` paths if needed.
export const board = [
  {
    name: "Lisa Terry",
    role: "Founder · Noah's mother",
    photo: "/board/lisa-terry.png",
    bio: "Noah's mother and a fourth-generation Washingtonian. A lawyer of more than 30 years, Lisa discovered her own love of painting through art history and now devotes her energy to sharing Noah's gifts and launching the careers of young artists.",
  },
  {
    name: "Sophia Marcus",
    role: "Board member · Noah's sister",
    photo: "/board/sophia-marcus.png",
    bio: "Noah's little sister and a fifth-generation native Washingtonian with a passion for equity, inclusivity, and justice. Sophia earned her B.A. in Economics and French & Francophone Studies from the College of William & Mary and is pursuing a master's in public policy at the University of Virginia. She helped share Noah's work with the world — including the sale of his first piece — and now serves Washington, DC's painting community in his honor.",
  },
  {
    name: "Josh Klugman",
    role: "Board member",
    photo: "/board/josh-klugman.png",
    bio: "One of Noah's close friends, Josh shared his passion for exploring music and art. A machine-learning data scientist at IBM, he carries forward Noah's spirit of helping people work toward what they're passionate about.",
  },
  {
    name: "Annie Acosta",
    role: "Board member",
    photo: "/board/annie-acosta.png",
    bio: "Annie brings over 25 years of experience in federal public policy, advocacy, and program evaluation across the public and nonprofit sectors. Born and raised in Puerto Rico, she has called DC home for most of her life.",
  },
];

// --- Featured artists --------------------------------------------------------
// Grant recipients to highlight. The Fund has not awarded any grants yet, so
// this is intentionally empty — sections that use it stay hidden until there
// are real supported artists to feature.
export const featuredArtists: {
  name: string;
  image: string;
  blurb: string;
}[] = [];

// --- Noah's own artwork ------------------------------------------------------
// TO FEATURE NOAH'S PAINTINGS: drop image files in /public/noah-art and add an
// entry below. Anything listed here renders in the gallery on Noah's Story (and
// the first item becomes the homepage hero image). Leave empty to hide it.
// e.g. { title: "Charlottesville Horror", year: "2018", image: "/noah-art/charlottesville-horror.jpg",
//        medium: "Oil on canvas", note: "A response to the white-supremacist violence in Charlottesville." }
export const noahWorks: {
  title: string;
  year?: string;
  image: string;
  width: number;
  height: number;
  medium?: string;
  note?: string;
}[] = [
  // Order matters: [0] is the homepage hero; page headers reference set indices.
  { title: "Untitled", image: "/noah-art/untitled-2.jpeg", width: 430, height: 640 }, // [0] blue abstract — home hero
  { title: "Untitled", image: "/noah-art/untitled-3.png", width: 514, height: 1584 }, // [1] blue seascape — donate
  { title: "Untitled", image: "/noah-art/untitled-1.jpeg", width: 640, height: 474 }, // [2] vibrant
  { title: "Untitled", image: "/noah-art/untitled-6.jpeg", width: 640, height: 479 }, // [3] figurative
  { title: "Untitled", image: "/noah-art/untitled-4.png", width: 508, height: 1586 }, // [4] teal/red — apply
  { title: "Untitled", image: "/noah-art/untitled-5.jpeg", width: 480, height: 637 }, // [5] warm pastel — our purpose
  {
    title: "Priest", // [6]
    image: "/noah-art/priest.jpeg",
    width: 481,
    height: 490,
    note: "One of Noah's pointed responses to social injustice — depicting child-abusing clergy as monsters.",
  },
];

// Photo of Noah himself, shown on Noah's Story.
export const noahPortrait = "/noah-art/noah-portrait.jpg";

// --- FAQ content (doc had none — these are editable starter answers) ---------
export const faqs = [
  {
    q: "Who is eligible to apply?",
    a: "Painters ages 18–25 based in Washington, DC. We especially encourage painters who take a bold, courageous approach to color and have something urgent to say through their work — like Noah.",
  },
  {
    q: "What does the grant fund?",
    a: "The grant funds painters to create new work for a group exhibition that the cohort of winners mounts together. It can go toward paint, canvases, and materials; studio space; and framing and preparation for the show.",
  },
  {
    q: "Can I sell my work — and does the Fund take a cut?",
    a: "Yes, you can sell your work at the group exhibition, and you keep 100% of your sales. The Fund takes no commission.",
  },
  {
    q: "How much is the grant, and how many are awarded?",
    a: "Grants are up to $5,000, with 3–4 awarded each year.",
  },
  {
    q: "How do I apply, and what happens next?",
    a: "Submit an application through the form on our Apply page. You'll receive confirmation that we've received it, and the Fund will follow up with you directly.",
  },
  {
    q: "When is the application deadline?",
    a: "The current application deadline is Fall 2026.",
  },
  {
    q: "Is the Fund a registered nonprofit?",
    a: "Yes. The Noah Marcus Artists Fund is a 501(c)(3) tax-exempt organization under the IRS tax code, so eligible donations may be tax-deductible.",
  },
];
