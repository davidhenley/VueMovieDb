<template>
  <transition name="fade">
    <div class="movie-wrapper" :style="styles">
      <div class="movie-info">
        <h1>{{ movie.title }}</h1>
        <h3>Release Date: {{ movie.release_date }}</h3>

        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

export default {
  data() {
    return {
      movie: {}
    };
  },
  created() {
    this.fetchMovie();
  },
  computed: {
    styles() {
      return {
        background: `url(${BACKDROP_PATH}/${
          this.movie.backdrop_path
        }) no-repeat top center`
      };
    }
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
.movie-wrapper {
  position: relative;
  padding-top: 50vh;
  background-size: cover !important;
}
.movie-info {
  background: white;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 1)
  );
  padding: 2rem 10%;
  color: #222;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>