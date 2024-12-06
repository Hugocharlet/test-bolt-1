<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}

.dark {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>