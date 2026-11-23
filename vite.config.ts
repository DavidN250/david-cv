import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import seoPrerender from "./seo-prerender";

export default defineConfig({
  plugins: [tailwindcss(), react(), seoPrerender()],
  base: "/david-cv/",
});
