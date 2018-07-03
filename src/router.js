import Vue from 'vue';
import VueRouter from 'vue-router';

import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
});
