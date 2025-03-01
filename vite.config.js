import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add base URL configuration
  base: '/',
  // Specify build configuration
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    // Configure Terser
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
