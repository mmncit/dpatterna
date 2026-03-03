import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: process.env.PUBLIC_URL || '/',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      'patterns': path.resolve(__dirname, './src/patterns'),
      'utils': path.resolve(__dirname, './src/utils'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte', 'page'],
          d3: ['d3', 'd3-scale'],
          three: ['three'],
        },
      },
    },
  },
  server: {
    port: 9000,
    open: true,
  },
  preview: {
    port: 9000,
  },
  appType: 'spa', // This enables SPA mode with history fallback
  define: {
    'process.env.IMG_PATH': JSON.stringify(
      process.env.NODE_ENV === 'production'
        ? 'https://mmncit.github.io/dpatterna/images'
        : '/images'
    ),
  },
});
