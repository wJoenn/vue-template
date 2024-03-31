import type { RouteMeta } from "vue-router/auto"

const useLayout = () => {
  const route = useRoute()

  let layoutName: NonNullable<RouteMeta["layout"]> | "" | "default"

  const LayoutComponent = shallowRef<Component | "div">("div")

  watch(route, () => {
    const hasDefaultLayout = import.meta.env.VITE_HAS_DEFAULT_LAYOUT === "true"
    const useDefaultLayout = !route.meta.layout

    if (useDefaultLayout && !hasDefaultLayout) {
      layoutName = ""
      LayoutComponent.value = "div"
    } else if (useDefaultLayout) {
      layoutName = "default"
      LayoutComponent.value = defineAsyncComponent<Component>(() => import(`../../layouts/${layoutName}.vue`))
    } else if (route.meta.layout !== layoutName) {
      layoutName = route.meta.layout!
      LayoutComponent.value = defineAsyncComponent<Component>(() => import(`../../layouts/${layoutName}.vue`))
    }
  }, { immediate: true })

  return LayoutComponent
}

export default useLayout
