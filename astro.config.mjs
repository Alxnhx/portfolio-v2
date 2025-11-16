
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://portfolio-v2-two-swart.vercel.app/',
  integrations: [tailwind(), mdx()],
});
