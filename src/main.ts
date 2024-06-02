import { routes } from "vue-router/auto-routes"
import App from "./App.vue"
import "./assets/stylesheets/index.css"

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(pinia).use(router).mount("#app")
