

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import htmlPlugin from 'vite-plugin-html';

export default defineConfig({
  plugins: [react(), htmlPlugin()],
  server: {
    port: 57361,
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      external: ['@stripe/stripe-react-native']
    }
  },
});

