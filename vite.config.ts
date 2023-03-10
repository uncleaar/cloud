import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';

// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    },
    strictPort: true
  },

  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@app': path.resolve(__dirname, './src/app'),
      '@shared/*': path.resolve(__dirname, './src/shared'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
      '@shared/validation': path.resolve(__dirname, './src/shared/validation'),
      '@shared/constants': path.resolve(__dirname, './src/shared/constants'),
      '@shared/api': path.resolve(__dirname, './src/shared/api'),
      '@shared/services': path.resolve(__dirname, './src/shared/services'),
      '@shared/ui': path.resolve(__dirname, './src/shared/ui'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@context': path.resolve(__dirname, './src/context'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@middleware': path.resolve(__dirname, './src/middleware'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  }
});
