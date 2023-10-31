import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"

const unpluginAutoImport = () => (
  AutoImport({
    dts: path.resolve(__dirname, "types/auto-import.d.ts"),
    eslintrc: {
      enabled: true,
      filepath: path.resolve(__dirname, "eslint/.eslintrc-auto-import.json")
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
  })
)

export default unpluginAutoImport
