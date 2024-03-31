import type { RouteMeta } from "vue-router/auto"

const useLayout = () => {
  const route = useRoute()

  let layoutName: NonNullable<RouteMeta["layout"]> | "" | "default"
  const LayoutComponent = shallowRef<Component | "div">("div")

  const _hasDefaultLayout = async () => {
    const defaultName = "default"

    try {
      await import(`../../src/layouts/${defaultName}.vue`)
      return true
    } catch {
      return false
    }
  }

  watch(route, async () => {
    const hasDefaultLayout = await _hasDefaultLayout()
    const useDefaultLayout = !route.meta.layout

    if (useDefaultLayout && !hasDefaultLayout) {
      layoutName = ""
      LayoutComponent.value = "div"
    } else if (useDefaultLayout) {
      layoutName = "default"
      LayoutComponent.value = defineAsyncComponent<Component>(() => import(`../../src/layouts/${layoutName}.vue`))
    } else if (route.meta.layout !== layoutName) {
      layoutName = route.meta.layout!
      LayoutComponent.value = defineAsyncComponent<Component>(() => import(`../../src/layouts/${layoutName}.vue`))
    }
  }, { immediate: true })

  return LayoutComponent
}

export default useLayout
