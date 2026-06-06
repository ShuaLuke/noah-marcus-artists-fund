// ============================================================================
//  SITE CONTENT & CONFIG  —  edit everything here, no design files needed.
//  Copy, SEO tags, donation links, and the launch banner all live in this one
//  file. Change text, save, commit, deploy.
// ============================================================================

export const site = {
  name: "Noah Marcus Artists Fund",
  url: "https://noahartistsfund.org", // update once domain is connected
  instagram: "https://instagram.com/noahmarcusartistfund",
  // Set to null to hide the banner. Edit text/href to change it.
  banner: {
    text: "The Noah Marcus Artists Fund is now accepting applications for our inaugural cohort.",
    cta: "Apply",
    href: "/apply",
  } as { text: string; cta: string; href: string } | null,
};

// --- SEO: per-page title + meta description (straight from your copy doc) ---
export const seo = {
  home: {
    title: "Noah Marcus Artists Fund",
    description:
      "Inspired by Noah Marcus's life, we provide grants to help young artists in the DC, Maryland, and Virginia area pursue their passion and share their voices through creative work.",
  },
  story: {
    title: "Noah's Story - Noah Marcus Artists Fund",
    description:
      "Discover the life of Noah Marcus and how his artistic passion inspired a mission to support young artists in the DC, Maryland, and Virginia area through the fund created in his memory.",
  },
  purpose: {
    title: "Our Purpose - Noah Marcus Artists Fund",
    description:
      "Noah's passion for art lives on. Read his story and how his legacy now fuels the dreams of young artists across the DC, Maryland, and Virginia area through our grants program.",
  },
  donate: {
    title: "Donate - Noah Marcus Artists Fund",
    description:
      "Support the Noah Marcus Artists Fund and empower artists in the DC, Maryland, and Virginia area through grants that honor Noah's legacy and passion for creative expression.",
  },
  apply: {
    title: "Apply - Noah Marcus Artists Fund",
    description:
      "Calling young artists in the DC, Maryland, and Virginia area! Apply for a grant from the Noah Marcus Artists Fund to support your artistic journey and creative growth.",
  },
  faq: {
    title: "FAQ - Noah Marcus Artists Fund",
    description:
      "Answers to common questions about the Noah Marcus Artists Fund — who can apply, how grants work, and how to support artists in the DC, Maryland, and Virginia area.",
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
    bio: "Noah's little sister and a fifth-generation native Washingtonian with a passion for equity, inclusivity, and justice. Sophia earned her B.A. in Economics and French & Francophone Studies from the College of William & Mary and is pursuing a master's in public policy at the University of Virginia. She helped share Noah's work with the world — including the sale of his first piece — and now serves the DMV artist community in his honor.",
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
  medium?: string;
  note?: string;
}[] = [
  // Order matters: [0] is the homepage hero; banners reference specific indices.
  { title: "Untitled", image: "/noah-art/untitled-2.jpeg" }, // [0] blue abstract — home hero
  { title: "Untitled", image: "/noah-art/untitled-3.png" }, //  [1] blue seascape — donate banner
  { title: "Untitled", image: "/noah-art/untitled-1.jpeg" }, // [2] vibrant — our purpose banner
  { title: "Untitled", image: "/noah-art/untitled-6.jpeg" }, // [3] figurative
  { title: "Untitled", image: "/noah-art/untitled-4.png" }, //  [4] teal/red — apply banner
  { title: "Untitled", image: "/noah-art/untitled-5.jpeg" }, // [5] warm pastel
  {
    title: "Priest", // [6]
    image: "/noah-art/priest.jpeg",
    note: "One of Noah's pointed responses to social injustice — depicting child-abusing clergy as monsters.",
  },
];

// Photo of Noah himself, shown on Noah's Story.
export const noahPortrait = "/noah-art/noah-portrait.jpg";

// --- FAQ content (doc had none — these are editable starter answers) ---------
export const faqs = [
  {
    q: "Who is eligible to apply?",
    a: "Emerging artists based in the DC, Maryland, and Virginia (DMV) area. We especially encourage painters and visual artists who take a bold, courageous approach to color and have something to say through their work.",
  },
  {
    q: "What can the grant be used for?",
    a: "Grants are intended to help artists actualize their vision — materials, studio time, exhibition costs, or other expenses that directly support a creative project.",
  },
  {
    q: "How do I apply?",
    a: "Submit an application through the form on our Apply page. Your application helps us get to know you and your work, and it's the first step toward receiving funding.",
  },
  {
    q: "When is the application deadline?",
    a: "Please check the Apply page for current cycle dates. (Update this answer with your inaugural deadline before launch.)",
  },
  {
    q: "Is the Fund a registered nonprofit?",
    a: "Yes. The Noah Marcus Artists Fund is a 501(c)(3) tax-exempt organization under the IRS tax code, so eligible donations may be tax-deductible.",
  },
];
