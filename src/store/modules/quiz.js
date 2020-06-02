import Questions from "../../data/questions";

export const QuizModule = {
  namespaced: true,
  state: {
    player: null,
    index: 0,
    questions: null
  },
  getters: {
    showPlayerDialog: state => !state.player,
    activeQuestion: state => {
      return state.questions ? state.questions[state.index] : null;
    },
    player: state => {
      const { firstName, lastName, email } = state.player;
      return { name: `${firstName} ${lastName}`, email };
    }
  },
  actions: {
    enterPlayer: ({ commit }, player) => commit("setPlayer", player),

    fetchQuestions: ({ commit }, amount) => {
      console.log(typeof amount);

      let questions = Questions;
      questions.map(q => (q.random = Math.random())); // add random
      questions.sort((a, b) => a.random - b.random);
      questions.forEach(q => delete q.random); // remove random
      questions = questions.slice(0, amount);
      console.log(questions);

      commit("setQuestions", questions);
    }
  },
  mutations: {
    setPlayer: (state, player) => (state.player = player),
    setQuestions: (state, questions) => (state.questions = questions)
  }
};
