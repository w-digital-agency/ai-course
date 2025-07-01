import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://w-digital-agency.github.io',
  base: '/wdigital-astro',
  integrations: [tailwind()],
});

