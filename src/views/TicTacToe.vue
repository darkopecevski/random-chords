<template>
  <div class="home">
    <TicTacToe/>
  </div>
</template>

<script>
// @ is an alias to /src
import TicTacToe from '../components/TicTacToe.vue';

export default {
  name: 'tic-tac-toe',
  components: {
    TicTacToe,
  },
};
</script>
