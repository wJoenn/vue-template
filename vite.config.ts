import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import UnheadVite from "@unhead/addons/vite"
// eslint-disable-next-line import/extensions, import/no-unresolved
import { unpluginAutoImport, unpluginVueComponents } from "./plugins/unplugin"

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/stylesheets/config/_variables.scss';"
      }
    }
  },
  plugins: [
    vue(),
    UnheadVite(),
    unpluginAutoImport(),
    unpluginVueComponents()
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  }
})
