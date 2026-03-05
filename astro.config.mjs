import { defineConfig } from 'astro/config';

const isProd = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  output: 'static',
  site: 'https://jonatanskogsfors.github.io',
  base: isProd ? '/en-svensk-kulturklassiker/' : '/',
});
