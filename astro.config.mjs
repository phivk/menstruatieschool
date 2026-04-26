import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  integrations: [preact({ include: ['**/src/**/*.{js,jsx,ts,tsx}'] }), react({ include: ['**/node_modules/@keystatic/**/*.{js,jsx,ts,tsx}'] }), markdoc(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  }
});