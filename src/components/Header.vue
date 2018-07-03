<template>
  <header>
    <router-link to="/" tag="h1">
      {{ title }}
    </router-link>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
header {
  background-color: #111;
  padding: 10px;
  color: white;
  text-align: center;
}
h1 {
  margin: 0;
  cursor: pointer;
}
</style>