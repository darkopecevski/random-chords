<template>
  <div class="home">
    <PowerConsumption/>
  </div>
</template>

<script>
// @ is an alias to /src
import PowerConsumption from '../components/PowerConsumption.vue';

export default {
  name: 'power-consumption',
  components: {
    PowerConsumption,
  },
};
</script>
