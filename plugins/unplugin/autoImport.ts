import type { PluginOption } from "vite"

import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"

const rootDir = path.resolve(__dirname, "../..")

export const unpluginAutoImport = () => AutoImport({
  dirs: [`${rootDir}/src/stores`, `${rootDir}/src/utils`, `${rootDir}/plugins/vuenn`],
  dts: `${rootDir}/.vue/auto-import.d.ts`,
  imports: [
    "pinia",
    "vue",
    "@vueuse/core",
    VueRouterAutoImports,
    {
      "ofetch": [["ofetch", "$fetch"]],
      "vue-router/auto": ["createRouter", "createWebHistory"]
    }
  ]
}) as PluginOption
