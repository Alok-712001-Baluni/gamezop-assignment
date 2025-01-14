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
        customPurple: "#404380",
        lightPurple: "#8789c3",
        darkPurple: "#26284c",
        customYellow: "#ffcc5b",
        customBlue: "#3e51b5",
        lightBlue: "#34b1ff",
        primaryBlack: "#1e2333",
        secondaryBlack: "#151823",
        tertiaryBlack: "#222341",
        customGray: "#8f9598",
        lightGray: "#f0f1f9",
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
