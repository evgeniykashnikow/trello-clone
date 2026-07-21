import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      overlay: false,
      typescript: true,
    }),
    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@trello/shared': path.resolve(__dirname, '../../packages/shared/src'),
    },
  },
  server: {
    strictPort: true,
    port: 5173,
    hmr: { clientPort: 5173 },
    fs: {
      allow: [path.resolve(__dirname, '../..')],
    },
  },
});
