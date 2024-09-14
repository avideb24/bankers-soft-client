import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Specifies the output directory after building
  },
  server: {
    port: 3000,  // Optional: Customize the local dev server port
  },
  // For Single Page Apps (SPAs) with client-side routing
  resolve: {
    alias: {
      '@': '/src',  // Optional: Simplify imports with an alias
    }
  },
});
