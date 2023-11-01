const useLayout = () => {
  const route = useRoute()

  let layoutName: string
  const LayoutComponent = shallowRef("div")

  watch(route, () => {
    if (!route.meta.layout && import.meta.env.VITE_HAS_DEFAULT_LAYOUT === "true") {
      const defaultLayout = "default"
      LayoutComponent.value = defineAsyncComponent(() => import(`~/layouts/${defaultLayout}.vue`))
      layoutName = "default"
    } else if (!route.meta.layout) {
      LayoutComponent.value = "div"
      layoutName = ""
    } else if (route.meta.layout !== layoutName) {
      LayoutComponent.value = defineAsyncComponent(() => import(`~/layouts/${route.meta.layout}.vue`))
      layoutName = route.meta.layout
    }
  }, { immediate: true })

  return LayoutComponent
}

export default useLayout
