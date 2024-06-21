import { vue } from "eslint-config-joenn"

export default [
  ...vue,
  {
    files: ["**/*.ts"],
    ignores: ["src"],
    rules: {
      "import/extensions": "off"
    }
  }
]
