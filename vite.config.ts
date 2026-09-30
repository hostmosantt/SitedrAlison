import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Otimização de chunks
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/gsap')) {
            return 'gsap-vendor'
          }
        },
      },
    },
    // Tamanho alvo para warning de chunk (em kB)
    chunkSizeWarningLimit: 500,
  },
})
