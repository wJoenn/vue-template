<template>
  <component :is="Layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
  const route = useRoute()

  let layoutName: string
  const Layout = shallowRef("div")

  watch(route, () => {
    if (!route.meta.layout) {
      Layout.value = "div"
      layoutName = ""
    } else if (route.meta.layout !== layoutName) {
      Layout.value = defineAsyncComponent(() => import(`./layouts/${route.meta.layout}.vue`))
      layoutName = route.meta.layout
    }
  }, { immediate: true })
</script>

<style lang="scss">
</style>
