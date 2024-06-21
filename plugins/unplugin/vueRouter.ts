import fs from "fs"
import path from "path"
import VueRouter from "unplugin-vue-router/vite"
import { getPascalCaseRouteName } from "unplugin-vue-router"

const rootDir = path.resolve(__dirname, "../..")

/**
 * returns an array of layout name with quotation marks
 * @example ['"default"']
 * */
const _getLayouts = (): string[] => fs
  .readdirSync(path.resolve(__dirname, "../../src/layouts"))
  .map(file => `"${file.replace(".vue", "")}"`)
  .sort()

const _createLayoutDtsFile = () => {
  const layoutsDts = [
    "/* eslint-disable */",
    "/* prettier-ignore */",
    "// @ts-nocheck",
    "",
    "import 'vue-router'",
    "",
    "declare module 'vue-router' {",
    "  interface RouteMeta {",
    `    layout?: ${_getLayouts().join(" | ")}`,
    "  }",
    "}"
  ].join("\n")

  fs.writeFileSync(`${rootDir}/.vue/layouts.d.ts`, layoutsDts)
}

const _watchLayouts = () => {
  fs.watch(`${rootDir}/src/layouts`, _createLayoutDtsFile)
}

export const unpluginVueRouter = () => {
  _createLayoutDtsFile()
  _watchLayouts()

  return VueRouter({
    dts: `${rootDir}/.vue/typed-router.d.ts`,
    getRouteName: routeNode => getPascalCaseRouteName(routeNode)
  })
}
