import fs from "fs"
import path from "path"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import { unpluginAutoImport, unpluginVueComponents, unpluginVueRouter } from "./plugins/unplugin"

fs.mkdir(".vue", () => null)

export default defineConfig({
  plugins: [
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
