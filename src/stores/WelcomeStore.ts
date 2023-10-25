import { computed, ref } from "vue"
import { defineStore } from "pinia"

const useWelcomeStore = defineStore("WelcomeStore", () => {
  const count = ref(0)
  const counter = computed(() => (count.value ? `Counter is: ${count.value}` : "Click me"))

  const increment = () => {
    count.value++
  }

  return { counter, increment }
})

export default useWelcomeStore
