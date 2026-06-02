import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [
    preact({ include: ["**/src/**/*.{js,jsx,ts,tsx}"] }),
    react({ include: ["**/node_modules/@keystatic/**/*.{js,jsx,ts,tsx}"] }),
    markdoc(),
    keystatic(),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // react-dom/server.browser uses MessageChannel (Node.js) which doesn't
      // exist in the Cloudflare Workers runtime. server.edge is safe on both.
      alias: { "react-dom/server": "react-dom/server.edge" },
    },
  },

  adapter: cloudflare({
    platformProxy: { enabled: true, configPath: "wrangler.toml" },
  }),
});
