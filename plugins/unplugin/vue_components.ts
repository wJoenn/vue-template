import fs from "fs"
import path from "path"
import Components from "unplugin-vue-components/vite"

const unpluginVueComponents = () => {
  createEslintComponentsFile()

  return Components({
    dirs: ["src/components"],
    dts: path.resolve(__dirname, "types/components.d.ts")
  })
}

const createEslintComponentsFile = () => {
  const components = path.resolve(__dirname, "../../src/components")

  const eslintrc = {
    rules: {
      "vue/component-name-in-template-casing": ["error", "PascalCase", {
        globals: getComponents(components)
      }]
    }
  }

  const eslintrcJson = JSON.stringify(eslintrc, null, 2)
  fs.writeFileSync(`${__dirname}/eslint/.eslintrc-components.json`, eslintrcJson)
}

const getComponents = (pathName: string) => {
  let files: string[] = []

  fs.readdirSync(pathName).forEach(file => {
    const filePath = path.join(pathName, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      files = files.concat(getComponents(filePath))
    } else {
      files.push(file)
    }
  })

  return files.map(file => file.replace(".vue", "")).sort()
}

export default unpluginVueComponents
