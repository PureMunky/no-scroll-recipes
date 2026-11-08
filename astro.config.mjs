// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE_URL / BASE_PATH let the same code deploy to GitHub Pages now and a custom domain / GCP later.
//   GitHub Pages project site:  SITE_URL=https://puremunky.github.io  BASE_PATH=/no-scroll-recipes
//   Custom domain or GCP:       SITE_URL=https://yourdomain.com      BASE_PATH=/
const site = process.env.SITE_URL || "https://noscrollrecipes.net";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { format: "directory", inlineStylesheets: "never" },
});
