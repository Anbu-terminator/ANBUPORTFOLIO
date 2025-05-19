import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },
  build: {
    outDir: 'dist', // ✅ Set to 'dist' — Render expects this
    emptyOutDir: true, // ✅ Clean dist before build
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public/images'),
    },
  },
  base: './', // ✅ VERY important for proper relative asset paths
});
