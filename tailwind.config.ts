import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette grounded in Noah's hero wash (pink → lavender → light blue).
        // No coral — the accent (rose) is drawn from the wash so it harmonizes.
        paper: "#FBFAF8", // soft off-white (non-gradient sections)
        ink: "#1A1714", // near-black headlines / body
        blue: "#CDE0EE", // light blue (from the gradient's blue end)
        blueDeep: "#5B8FB0", // deeper blue for links / text-on-light / contrast
        rose: "#D97A8E", // ACCENT — harmonizes with the wash
        roseDeep: "#C76B7E", // deeper rose for hover / accessible accent text
        muted: "#6B635A", // warm-gray secondary text
        line: "#E7E2DB", // hairlines / borders
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.2, 0.65, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
