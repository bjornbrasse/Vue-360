<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "./layout/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
