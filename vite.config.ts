import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@shared/*': path.resolve(__dirname, './src/shared'),
      '@shared/validation': path.resolve(__dirname, './src/shared/validation'),
      '@shared/constants': path.resolve(__dirname, './src/shared/constants'),
      '@shared/api': path.resolve(__dirname, './src/shared/api'),
      '@shared/ui': path.resolve(__dirname, './src/shared/ui'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  }
});
