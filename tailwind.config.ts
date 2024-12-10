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
        primary: "#30E87A",
        "primary-light": "#EAFDF1",
      },
      animation: {
        "move-up-down": "move-up-down 8s infinite",
        "move-left-right": "move-left-right 8s infinite",
      },
      keyframes: {
        "move-up-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "move-left-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
