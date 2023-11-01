/* eslint import/extensions: 0, import/no-unresolved: 0 */
import fs from "fs"
import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import UnheadVite from "@unhead/addons/vite"
import { unpluginAutoImport, unpluginVueComponents, unpluginVueRouter } from "./src/plugins/unplugin"

process.env.VITE_HAS_DEFAULT_LAYOUT = JSON.stringify(
  fs.existsSync(path.resolve(__dirname, "./src/layouts/default.vue"))
)

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/stylesheets/config/_variables.scss';"
      }
    }
  },
  plugins: [
    UnheadVite(),
    unpluginAutoImport(),
    unpluginVueComponents(),
    unpluginVueRouter(),
    vue()
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  }
})
