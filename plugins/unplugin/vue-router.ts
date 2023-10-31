import path from "path"
import VueRouter from "unplugin-vue-router/vite"
import { getPascalCaseRouteName } from "unplugin-vue-router"

const unpluginVueRouter = () => (
  VueRouter({
    dts: path.resolve(__dirname, "types/typed-router.d.ts"),
    getRouteName: (routeNode) => getPascalCaseRouteName(routeNode)
  })
)

export default unpluginVueRouter
