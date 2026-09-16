import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pangeransilaen.github.io',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
