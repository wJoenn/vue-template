<template>
  <section id="tools">
    <ul>
      <li v-for="tool in tools" :key="tool.name" :class="tool.name">
        <WelcomeLogoLink :tool="tool" />

        <div>
          <h2>{{ tool.title }}</h2>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="tool.description" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  definePage({
    meta: {
      layout: "welcome"
    }
  })

  const tools = [
    {
      name: "sass",
      title: "Sass",
      doc_url: "https://sass-lang.com/",
      description: `A powerful CSS preprocessor that extends the capabilities of traditional CSS with features like
        variables, nesting, mixins, and more, making it easier to write and maintain complex stylesheets for web
        development projects.`
    },
    {
      name: "tailwindcss",
      title: "Tailwindcss",
      doc_url: "https://tailwindcss.com/",
      description: `A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that
       can be composed to build any design, directly in your markup. Tailwindcss' configuration can be fond in
       <code>tailwind.config.js</code>`
    },
    {
      name: "typescript",
      title: "TypeScript",
      doc_url: "https://www.typescriptlang.org/",
      description: `A strongly typed programming language that builds on JavaScript, giving you better tooling at any
      scale. TypeScript's configuration can be found in <code>tsconfig.json</code>`
    },
    {
      name: "pinia",
      title: "Pinia",
      doc_url: "https://pinia.vuejs.org/",
      description: `An extremly light and intuitive State Management library for Vue with a focus on type safety,
      extensibility and modularity.`
    },
    {
      name: "vite",
      title: "Vite",
      doc_url: "https://vitejs.dev/",
      description: `A lightning-fast JavaScript bundler and development server that leverages ES modules to achieve
      near-instantaneous development server startup and hot module replacement. Vite's configuration can be found in
      <code>vite.config.js</code>`
    }
  ]
</script>

<style scoped lang="scss">
  #tools {
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;

      li {
        align-items: center;
        display: flex;
        gap: 20px;

        &.pinia {
          h2 {
            color: #ffd34f ;
          }

          .logo::before {
            background-image: linear-gradient(to bottom, #64d67560, #ffd34f60);
          }
        }

        &.sass {
          h2 {
            color: #cd669a;
          }

          .logo::before {
            background-color: #cd669a60;
          }
        }

        &.tailwindcss {
          h2 {
            background: linear-gradient(to right, #15d0ec, #0d8aa0);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .logo::before {
            background-image: linear-gradient(to right, #15d0ec60, #0d8aa060);
          }
        }

        &.typescript {
          h2 {
            color: #3178c6;
          }

          &.logo::before {
            background-color: #3178c660;
          }
        }

        &.vite {
          h2 {
            background: linear-gradient(135deg, #82d7ff, #a741da);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .logo::before {
            background-image: linear-gradient(135deg, #43b3e660, #aa32e560);
          }
        }

        .logo {
          flex-shrink: 0;
          height: 60px;
          width: 60px;

          &::before {
            filter: blur(1em);
            height: 10px;
            width: 10px;
          }

          &:hover::before {
            height: 75px;
            width: 75px;
          }
        }
      }
    }
  }
</style>
