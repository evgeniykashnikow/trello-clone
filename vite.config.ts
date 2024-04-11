import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tsconfigPaths(),
    eslint({
      fix: true,
      include: ['src/**/*.ts?(x)'],
    }),
    checker({
      overlay: false,
      typescript: true,
    })],
  server: {
    strictPort: true,
    port: 5173,
    hmr: { clientPort: 5173 },
  },
});
