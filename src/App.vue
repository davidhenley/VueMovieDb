<template>
  <div id="app">
      <Header :title="title" />
      <MovieList />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'app',
  data() {
    return {
      title: 'VMDb'
    };
  },
  components: {
    Header,
    MovieList
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
