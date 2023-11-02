import fs from "fs"
import path from "path"
import VueRouter from "unplugin-vue-router/vite"
import { getPascalCaseRouteName } from "unplugin-vue-router"
import ViteRestart from "vite-plugin-restart"

const getLayouts = (layoutsDir = path.resolve(__dirname, "../../../layouts")): string[] => (
  fs
    .readdirSync(path.resolve(__dirname, layoutsDir))
    .flatMap(file => {
      const filePath = path.join(layoutsDir, file)
      const stat = fs.statSync(filePath)

      return stat.isDirectory() ? getLayouts(filePath) : [file.replace(".vue", "")]
    })
    .sort()
)

const createLayoutDtsFile = () => {
  const layoutsDts = [
    "/* eslint-disable */",
    "/* prettier-ignore */",
    "// @ts-nocheck",
    "",
    "import 'vue-router'",
    "",
    "declare module 'vue-router' {",
    "  interface RouteMeta {",
    `    layout?: ${getLayouts().map(layout => `"${layout}"`).join(" | ")}`,
    "  }",
    "}"
  ].join("\n")

  fs.writeFileSync(path.resolve(__dirname, "layouts.d.ts"), layoutsDts)
}

const unpluginVueRouter = () => {
  createLayoutDtsFile()

  return [
    ViteRestart({
      restart: ["src/layouts/default.vue"]
    }),
    VueRouter({
      dts: path.resolve(__dirname, "typed-router.d.ts"),
      getRouteName: (routeNode) => getPascalCaseRouteName(routeNode)
    })
  ]
}

export default unpluginVueRouter
