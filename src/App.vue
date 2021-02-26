<template>
  <div id="app">
    <Boxxer />
  </div>
</template>

<script>
import Boxxer from './components/Boxxer.vue'

export default {
  name: 'App',
  components: {
    Boxxer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
