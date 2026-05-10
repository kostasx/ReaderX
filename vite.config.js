import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/app.js'),
      name: 'ReaderX', // The global variable name for UMD builds
      fileName: 'app',
      // Explicitly define formats if you want to avoid defaults
      formats: ['es', 'umd']
    },
    // No need for rollupOptions.external if you have no dependencies
  },
});