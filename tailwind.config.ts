import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#FEFCFF",
        "primary-container": "#B85F0D",
        "primary-dark": "#8F4506",
        "cyan-soft": "#F9A137",
        cyan: "#E57F1B",
        "text-dark": "#6C3C11",
        "text-muted": "#8B6645",
        "section-light": "#FFF6EA",
        "surface-container-lowest": "#FEFCFF",
        "surface-container-low": "#FFF0DA",
        "blue-soft": "rgba(108, 60, 17, 0.12)",
        "border-overlay": "rgba(255, 255, 255, 0.12)"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        "hero-heading": ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        "section-heading": ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        "card-title": ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        "body-main": ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 50px rgba(108, 60, 17, 0.10)",
        soft: "0 10px 30px rgba(108, 60, 17, 0.08)"
      },
      borderRadius: {
        card: "16px",
        "card-lg": "24px"
      },
      screens: {
        xs: "420px"
      }
    }
  },
  plugins: []
};

export default config;
