import type { PluginOption } from "vite"

import AutoImport from "unplugin-auto-import/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"
import { rootDir } from "."

const unpluginAutoImport = () => AutoImport({
  dirs: [`${rootDir}/src/stores`, `${rootDir}/src/utils`, `${rootDir}/plugins/vuenn`],
  dts: `${rootDir}/.vue/auto-import.d.ts`,
  eslintrc: {
    enabled: true,
    filepath: `${rootDir}/.vue/.eslintrc-auto-import.json`
  },
  imports: [
    "pinia",
    "vue",
    VueRouterAutoImports,
    {
      "@unhead/vue": ["useHead", "useSeoMeta"],
      "axios": [["default", "axios"]],
      "vue-router/auto": ["createRouter", "createWebHistory"]
    }
  ]
}) as PluginOption

export default unpluginAutoImport
