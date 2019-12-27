<template>
  <div class="chordHolder">
    <h3 class="chordname">{{chord}}</h3>
    <div class="playChords">
      <button
        @click.prevent="playSound(require(`../assets/audio/chord-${chord}.mp3`))">
        play
      </button>
    </div>
    <div class="diagram-wrap">
      <div class="diagram">
        <div class="row"
          v-for="(config, i) in activeChord"
          v-bind:key="config.label+i" :class="{first: i === 0, last: i === 5}">
            <div class="cell label"><div class="note stringname">{{config.label}}</div></div>
            <div class="cell label">
              <div class="note openstring" v-if="config.openString">{{config.openString}}</div>
            </div>
            <div class="cell fret"
              v-for="(fret, index) in config.frets"
              v-bind:key="chord+config.label+i+index">
              <div class="blue note" v-if="fret">{{fret}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { chordConfiguration } from '../const/chords';

export default {
  name: 'Chord',
  props: ['chord'],
  data() {
    return {
      activeChord: chordConfiguration[this.chord],
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    playSound(sound) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

.page {
  padding: 30px;
}
.chordHolder {
  float: left;
  border: 1px solid #444444;
  padding: 0px 0px 20px 0px;
  margin: 10px;
}

.chordname {
  font-size: 3rem;
  margin: 10px 0 15px;
  font-weight: bold;
  text-align: center;
  position: relative;
  color: #f6b93b;
}

.diagram-wrap {
  float: left;
  padding: 20px;
}

.diagram .row {
  clear: both;
}
.diagram .row.first .fret {
  border-top: 1px solid #222;
}
.diagram .row.last .fret {
  border: 0;
}
.diagram .cell {
  float: left;
  position: relative;
  width: 70px;
  height: 26px;
}
.diagram .cell.fret {
  border: 1px solid #222;
  border-top: 0;
}
.diagram .cell.fret:not(:last-of-type) {
  border-right: 0;
}
.diagram .cell.label {
  width: 20px;
}
.diagram .cell .note {
  position: absolute;
  z-index: 2;
  width: 26px;
  height: 26px;
  left: 50%;
  margin-left: -13px;
  margin-top: -13px;
  color: #fff;
  background: #f6b93b;
  text-align: center;
  border-radius: 50%;
  padding-top: 2px;
}
.diagram .cell .note.stringname, .diagram .cell .note.openstring {
  background: none;
  color: #222;
}
.diagram .cell .note.stringname {
  color: #666;
}
.diagram .cell .note.openstring {
  font-weight: bold;
}
.playChords button {
  color: #444444 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 5px;
  border: 2px solid #444444 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  font-size:0.9em;
  font-weight:bold;
  margin-bottom: 20px;
}
.playChords button:hover {
  color: #ffffff !important;
  background: #444444;
  border-color: #444444 !important;
  transition: all 0.4s ease 0s;
  cursor: pointer;
}

/* .diagram-wrap {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
} */

button:focus {outline:0;}
</style>
