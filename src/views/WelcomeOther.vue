<template>
  <div id="welcome">
    <Welcome />

    <section />
  </div>
</template>

<script setup lang="ts">
  import Welcome from "~/components/Welcome.vue"
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
    width: Min(1200px, 80%);

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

    @media screen and (min-width: 990px) {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
