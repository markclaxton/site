import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
  },
  vite: {
    ssr: {
      noExternal: ['swiper'],
    }
  }
});
