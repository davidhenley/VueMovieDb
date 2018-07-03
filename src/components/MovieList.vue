<template>
  <div>
    <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import axios from 'axios';

import Movie from './Movie.vue';

export default {
  data() {
    return {
      movies: []
    };
  },
  components: {
    Movie
  },
  beforeCreate() {
    console.log('Before create');
  },
  created() {
    console.log('Created');
    this.fetchMovies();
  },
  beforeMount() {
    console.log('Before mount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUpdate() {
    console.log('Before update');
  },
  updated() {
    console.log('Updated');
  },
  beforeDestroy() {
    console.log('Before destroy');
  },
  destroyed() {
    console.log('Destroyed');
  },
  methods: {
    fetchMovies() {
      axios
        .get(
          'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f1a05c5ac8d8c4869d31263fa7a157e'
        )
        .then(res => (this.movies = res.data.results));
    }
  }
};
</script>

<style scoped>
div {
  display: grid;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  align-items: stretch;
  justify-items: center;
}
</style>