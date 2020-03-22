<template>
  <div class="home">
    <Timer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Timer from '../components/Timer.vue';

export default {
  name: 'timer',
  components: {
    Timer,
  },
};
</script>
