// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://eric-cirillo.vercel.app",
  output: "static",
  adapter: vercel(),
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwind()],
  },
});
