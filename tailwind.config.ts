import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#282c34",
        "bg-dark": "#21252b",
      },
    },
  },
  plugins: [],
} satisfies Config;
