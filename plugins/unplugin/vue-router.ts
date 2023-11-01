import fs from "fs"
import path from "path"
import VueRouter from "unplugin-vue-router/vite"
import { getPascalCaseRouteName } from "unplugin-vue-router"
import ViteRestart from "vite-plugin-restart"

process.env.VITE_HAS_DEFAULT_LAYOUT = JSON.stringify(
  fs.existsSync(path.resolve(__dirname, "../../src/layouts/default.vue"))
)

const unpluginVueRouter = () => ([
  ViteRestart({
    restart: ["src/layouts/default.vue"]
  }),
  VueRouter({
    dts: path.resolve(__dirname, "types/typed-router.d.ts"),
    getRouteName: (routeNode) => getPascalCaseRouteName(routeNode)
  })
]
)

export default unpluginVueRouter
