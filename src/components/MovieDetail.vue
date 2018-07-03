<template>
  <div>
    {{ movie.title }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movie: {}
    };
  },
  created() {
    this.fetchMovie();
  },
  methods: {
    fetchMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${
            this.$route.params.id
          }?api_key=7f1a05c5ac8d8c4869d31263fa7a157e`
        )
        .then(res => (this.movie = res.data));
    }
  }
};
</script>

<style scoped>
div {
  color: white;
}
</style>