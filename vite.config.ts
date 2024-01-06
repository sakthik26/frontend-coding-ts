import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteVitest } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});