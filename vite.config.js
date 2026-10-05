import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        showroom: resolve(import.meta.dirname, 'showroom.html')
      }
    }
  }
});

