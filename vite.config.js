// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/styles',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@data': '/src/data',
      '@assets': '/src/assets'
    }
  }
});