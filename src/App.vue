<template>
  <div id="app">
    <Help/>
  </div>
</template>

<script>
import Help from './components/Help.vue'

export default {
  name: 'App',
  components: {
    Help
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
