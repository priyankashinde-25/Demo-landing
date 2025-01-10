import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-text-color": "#323232",
        "primary-text-color-70": "rgba(50, 50, 50, 0.7)",
        "secondary-bg-color": "#F6F6F6",
        "tertiary-bg-color": "#F6F8FF",
      },
      lineHeight: {
        86: "5.375rem", // 86px = 5.375rem
      },
      spacing: {
        "0.875": "0.875rem", // 14px
      },
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
      },
      fontSize: {
        "40": "40px", // Add custom font size
        "32": "32px",
      },
      letterSpacing: {
        "22": "0.22em", // 22% letter-spacing
      },
    },
  },
  plugins: [],
} satisfies Config;
