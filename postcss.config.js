import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
import purgecss from "@fullhuman/postcss-purgecss"

export default {
  plugins: [
    autoprefixer,
    tailwindcss,
    purgecss({
      content: ["./src/**/*.vue", "./index.html"],
      safelist: [/^a$/]
    })
  ]
}
