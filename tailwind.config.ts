import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": {
          50: "#1BCFF6",
          100: "#515DEF",
        },
        gray: {
          100: "#909090",
        },
      },
      fontSize: {
        lgh: ["1.125rem", { lineHeight: "2.5rem" }],
        "2xl": ["1.5rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.25rem", { lineHeight: "3.375rem" }],
        "6xl": ["3.75rem", { lineHeight: "5rem" }],
      },
    },
  },
  plugins: [],
};
export default config;
