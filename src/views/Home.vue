<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/theme'

const { isDark, toggleTheme } = useTheme()
const welcomeMessage = ref('Welcome to Vue on GitHub Pages!')
</script>

<template>
  <main>
    <h1>{{ welcomeMessage }}</h1>
    <button @click="toggleTheme">
      Toggle {{ isDark ? 'Light' : 'Dark' }} Mode
    </button>
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
  text-align: center;
}
</style>