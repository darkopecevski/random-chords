<template>
  <div class="layout">
    <input name="nav" type="radio" class="nav home-radio" id="timer" checked="checked" />
    <div class="page home-page">
      <div class="page-contents">
        <h1>{{timer}}</h1>
        <button @click="startTimer">Start</button>
        <button @click="stopTimer">Stop</button>
        <button @click="resetTimer">Reset</button>
      </div>
    </div>
    <label class="nav" for="timer">
      <span>
        Timer
      </span>
    </label>
    <input name="nav" type="radio" class="about-radio" id="stopwatch" />
    <div class="page about-page">
      <div class="page-contents">
        <h1>Stopwatch</h1>
        <p>Amet consectetur adipisicing elit.
          Sed ipsam ad exercitationem, quo quae ullam,
          quidem laudantium corporis quis minima debitis nesciunt repellat.
          Quos dolore ex quis voluptas, minus ut?</p>
      </div>
    </div>
    <label class="nav" for="stopwatch">
      <span>Stopwatch</span>
    </label>
  </div>
</template>

<script>

export default {
  name: 'Timer',
  data() {
    return {
      timer: '05:00',
      timerSec: 300,
      interval: '',
      started: false,
    };
  },
  methods: {
    startTimer() {
      if (!this.started) {
        this.interval = setInterval(this.changeTime, 1000);
        this.started = true;
      }
    },
    stopTimer() {
      if (this.started) {
        clearInterval(this.interval);
        this.started = false;
      }
    },
    resetTimer() {
      if (this.started) {
        clearInterval(this.interval);
      }
      this.timer = '5:00';
      this.timerSec = 300;
    },
    changeTime() {
      if (this.timerSec === 0) {
        this.stopTimer();
        return;
      }
      this.timerSec -= 1;
      let min = Math.floor(this.timerSec / 60);
      let sec = this.timerSec - min * 60;
      min = min.toString().length === 1 ? `0${min}` : min;
      sec = sec.toString().length === 1 ? `0${sec}` : sec;
      this.timer = `${min}m ${sec}s`;
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
html, body {
  height: 100%;
  color: #1a1b1c;
}

label, a {
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  display: inline-block;
  color: inherit;
  transition: border 0.2s;
  border-bottom: 5px solid rgba(142, 68, 173, 0.2);
  padding: 3px 2px;
}
label:hover, a:hover {
  border-bottom-color: #e49d10;
}

.layout {
  display: grid;
  height: 100%;
  width: 70%;
  overflow: hidden;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr 1fr;
  margin: 30px auto;
}
.timerIcon {
  color: white;
}

input[type="radio"] {
  display: none;
}

label.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 2px solid #e49d10;
  background: #ecf0f1;
  user-select: none;
  transition: background 0.4s, padding-left 0.2s;
  padding-left: 0;
}
input[type="radio"]:checked + .page + label.nav {
  background: #f6b93b;
  color: #ffffff;
  padding-left: 20px;
}
input[type="radio"]:checked + .page + label.nav span {
  padding-left: 20px;
}
input[type="radio"]:checked + .page + label.nav svg {
  opacity: 1;
}
label.nav span {
  padding-left: 0px;
  position: relative;
}
label.nav svg {
  left: 0;
  top: -3px;
  position: absolute;
  width: 15px;
  opacity: 0;
  transition: opacity 0.2s;
}

.page {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-column-end: span 3;
  padding: 0px 20px;
  display: flex;
  align-items: center;
}

.page-contents > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.2s, transform 0.2s;
}
.page-contents > *:nth-child(1) {
  transition-delay: 0.4s;
}
.page-contents > *:nth-child(2) {
  transition-delay: 0.6s;
}
.page-contents > *:nth-child(3) {
  transition-delay: 0.8s;
}
.page-contents > *:nth-child(4) {
  transition-delay: 1s;
}
.page-contents > *:nth-child(5) {
  transition-delay: 1.2s;
}
.page-contents > *:nth-child(6) {
  transition-delay: 1.4s;
}
.page-contents > *:nth-child(7) {
  transition-delay: 1.6s;
}
.page-contents > *:nth-child(8) {
  transition-delay: 1.8s;
}
.page-contents > *:nth-child(9) {
  transition-delay: 2s;
}
.page-contents > *:nth-child(10) {
  transition-delay: 2.2s;
}
.page-contents > *:nth-child(11) {
  transition-delay: 2.4s;
}
.page-contents > *:nth-child(12) {
  transition-delay: 2.6s;
}
.page-contents > *:nth-child(13) {
  transition-delay: 2.8s;
}
.page-contents > *:nth-child(14) {
  transition-delay: 3s;
}
.page-contents > *:nth-child(15) {
  transition-delay: 3.2s;
}
.page-contents > *:nth-child(16) {
  transition-delay: 3.4s;
}
.page-contents > *:nth-child(17) {
  transition-delay: 3.6s;
}
.page-contents > *:nth-child(18) {
  transition-delay: 3.8s;
}
.page-contents > *:nth-child(19) {
  transition-delay: 4s;
}
.page-contents > *:nth-child(20) {
  transition-delay: 4.2s;
}

input[type="radio"] + .page {
  transition: transform 0.2s;
  transform: translateX(100%);
}

input[type="radio"]:checked + .page {
  transform: translateX(0%);
}
input[type="radio"]:checked + .page .page-contents > * {
  opacity: 1;
  transform: translateY(0px);
}

.page-contents {
  max-width: 100%;
  width: 500px;
  margin: 0 auto;
}
button:focus {outline:0;}
</style>
