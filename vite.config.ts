import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      data: '/src/data',
      ui: '/src/components/ui',
      hooks: '/src/hooks',
      services: '/src/services',
      assets: '/src/assets',
      api: '/src/api'
    }
  }
})
