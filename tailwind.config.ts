import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#faf7ef",
          100: "#efe9da",
          200: "#d8c8a6",
          300: "#b9a676",
          700: "#5b4f32",
          900: "#2b281f",
        },
        forest: {
          100: "#dce9df",
          600: "#557a5c",
          700: "#3f6149",
          800: "#294737",
          900: "#193425",
        },
        moss: {
          100: "#e1eadc",
          200: "#c6d5c0",
          600: "#6d846d",
        },
        slate: {
          700: "#3b4742",
          800: "#2a3732",
          900: "#18231f",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(36, 55, 45, 0.13)",
        warm: "0 18px 45px rgba(56, 80, 61, 0.18)",
        layer: "0 14px 45px rgba(46, 63, 55, 0.09)",
        "inner-soft": "inset 0 1px 0 rgba(255,255,255,0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
