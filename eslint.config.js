import fs from "fs"
import { vue } from "eslint-config-joenn"
import componentsConfig from "./.vue/eslint.components.config.js"

const autoImportGlobals = JSON.parse(fs.readFileSync("./.vue/.eslintrc-auto-import.json"))

export default [
  ...vue,
  componentsConfig,
  { languageOptions: autoImportGlobals },
  {
    files: ["**/*.ts"],
    ignores: ["src"],
    rules: {
      "import/extensions": "off"
    }
  }
]
