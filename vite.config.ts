import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src/renderer',
  build: {
    outDir: '../../build/renderer',
    emptyOutDir: true,
  },
  base: process.env.NODE_ENV === 'development' ? '/' : './',
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
  },
})
