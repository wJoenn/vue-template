<template>
  <section id="vue">
    <nav>
      <router-link :to="{ name: 'Welcome' }" :class="{ active: !/other/.test(route.path)}">Main Tools</router-link>
      <router-link :to="{ name: 'WelcomeOthers' }" :class="{ active: /other/.test(route.path)}">Other Tools</router-link>
    </nav>

    <div class="content">
      <WelcomeLogoLink :tool="{ name: 'vue', doc_url: 'https://vuejs.org/' }" />

      <div>
        <h1>Welcome !</h1>
        <p>
          Let's get you started on a new project with <a href="https://vuejs.org/" target="_blank">Vue.js</a>,
          an open source, progressive, JavaScript Framework. You'll find all of your Vue files inside the
          <code>src</code> directory.
        </p>
      </div>
    </div>

    <button class="test" @click="increment">{{ counter }}</button>
  </section>
</template>

<script setup lang="ts">
  import useWelcomeStore from "~/stores/WelcomeStore.ts"

  const route = useRoute()
  const welcomeStore = useWelcomeStore()
  const { counter } = toRefs(welcomeStore)
  const { increment } = welcomeStore
</script>

<style scoped lang=scss>
$vue-green: #41b883;

#vue {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;

  h1 {
    color: $vue-green;
    font-family: 'Ubuntu', sans-serif;
    font-size: 50px;
    line-height: 50px;
  }

  nav {
    display: flex;
    gap: 20px;
    justify-content: center;

    a {
      color: #e3e3e380;
      transition: color 0.3s ease;

      &.active {
        color: $vue-green;
      }

      &:hover {
        color: #e3e3e3;
      }
    }
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      a {
        color: $vue-green;
        font-family: 'Ubuntu', sans-serif;
      }
    }
  }

  .test {
    align-self: center;
    border-radius: 10px;
    background-color: $vue-green;
    color: #181818;
    font-size: 20px;
    font-weight: 500;
    padding: 0.5rem 1rem;
    width: 150px;
  }

  @media screen and (min-width: 990px) {
  text-align: initial;

  .content {
    flex-direction: row;
  }
}
}
</style>
