import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A8F7B",      // ajuste depois conforme o Figma
        secondary: "#E6F0EC",
        background: "#F9FAF9",
        text: "#2E2E2E",
      },
    },
  },
  plugins: [],
};

export default config;
