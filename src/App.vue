<template>
  <component :is="Layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
  const Layout = useLayout()
</script>
