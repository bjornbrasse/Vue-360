import Vue from "vue";
import Vuex from "vuex";
import { Questions } from "./modules/questions";
import { QuizModule } from "./modules/quiz";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Questions,
    quiz: QuizModule
  }
});
