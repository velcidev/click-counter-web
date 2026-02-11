import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        contact: "contact.html",
        privacy: "privacy.html",
        terms: "terms.html",
      },
    },
  },
});