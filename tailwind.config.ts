import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bkg: "var(--color-bkg)",
        content: "var(--color-content)",
      },
      boxShadow: {
        "custom-light": "0 2px 13px rgba(0,0,0,0.095)",
        "custom-games-container": "0 12px 59px rgba(0,0,0,.04)",
      },
      screens: {
        sm: "600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
