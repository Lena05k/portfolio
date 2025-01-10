import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
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
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        blink: 'blink 1s infinite',
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        blink: {
          '0%, 100%': { opacity: '0' }, // В начале и конце цикла — выключено
          '50%': { opacity: '1' }, // В середине цикла — включено
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    textAlign: true,
  },
} satisfies Config;
