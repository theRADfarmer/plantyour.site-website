// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        'localhost',
        'devserver-dev--plantyoursite.netlify.app'
      ]
    }
  },
  integrations: [alpinejs()],
  site: 'https://plantyour.site',
});