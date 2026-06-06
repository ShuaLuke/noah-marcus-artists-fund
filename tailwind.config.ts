import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F3EC",
        ink: "#1A1714",
        coral: "#E8543A",
        ochre: "#E0A43B",
        teal: "#2C6E6A",
        muted: "#6B635A",
        line: "#DED6C8",
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
