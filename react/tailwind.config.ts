import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./src/**/*.tailwind.css"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
