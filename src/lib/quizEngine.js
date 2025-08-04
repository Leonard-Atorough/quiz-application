import { state } from "./state.js";

export async function loadQuiz(quizName) {
  if (!state || typeof state !== "object") {
    console.error("Invalid state object provided.");
    return;
  }
  const response = await fetch("./data/quiz.json");
  const data = await response.json();

  // load the quiz data based on the quizName. the data object is a json array of quizzes
  const quizData = data.find((quiz) => quiz.quizName === quizName);

  if (!quizData) {
    console.error(`Quiz with name "${quizName}" not found in the data.`);
    return;
  }

  if (!quizData || !Array.isArray(quizData.questions)) {
    console.error("No questions found in the quiz data.");
    return;
  }

  state.questions = quizData.questions;
  state.index = quizData.questions[0].id;
  state.score = 0;
  state.quizLength = quizData.questions.length;
  state.quizName = quizData.quizName || "Default Quiz";

  console.log(state);
}

export async function GetQuizNames() {
  try {
    const response = await fetch("./data/quiz.json");

    if (!response) {
      throw new Error("data file not found");
    }
  } catch (error) {}
}

export async function CheckAnswer(expectedAnswer, submittedAnswer) {
  if (submittedAnswer === expectedAnswer) {
    window.alert("That's correct!");
    state.index++;
    state.score++;
    return true;
  } else {
    window.alert("Oops, try again");
    return false;
  }
}
