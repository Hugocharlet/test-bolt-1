<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  background: #2c3e50;
}

nav a {
  margin: 0 0.5rem;
  color: white;
}

nav a.router-link-active {
  color: #42b883;
}
</style>