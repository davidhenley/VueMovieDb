<template>
  <div id="app">
    <Header :title="title" />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      title: 'VueMovieDb'
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
