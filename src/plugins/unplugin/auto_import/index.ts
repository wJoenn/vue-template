import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"

const unpluginAutoImport = () => (
  AutoImport({
    dirs: [path.resolve(__dirname, "../../vuenn")],
    dts: path.resolve(__dirname, "auto-import.d.ts"),
    eslintrc: {
      enabled: true,
      filepath: path.resolve(__dirname, ".eslintrc-auto-import.json")
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
