import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/stylesheets/config/_variables.scss';"
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  }
})
