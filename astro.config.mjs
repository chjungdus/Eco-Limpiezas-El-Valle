import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://limpiezas-el-valle.es',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
