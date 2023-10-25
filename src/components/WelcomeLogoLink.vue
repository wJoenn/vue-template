<template>
  <a :href="tool.doc_url" target="_blank" class="logo">
    <img :src="`/images/${tool.name}.png`" :alt="`${tool.name} logo`">
  </a>
</template>

<script setup lang="ts">
  type Tool = {
    name: string
    doc_url: string
  }

  defineProps<{
    tool: Tool
  }>()
</script>

<style scoped lang="scss">
  .logo {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    height: 120px;
    justify-content: center;
    position: relative;

    &::before {
      background-image: linear-gradient(to bottom, #5b87b160, #41b88360);
      border-radius: 50%;
      bottom: 50%;
      content: "";
      display: block;
      filter: blur(2em);
      height: 60px;
      left: 50%;
      position: absolute;
      transition: all 0.3s ease;
      translate: -50% 50%;
      width: 60px;
      z-index: -10;
    }

    &:hover::before {
      height: 180px;
      width: 180px;
    }

    img {
      height: 100%;
    }
  }
</style>
