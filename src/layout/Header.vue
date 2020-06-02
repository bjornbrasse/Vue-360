<template>
  <div id="nav">
    <v-app-bar app color="primary" dark>
      <router-link :to="{ name: 'Home' }">
        <v-toolbar-title class="title">Quizzzy</v-toolbar-title>
      </router-link>
      <v-btn :to="{ name: 'Quiz' }" text>
        <span class="mr-2">New Quiz</span>
      </v-btn>
      <v-spacer />
      <v-btn :to="{ name: 'About' }" text>
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "appHeader"
};
</script>

<style scoped>
.title {
  margin: 0 20px;
  color: #fff;
}
#color {
  border: 1px solid #333;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
</style>
