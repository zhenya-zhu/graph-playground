<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">CPU</RouterLink>
      <RouterLink to="/cpu-worker">Worker Threads</RouterLink>
      <RouterLink to="/gpu">GPU</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="stylus">
header{

  nav{
    display flex


  }

}
</style>
