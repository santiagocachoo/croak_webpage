import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/croak_webpage/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // El visor 3D (model-viewer + three.js, ~1 MB) es un chunk aparte que solo se descarga
    // cuando alguien toca "Explorar en 3D"; no afecta la carga inicial.
    chunkSizeWarningLimit: 1200,
  },
})
