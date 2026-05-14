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
          50: "#f7f5ef",
          100: "#ebe6d8",
          200: "#d5c9ab",
          300: "#b9a676",
          700: "#5b4f32",
          900: "#2b281f",
        },
        forest: {
          100: "#dce9df",
          600: "#476b50",
          700: "#34523e",
          900: "#193425",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(25, 52, 37, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
