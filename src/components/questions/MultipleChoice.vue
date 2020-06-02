<template>
  <div>
    <p class="text">{{ question.text }}</p>
    <v-container>
      <v-row v-for="answer in question.answers" :key="answer.id">
        <v-col>
          <v-checkbox v-model="checkbox" :label="answer.text" :value="answer.id"></v-checkbox>
        </v-col>
        <v-col>{{ answer.text }}</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MultipleChoice",
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    checkbox: ""
  })
};
</script>

<style scoped>
</style>