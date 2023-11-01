import "vue-router"

import App from "./App.vue"
import "./assets/stylesheets/application.scss"

declare module "vue-router" {
  interface RouteMeta {
    layout?: string
  }
}

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory()
})

app
  .use(pinia)
  .use(router)
  .mount("#app")
