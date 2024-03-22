// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          "code-blue": "#2B6CB0",
          "code-indigo": "#4C51BF",
          "code-purple": "#6B46C1",
          "code-pink": "#B83280",
          "code-green": "#2F855A",
          "code-red": "#C53030",
        },
        primary: {
          500: "#4a56e2",
          700: "#4048cc", // Darken the primary color for hover state
        },
        secondary: "#10b981",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
