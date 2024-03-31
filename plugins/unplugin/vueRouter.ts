import fs from "fs"
import path from "path"
import ViteRestart from "vite-plugin-restart"
import VueRouter from "unplugin-vue-router/vite"
import { getPascalCaseRouteName } from "unplugin-vue-router"
import { rootDir } from "."

const getLayouts = (layoutsDir = `${rootDir}/src/layouts`): string[] => fs
  .readdirSync(layoutsDir)
  .flatMap(file => {
    const filePath = path.join(layoutsDir, file)
    const stat = fs.statSync(filePath)

    return stat.isDirectory() ? getLayouts(filePath) : [file.replace(".vue", "")]
  })
  .sort()

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

  fs.writeFileSync(`${rootDir}/.vue/layouts.d.ts`, layoutsDts)
}

const unpluginVueRouter = () => {
  createLayoutDtsFile()

  return [
    ViteRestart({
      restart: ["src/layouts/default.vue"]
    }),
    VueRouter({
      dts: `${rootDir}/.vue/typed-router.d.ts`,
      getRouteName: routeNode => getPascalCaseRouteName(routeNode)
    })
  ]
}

export default unpluginVueRouter
