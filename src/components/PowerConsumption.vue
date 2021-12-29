<template>
  <div class="layout">
    <div class="year-selector">
      <label for="yearSelector">Year</label>
      <select id="yearSelector" v-model="selectedYear">
        <option v-for="option in yearOptions" v-bind:value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="month-selector">
      <label for="monthSelector">Month</label>
      <select id="monthSelector" v-model="selectedMonth">
        <option v-for="(month, key) in months" v-bind:value="key" :key="key">
          {{ month }}
        </option>
      </select>
    </div>
    <div class="power">
      <label for="power">Power consumption (w/h)</label>
      <input type="number" id="power" v-model="power">
    </div>
    <div class="lowPrice">
      <label for="lowPrice">Low Price</label>
      <input type="number" id="lowPrice" v-model="lowPrice">
    </div>
    <div class="highPrice">
      <label for="highPrice">High Price</label>
      <input type="number" id="highPrice" v-model="highPrice">
    </div>
    <p class="expenses">Total Cost + DDV: <strong>{{ expenses }}</strong> MKD</p>
  </div>
</template>

<script>
const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};
const highPrice = 6.825;
const lowPrice = 3.845;
export default {
  name: 'PowerConsumption',
  data() {
    return {
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth(),
      months,
      power: 830,
      lowPrice,
      highPrice,
    };
  },
  computed: {
    yearOptions() {
      return this.range(2019, new Date().getFullYear());
    },
    expenses() {
      const cost = this.calculateCost(this.selectedYear, this.selectedMonth, this.power);
      return `${Math.round(((cost * 1.18) + Number.EPSILON) * 100) / 100}`;
    },
  },
  methods: {
    range(start, end, step = 1) {
      const output = [];
      if (typeof end === 'undefined') {
        // eslint-disable-next-line no-param-reassign
        end = start;
        // eslint-disable-next-line no-param-reassign
        start = 0;
      }
      for (let i = start; i <= end; i += step) {
        output.push(i);
      }
      return output;
    },
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    isSunday(day, month, year) {
      const currentDay = new Date(year, month, day).getDay();
      return currentDay === 0;
    },
    calculateCost(year, month, wattsPerHour) {
      let totalHighHours = 0;
      let totalLowHours = 0;
      let avgLowPrice = 0;
      let avgHighPrice = 0;
      const totalDays = this.daysInMonth(month, year);

      const kwMonthly = totalDays * 24 * wattsPerHour / 1000;

      for (let i = 1; i <= totalDays; i += 1) {
        if (this.isSunday(i, month, year)) {
          totalLowHours += 24;
        } else {
          totalLowHours += 11;
          totalHighHours += 13;
        }
      }
      avgLowPrice = (
        (totalLowHours / (totalLowHours + totalHighHours)) * this.lowPrice
      ) * kwMonthly;
      avgHighPrice = (
        (totalHighHours / (totalLowHours + totalHighHours)) * this.highPrice
      ) * kwMonthly;

      return avgLowPrice + avgHighPrice;
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
  padding: 3px 2px;
  margin-right: 10px;
}
label:hover, a:hover {
  border-bottom-color: #e49d10;
}

.layout {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  text-align: left;
  height: 100%;
  width: 70%;
  overflow: hidden;
  margin: 30px auto;
}


button:focus {outline:0;}
</style>
