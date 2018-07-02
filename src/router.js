import Vue from 'vue';
import VueRouter from 'vue-router';

import MovieList from './components/MovieList';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList
    }
  ]
});
