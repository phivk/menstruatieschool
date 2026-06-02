import { defineConfig, passthroughImageService } from "astro/config";
import { fileURLToPath } from "node:url";
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
      alias: {
        // react-dom/server.browser uses MessageChannel which doesn't exist in Workers
        "react-dom/server": "react-dom/server.edge",
        // sharp is not available in the Workers runtime; passthroughImageService
        // ensures it is never actually invoked
        sharp: fileURLToPath(new URL("./src/_sharp-stub.mjs", import.meta.url)),
      },
    },
  },

  image: {
    service: passthroughImageService(),
  },

  adapter: cloudflare({
    platformProxy: { enabled: true, configPath: "wrangler.toml" },
  }),
});
