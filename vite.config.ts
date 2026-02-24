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
  server: {
    strictPort: true,
    port: 5173,
    hmr: { clientPort: 5173 },
  },
});
