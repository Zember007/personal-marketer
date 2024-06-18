import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://personal-marketer.ru/api",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        // i am ignorning my custom '<container>' tag
        isCustomElement: (tag) => ['container'].includes(tag)
      }
    },

  })]
})
