<template>
  <div>
    <NewQuizDialog />
    <p v-if="player" class="align-self-end">{{ player.name }}</p>

    <QuizSettings v-if="!activeQuestion" />
    <div v-else>
      <h1>New Quiz</h1>
      <div id="header" class="d-flex">
        <p>{{ $store.state.quiz.index + 1 }}. {{ activeQuestion.title }}</p>
        <v-progress-linear
          :active="active"
          background-opacity="0.3"
          height="6px"
          :indeterminate="indeterminate"
          :value="25"
          color="light-blue"
        ></v-progress-linear>
      </div>
      <v-card max-width="600px" class="mx-auto pa-4">
        <v-component is="MultipleChoice" :question="activeQuestion"></v-component>
      </v-card>
      <v-btn color="primary">Next</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewQuizDialog from "../components/NewQuizDialog.vue";
import QuizSettings from "../components/QuizSettings.vue";

export default {
  name: "Quiz",
  data: () => ({}),
  computed: {
    ...mapGetters("quiz", ["player", "activeQuestion"])
  },
  methods: {},
  components: {
    NewQuizDialog,
    MultipleChoice: () =>
      import(/* */ "../components/questions/MultipleChoice.vue"),
    QuizSettings
  }
};
</script>

<style scoped>
</style>