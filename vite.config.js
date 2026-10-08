import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        showroom: resolve(import.meta.dirname, 'showroom.html'),
        collections: resolve(import.meta.dirname, 'collections/index.html'),
        lumera: resolve(import.meta.dirname, 'collections/lumera/index.html'),
        olivera: resolve(import.meta.dirname, 'collections/olivera/index.html'),
        roke: resolve(import.meta.dirname, 'collections/roke/index.html'),
        terra_speckle: resolve(import.meta.dirname, 'collections/terra-speckle/index.html'),
        urbane_grey: resolve(import.meta.dirname, 'collections/urbane-grey/index.html'),
        paradise_pink: resolve(import.meta.dirname, 'collections/paradise-pink/index.html'),
        aqua_blue: resolve(import.meta.dirname, 'collections/aqua-blue/index.html'),
        essential_white: resolve(import.meta.dirname, 'collections/essential-white/index.html'),
      }
    }
  }
});
