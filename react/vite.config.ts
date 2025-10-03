import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";

import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ include: [resolve(__dirname, "src")] }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "@headlessui/react",
        "clsx",
        "react",
        "react-dom",
        "react/jsx-runtime",
      ],
    },
  },
  test: {
    environment: "jsdom",
  },
});
