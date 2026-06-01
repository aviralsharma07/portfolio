import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-secondary": "var(--bg-secondary)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        "text-faint": "var(--text-faint)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        border: "var(--border)",
        "code-bg": "var(--code-bg)",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Fira Code", "monospace"],
      },
      maxWidth: {
        prose: "720px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "720px",
            lineHeight: "1.75",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
