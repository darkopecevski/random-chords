<template>
  <div class="tic-tac-toe">
    <h1>Tic Tac Toe</h1>
    <div class="gameControls">
      <button @click="newGame">New Game</button><br>
      <button @click="playerStartsFirst = true" v-show="playVsComputer"
        v-bind:class="{active: playerStartsFirst}">Play with X</button>
      <button @click="playerStartsFirst = false" v-show="playVsComputer"
        v-bind:class="{active: !playerStartsFirst}">Play with 0</button>
      <div class="playerVsComputer">
        <input type="radio" id="one" v-bind:value="true" v-model="playVsComputer">
        <label for="one">Player vs Computer</label>
        <br>
        <input type="radio" id="two" v-bind:value="false" v-model="playVsComputer">
        <label for="two">Player vs Player</label>
      </div>
      <div class="results">
        <ul>
          <li>Wins:</li>
          <li>Player One: {{ playerOneWins }}</li>
          <li>Computer: {{ computerWins }}</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="gameHolder">
      <div v-for="f in ttt"
        v-bind:key="f"
        :id="f"
        v-bind:class="{active: isActive(f)}"
        @click="playMove(f)">
        <span v-if="isPlayed(`${f}-x`)">X</span>
        <span v-if="isPlayed(`${f}-0`)">0</span>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { ttt, winningCombinations } from '../const/tic-tac-toe';

export default {
  name: 'TicTacToe',
  data() {
    return {
      ttt,
      winningCombinations,
      played: [],
      currentPlayer: 'x',
      gameStarted: true,
      playerOne: [],
      playerTwo: [],
      isWinner: [],
      playVsComputer: true,
      playerOneWins: 0,
      computerWins: 0,
      playerStartsFirst: true,
    };
  },
  methods: {
    isPlayed(id) {
      return this.played.includes(id);
    },
    isActive(id) {
      if (this.isWinner.length > 0) {
        return this.isWinner.includes(id);
      }
      return false;
    },
    playMove(id) {
      // validation
      // check if game has started
      if (!this.gameStarted) {
        return;
      }
      if (this.playerOne.includes(id) || this.playerTwo.includes(id)) {
        return;
      }
      this.played.push(`${id}-${this.currentPlayer}`);
      if (this.currentPlayer === 'x') {
        this.playerOne.push(id);
        this.isWinner = this.checkWinner(this.playerOne);
      } else {
        this.playerTwo.push(id);
        this.isWinner = this.checkWinner(this.playerTwo);
      }
      // check if there is winner
      if (this.isWinner.length > 0) {
        this.gameStarted = false;
        if (this.currentPlayer === 'x') {
          this.playerOneWins += 1;
        } else {
          this.computerWins += 1;
        }
        return;
      }
      this.switchPlayer(this.currentPlayer);
      // check if all moves are exausted
      if (this.played.length === 9) {
        this.gameStarted = false;
      }
    },
    startGame() {
      this.gameStarted = true;
    },
    newGame() {
      this.played = [];
      this.playerOne = [];
      this.playerTwo = [];
      this.isWinner = [];
      this.currentPlayer = 'x';
      this.gameStarted = true;
      if (!this.playerStartsFirst && this.playVsComputer) {
        this.computerMove();
      }
    },
    switchPlayer(currentPlayer) {
      this.currentPlayer = currentPlayer === 'x' ? '0' : 'x';
      if ((this.currentPlayer === '0' && this.playerStartsFirst && this.playVsComputer)
        || (this.currentPlayer === 'x' && !this.playerStartsFirst && this.playVsComputer)) {
        this.computerMove();
      }
    },
    computerMove() {
      const playedMoves = [...this.playerOne, ...this.playerTwo];
      const nonPlayedFields = this.ttt.filter(el => !playedMoves.includes(el));
      const randomItem = nonPlayedFields[Math.floor(Math.random() * nonPlayedFields.length)];
      this.playMove(randomItem);
    },
    checkWinner(player) {
      if (player.length < 3) {
        return [];
      }
      let winnCombination = [];
      this.winningCombinations.forEach((combination) => {
        if (combination.every(val => player.includes(val))) {
          winnCombination = combination;
          return combination;
        }
        return [];
      });
      return winnCombination;
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
.gameHolder {
  width: 700px;
  height: 700px;
  border: 1px solid grey;
  margin: 0 auto 20px auto;
  padding: 49px;
}
.gameHolder div{
  width: 200px;
  height: 200px;
  border: 2px solid grey;
  float: left;
  cursor: pointer;
}
.gameHolder div.active{
  background-color: aquamarine;
}
.gameHolder div span{
  font-weight: bold;
  font-size: 9em;
}
#field1 {
  border-top: 0px !important;
  border-left: 0px !important;
}
#field2 {
  border-top: 0px !important;
}
#field3 {
  border-top: 0px !important;
  border-right: 0px !important;
}
#field4 {
  border-left: 0px !important;
}
#field6 {
  border-right: 0px !important;
}
#field7 {
  border-bottom: 0px !important;
  border-left: 0px !important;
}
#field8 {
  border-bottom: 0px !important;
}
#field9 {
  border-bottom: 0px !important;
  border-right: 0px !important;
}
.results {
  margin: 10px auto 10px auto;
  border: 1px solid #f6b93b;
  width: 150px;
}
.playerVsComputer {
  margin: 10px auto 10px auto;
  border: 1px solid #f6b93b;
  width: 250px;
  text-align: left;
  padding: 5px;
}
.playerVsComputer label{
  margin-left: 10px;
}
.gameControls button {
  padding: 10px;
  margin: 10px;
  background-color: white;
  cursor: pointer;
}
.gameControls button.active {
  background-color: #f6b93b;
}
button:focus {outline:0;}
</style>
