import { renderQuestion } from "./lib/uiRender.js";
import { state } from "./lib/state.js";
import { loadQuiz } from "./lib/quizEngine.js";



window.addEventListener("DOMContentLoaded", () => {
  loadQuiz(state);
});

window.addEventListener("load", () => {
    renderQuestion(state);
});
