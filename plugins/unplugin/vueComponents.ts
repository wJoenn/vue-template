import path from "path"
import Components from "unplugin-vue-components/vite"

export const unpluginVueComponents = () => Components({
  dirs: ["src/components"],
  dts: path.resolve(__dirname, "../../.vue/components.d.ts")
})
