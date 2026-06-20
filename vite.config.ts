import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "/oficina-mecanica-azul/",
  plugins: [vue()],
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      host: 'localhost',
      port: 5173
    }
  }
})
