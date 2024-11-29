import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)", // Primary accent color
        "secondary-accent": "var(--secondary-accent)", // Secondary accent color
      },
      fontFamily: {
        spaceGrotesk: `var(--font-space-grotesk)`,
        orbitron: `var(--font-orbitron)`,
      },
    },
  },
  plugins: [],
} satisfies Config;
