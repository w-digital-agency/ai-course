import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Use environment variable to determine deployment target
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://w-digital-agency.github.io' : 'https://www.wdigital.tech',
  base: isGitHubPages ? '/wdigital-astro' : '/',
  integrations: [tailwind()],
});

