import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: () => "/welcome"
  },
  {
    path: "/welcome",
    name: "WelcomeHome",
    component: () => import("../views/WelcomeHome.vue")
  },
  {
    path: "/welcome/other",
    name: "WelcomeOther",
    component: () => import("../views/WelcomeOther.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
