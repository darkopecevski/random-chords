<template>
  <div class="home">
    <Chord chord="D"/>
    <Chord chord="A"/>
    <Chord chord="G"/>
    <Chord chord="C"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Chord from '../components/Chord.vue';

export default {
  name: 'chords',
  components: {
    Chord,
  },
};
</script>
