import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// ⚡ Tidak perlu manual set postcss di sini
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 75 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      gif: { optimizationLevel: 3 },
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})