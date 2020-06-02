<template>
  <div>
    <v-card max-width="400" class="mx-auto">
      <v-card-title>Quiz Settings</v-card-title>
      <v-card-text class="d-flex flex-column pa-4">
        <span class="ml-0 mb-8">How many questions would you like to play?</span>
        <v-slider
          v-model="amount"
          min="1"
          max="10"
          step="1"
          ticks="always"
          tick-size="4"
          :thumb-size="24"
          thumb-label="always"
          dense
        ></v-slider>
        <v-checkbox v-model="immediateFeedback" label="Immedicate Feedback"></v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="start" color="primary" class="float-right">Start</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    amount: 3,
    immediateFeedback: false
  }),
  methods: {
    start() {
      this.$store.dispatch("quiz/fetchQuestions", this.amount);
    }
  }
};
</script>

<style scoped>
</style>