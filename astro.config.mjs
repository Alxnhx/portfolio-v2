
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // site: 'https://tu-url-en-vercel.app',
  integrations: [tailwind(), mdx()],
});
