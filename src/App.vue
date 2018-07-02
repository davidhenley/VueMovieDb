<template>
  <div id="app">
    <Header />
    <img src="./assets/logo.png">
    <h1>{{ hello }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return { hello: 'Hello World!' };
  },
  components: {
    HelloWorld,
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
