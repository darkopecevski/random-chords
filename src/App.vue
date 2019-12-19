<template>
  <div id="app">
    <RandomChords/>
  </div>
</template>

<script>
import RandomChords from './components/RandomChords.vue';

export default {
  name: 'app',
  components: {
    RandomChords,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
