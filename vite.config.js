import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/click-counter-web/",
  plugins: [tailwindcss()],
});
