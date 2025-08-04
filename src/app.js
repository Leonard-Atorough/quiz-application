import { renderApp } from "./lib/uiRender.js";
import { state } from "./lib/state.js";
import { loadQuiz, CheckAnswer } from "./lib/quizEngine.js";

window.addEventListener("DOMContentLoaded", () => {
  loadQuiz("General Knowledge Quiz");
});

window.addEventListener("load", () => {
  renderApp(handleAnswerClick);
});

export function handleAnswerClick(selectedAnswer) {
  const correctAnswer = state.questions[state.index - 1].answer;
  console.log(selectedAnswer);
  console.log(correctAnswer);
  var result = CheckAnswer(correctAnswer, selectedAnswer);
  if (result) {
    renderApp(handleAnswerClick);
  }
}
