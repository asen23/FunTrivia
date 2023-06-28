import flowbite from "flowbite/plugin";
import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

export default {
  content: ["src/**/*.tsx", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
    createThemes({
      light: {
        primary: "#5CD1FF",
        "primary-content": "#000",
        secondary: "darkblue",
        "base-100": "#fff",
        "base-200": "#fff",
        "base-content": "#000",
        neutral: "#333",
      },
      dark: {
        primary: "#006992",
        "primary-content": "#fff",
        secondary: "darkblue",
        background: "#001D4A",
        "base-100": "#001D4A",
        "base-200": "#27476E",
        "base-content": "#fff",
        neutral: "#666",
      },
    }),
  ],
  daisyui: {
    themes: ["light", "night"],
  },
} satisfies Config;
