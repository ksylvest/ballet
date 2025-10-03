import { type Config } from "prettier";

const config: Config = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    "^node:(.*)$",
    "^react(.*)$",
    "^clsx$",
    "^vitest$",
    "^@tailwindcss(.*)$",
    "^@vitejs(.*)$",
    "^@storybook(.*)$",
    "^@fortawesome(.*)$",
    "^./support",
    "^./types",
    ".*",
  ],
};

export default config;
