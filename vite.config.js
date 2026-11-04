import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static build -> outputs to /dist, which any free host (Cloudflare Pages,
// Netlify, GitHub Pages) can serve directly. No server runtime required.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    // Inline small assets and keep the bundle lean for great Lighthouse scores.
    assetsInlineLimit: 4096,
  },
});
