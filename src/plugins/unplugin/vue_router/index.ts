import path from "path"
import VueRouter from "unplugin-vue-router/vite"
import { getPascalCaseRouteName } from "unplugin-vue-router"
import ViteRestart from "vite-plugin-restart"

const unpluginVueRouter = () => ([
  ViteRestart({
    restart: ["src/layouts/default.vue"]
  }),
  VueRouter({
    dts: path.resolve(__dirname, "typed-router.d.ts"),
    getRouteName: (routeNode) => getPascalCaseRouteName(routeNode)
  })
]
)

export default unpluginVueRouter
