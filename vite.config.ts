import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@svg': fileURLToPath(new URL('./src/assets/SvgIcons/', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/assets/Icons/', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/Images/', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,    
  },
})
