import fs from "fs"
import path from "path"
import Components from "unplugin-vue-components/vite"

const unpluginVueComponents = () => {
  createEslintComponentsFile()

  return Components({
    dirs: ["src/components"],
    dts: path.resolve(__dirname, "components.d.ts")
  })
}

const createEslintComponentsFile = () => {
  const componentsDir = path.resolve(__dirname, "../../../components")

  const eslintrc = {
    rules: {
      "vue/component-name-in-template-casing": ["error", "PascalCase", {
        globals: getComponents(componentsDir)
      }]
    }
  }

  const eslintrcJson = JSON.stringify(eslintrc, null, 2)
  fs.writeFileSync(path.resolve(__dirname, ".eslintrc-components.json"), eslintrcJson)
}

const getComponents = (componentsDir: string): string[] => (
  fs
    .readdirSync(componentsDir)
    .flatMap(file => {
      const filePath = path.join(componentsDir, file)
      const stat = fs.statSync(filePath)

      return stat.isDirectory() ? getComponents(filePath) : [file.replace(".vue", "")]
    })
    .sort()
)

export default unpluginVueComponents
