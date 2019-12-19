<template>
  <div class="random-chords">
    <h1>Random Chords</h1>
    <h2>List of chrods</h2>
    <ul class="listOfChords">
      <li v-for="chord in chords" v-bind:key="chord">
        <p>{{chord}}</p>
        <button v-on:click="removeChord(chord)">X</button>
      </li>
      <li v-if="filteredChords.length > 0" class="selectChord">
        <div class="box">
          <select @change="addChords($event)" class="select-css">
            <option value="0">Add Chord</option>
            <option v-for="filteredChord in filteredChords"
                    v-bind:key="filteredChord+Math.random()"
                    :value="filteredChord">{{filteredChord}}</option>
          </select>
        </div>
      </li>
    </ul>
    <div class="randomChordsInput">
      <label for="nbrRandomChords"><strong>Set number of random chrods:</strong></label>
      <input id="nbrRandomChords"
             type="number"
             min="10"
             max="100"
             v-model="numberOfRandomChords"
             v-on:change="randomizeChords"/>
    </div>
    <button v-on:click="randomizeChords" class="example_d">
      <strong>Randomize Chords</strong>
    </button>
    <hr />
    <ul>
      <li class="randomChord" v-for="randomChord in randomChords"
          v-bind:key="randomChord+Math.random()">{{randomChord}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RandomChords',
  data() {
    return {
      numberOfRandomChords: 40,
      allChords: ['C-DUR', 'C-MOL', 'D-DUR', 'D-MOL', 'G-DUR', 'G-MOL', 'E-DUR', 'E-MOL', 'A-MOL', 'F-DUR', 'H'],
      chords: ['C-DUR', 'C-MOL', 'D-DUR', 'D-MOL', 'G-DUR', 'G-MOL'],
      randomChords: [],
      showFilteredChords: false,
    };
  },
  computed: {
    filteredChords() {
      const filteredChords = this.allChords.filter(x => !this.chords.includes(x));
      console.log(filteredChords);
      return filteredChords;
    },
  },
  methods: {
    randomizeChords() {
      this.randomChords = [];
      for (let i = 0; i < this.numberOfRandomChords; i += 1) {
        this.randomChords.push(this.chords[Math.floor(Math.random() * this.chords.length)]);
      }
    },
    removeChord(chord) {
      this.chords.splice(this.chords.indexOf(chord), 1);
      this.randomizeChords();
    },
    addChords(event) {
      if (event.target.value === 0) return;
      this.chords.push(event.target.value);
      this.showFilteredChords = !this.showFilteredChords;
      this.randomizeChords();
    },
  },
  created() {
    this.randomizeChords();
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
  margin: 40px 40px 20px 40px;
  border: 1px solid #f6b93b;
}
.randomChord {
  padding: 20px;
  border: 1px solid black;
  margin: 20px;
  font-weight: bold;
  min-width: 100px;
}
.example_d {
  color: #f6b93b !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 20px;
  border: 4px solid #f6b93b !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  font-size:1.2em;
}
.example_d:hover {
  color: #ffffff !important;
  background: #f6b93b;
  border-color: #f6b93b !important;
  transition: all 0.4s ease 0s;
  cursor: pointer;
}
.randomChordsInput {
  padding: 20px;
}
.randomChordsInput label {
  margin-right: 20px;
}
.randomChordsInput input {
  padding: 5px;
  border: 2px solid #f6b93b;
  font-size: 1em;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #2c3e50;
}
.listOfChords li {
  border: 1px solid #f6b93b;
  margin: 10px;
}
.listOfChords button {
  border: 0px;
  border-left: 1px solid #f6b93b;
  padding-top: 13px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 1em;
  color: #fff;
  background-color: #f6b93b;
  cursor: pointer;
}
.listOfChords li p {
  margin-top: 7px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
  display: inline-block;
}

.listOfChords li.selectChord {
  border: 0;
}

.box select {
  background-color: #f6b93b;
  color: white;
  padding: 12px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.box::before {
  content: "\f13a";
  font-family: FontAwesome;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
  padding: 30px;
}
button:focus {outline:0;}
</style>
