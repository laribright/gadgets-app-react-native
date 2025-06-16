
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createHtmlPlugin()],
  server: {
    host: true,
    port: 57361,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  }
});
