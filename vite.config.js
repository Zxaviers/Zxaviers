import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚡ Tidak perlu manual set postcss di sini
export default defineConfig({
  plugins: [react()],
})