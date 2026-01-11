// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      host: true,
      allowedHosts: ['.trycloudflare.com'],
    },
    plugins: [tailwindcss()],
  },
});
