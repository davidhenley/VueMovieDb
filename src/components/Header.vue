<template>
  <header>
    <router-link to="/" tag="h1">
      {{ title }}
    </router-link>

    <button @click="show = !show">Show/Hide</button>

    <transition name="fade">
      <h1 v-if="show">Animated</h1>
    </transition>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      show: false
    };
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>