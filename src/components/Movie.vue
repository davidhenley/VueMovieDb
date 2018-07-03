<template>
  <router-link :to="movieLink">
    <img :src="posterImage" :alt="movie.title" />
  </router-link>
</template>

<script>
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

export default {
  props: {
    movie: Object
  },
  computed: {
    posterImage() {
      return `${POSTER_PATH}/${this.movie.poster_path}`;
    },
    movieLink() {
      return `/movie/${this.movie.id}`;
    }
  }
};
</script>

<style scoped>
img {
  box-shadow: 0 0 35px black;
}
</style>