import Vue from 'vue';
import VueRouter from 'vue-router';
import ChordCombination from '../views/ChordCombination.vue';
import RandomChords from '../views/RandomChords.vue';
import Chords from '../views/Chords.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: Chords,
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
  {
    path: '/chords',
    name: 'chords',
    component: Chords,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
