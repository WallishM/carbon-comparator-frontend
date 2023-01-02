<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  .app{
    display: flex;
    flex-flow: column;
  }
</style>
