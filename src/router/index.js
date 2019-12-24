import Vue from 'vue';
import VueRouter from 'vue-router';
import ChordCombination from '../views/ChordCombination.vue';
import RandomChords from '../views/RandomChords.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: RandomChords,
  },
  {
    path: '/random-chords',
    name: 'random-chords',
    component: RandomChords,
  },
  {
    path: '/chord-combination',
    name: 'chord-combination',
    component: ChordCombination,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
