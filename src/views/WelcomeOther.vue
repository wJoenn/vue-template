<template>
  <div id="welcome">
    <Welcome />

    <section id="other-tools">
      <ul>
        <li v-for="tool in tools" :key="tool.name" :class="tool.name">
          <WelcomeLogoLink :tool="tool" />

          <h2>{{ tool.title }}</h2>
          <p>{{ tool.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
  const tools = [
    {
      name: "axios",
      title: "Axios",
      description: "A promise based HTTP client for the browser and node.js",
      doc_url: "https://axios-http.com/"
    },
    {
      name: "eslint",
      title: "esLint",
      description: "A configurable JavaScript linter to enforce code quality and best practices",
      doc_url: "https://eslint.org/"
    },
    {
      name: "pnpm",
      title: "Pnpm",
      description: "A fast, disk space efficient, node package manager",
      doc_url: "https://pnpm.io/"
    },
    {
      name: "postcss",
      title: "PostCSS",
      description: "A tool for transforming CSS with JavaScript",
      doc_url: "https://postcss.or"
    },
    {
      name: "unjs",
      title: "UnJS",
      description: "A robust ecosystem housing high-quality JavaScript utilities, libraries, and tools.",
      doc_url: "https://unjs.io/"
    },
    {
      name: "vue-router",
      title: "Vue Router",
      description: "An expressive, configurable and convenient routing library for Vue.js",
      doc_url: "https://router.vuejs.org/"
    }
  ]
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Ubuntu&display=swap');

  #welcome {
    align-items: center;
    display: grid;
    font-family: 'Roboto', sans-serif;
    gap: 50px;
    grid-template-columns: 1fr;
    margin: 0 auto;
    min-height: 100vh;
    padding: 50px 0;
    width: Min(1400px, 80%);

    code {
      background-color: #222222;
      border-radius: 5px;
      font-family: 'Ubuntu', sans-serif;
      padding: 0.25rem 0.5rem;
    }

    h2 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 20px;
      width: max-content;
    }

    span {
      font-family: 'Ubuntu', sans-serif;
    }

    #other-tools {
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        li {
          align-items: flex-start;
          border: 1px solid #222222;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;

          &.axios h2 {
            color: #5a29e4 ;
          }

          &.eslint h2 {
            color: #6464e2 ;
          }

          &.pnpm h2 {
            color: #f9ac00 ;
          }

          &.postcss h2 {
            color: #dd3a0a ;
          }

          &.unjs h2 {
            color: #f0db4f ;
          }

          &.vue-router h2 {
            color: #4fc08d ;
          }

          .logo {
            flex-shrink: 0;
            height: 60px;
            width: 60px;

            &::before {
              background-color: transparent;
              background-image: linear-gradient(transparent, transparent);
            }
          }
        }
      }
    }

    @media screen and (min-width: 990px) {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
