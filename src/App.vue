<template>
  <component :is="Layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
  const Layout = useLayout()
</script>

<style lang="scss">
</style>
