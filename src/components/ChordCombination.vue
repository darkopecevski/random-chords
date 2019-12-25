<template>
  <div class="random-chords">
    <h1>Chord Combination</h1>
    <ul class="chordHolder">
      <li v-for="chord in chords"
        v-bind:key="chord"
        @click="activeChord = chord"
        class="randomChord"
        :class="{active: chord === activeChord}">
        {{chord}}
      </li>
    </ul>
    <hr />
    <div v-for="chord in chords" v-bind:key="chord.toString()" class="chordHolder">
      <template v-if="chord != activeChord">
        <span class="randomChord active">{{activeChord}}</span><br>
        <span class="randomChord">{{chord}}</span>
      </template>
    </div>
    <hr />
  </div>
</template>

<script>
import { allChords } from '../const/chords';

export default {
  name: 'ChordCombination',
  data() {
    return {
      chords: allChords,
      activeChord: allChords[0],
    };
  },
  computed: {
    mappedChords() {
      return this.chords.map(x => this.chords.map((y) => {
        if (x !== y) {
          return [x, y];
        }
        return undefined;
      }).filter(z => z !== undefined));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr {
  margin: 5px 40px 20px 40px;
  border: 1px solid #f6b93b;
}
.randomChord {
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
  font-weight: bold;
  min-width: 50px;
  float:left;
}
li.randomChord {
  cursor: pointer;
}
.randomChord.active {
  border: 1px solid #f6b93b;
  color: #f6b93b;
}
.chordHolder {
  display: inline-block;
  margin: 0px 10px 0px 10px;
}
button:focus {outline:0;}
</style>
