import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
      '/VanniAid-New/[...slug]': '/[...slug]',
    }
  });
