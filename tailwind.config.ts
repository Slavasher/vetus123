import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0c111d",
        frost: "#e8eef7",
        accent: "#0f6ad4",
        gold: "#c8a34d"
      }
    }
  },
  plugins: []
};

export default config;
