import path from "path"
import AutoImport from "unplugin-auto-import/vite"

const unpluginAutoImport = () => (
  AutoImport({
    dts: path.resolve(__dirname, "types/auto-import.d.ts"),
    eslintrc: {
      enabled: true,
      filepath: path.resolve(__dirname, "eslint/.eslintrc-auto-import.json")
    },
    imports: [
      "vue",
      "vue-router",
      "pinia",
      {
        "@unhead/vue": ["useHead", "useSeoMeta"]
      }
    ]
  })
)

export default unpluginAutoImport
