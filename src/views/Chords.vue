<template>
  <div class="home">
    <h1>Chords</h1>
    <div class="headerHolder">
      <div class="toggleHolder">
        <h3 class="h3hr">Major Chords</h3>
        <a class="toggle" href="javascript:" @click="toggleMajorChords = !toggleMajorChords">
          <span v-if="!toggleMajorChords">-</span>
          <span v-if="toggleMajorChords">+</span></a>
        <hr>
      </div>
      <div class="chordsWrapper" v-if="!toggleMajorChords">
        <Chord chord="D"/>
        <Chord chord="A"/>
        <Chord chord="G"/>
        <Chord chord="C"/>
        <Chord chord="F"/>
        <Chord chord="E"/>
      </div>
    </div>
    <div class="headerHolder">
      <div class="toggleHolder">
        <h3 class="h3hr">Minor Chords</h3>
        <a class="toggle" href="javascript:" @click="toggleMinorChords = !toggleMinorChords">
          <span v-if="!toggleMinorChords">-</span>
          <span v-if="toggleMinorChords">+</span></a>
        <hr>
      </div>
      <div class="chordsWrapper" v-if="!toggleMinorChords">
        <Chord chord="Dm"/>
        <Chord chord="Am"/>
        <Chord chord="Em"/>
      </div>
    </div>
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
  data() {
    return {
      toggleMajorChords: false,
      toggleMinorChords: false,
    };
  },
};
</script>
<style scoped>
.toggleHolder {
  text-align: left;
}
hr {
  margin: 5px 5px 20px 5px;
  border: 1px solid #f6b93b;
}
.h3hr {
  color: #f6b93b;
  text-align: left;
  margin-top: 15px;
  margin-left: 15px;
  border: 0px solid red;
  display: inline-block;
}
.chordsWrapper {
  margin: 5px 5px 0px 5px;
}
.toggle {
  font-size: 2em;
  text-align: right;
  text-decoration: none;
  color: #f6b93b;
  margin-left: 20px;
}
.headerHolder {
  display: flow-root;
  padding: 0px 15px;
}
</style>
