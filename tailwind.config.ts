import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "night"],
  },
} satisfies Config;
