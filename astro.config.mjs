import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://chjungdus.github.io',
  base: '/Eco-Limpiezas-El-Valle',
});
