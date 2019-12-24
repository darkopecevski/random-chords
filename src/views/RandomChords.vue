<template>
  <div class="home">
    <RandomChords/>
  </div>
</template>

<script>
// @ is an alias to /src
import RandomChords from '../components/RandomChords.vue';

export default {
  name: 'random-chords',
  components: {
    RandomChords,
  },
};
</script>
