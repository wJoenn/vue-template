import fs from "fs"
import VueRouter from "unplugin-vue-router/vite"
import { getPascalCaseRouteName } from "unplugin-vue-router"
import { rootDir } from "."

const getLayouts = (layoutsDir = `${rootDir}/src/layouts`): string[] => fs
  .readdirSync(layoutsDir)
  .map(file => file.replace(".vue", ""))
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

const watchLayouts = () => {
  fs.watch(`${rootDir}/src/layouts`, () => {
    createLayoutDtsFile()
  })
}

const unpluginVueRouter = () => {
  createLayoutDtsFile()
  watchLayouts()

  return VueRouter({
    dts: `${rootDir}/.vue/typed-router.d.ts`,
    getRouteName: routeNode => getPascalCaseRouteName(routeNode)
  })
}

export default unpluginVueRouter
