export async function loadQuiz(state) {
  if (!state || typeof state !== "object") {
    console.error("Invalid state object provided.");
    return;
  }
  const response = await fetch("./data/quiz.json");
  const data = await response.json();
  console.log(data.questions);
  if (data && Array.isArray(data.questions)) {
    state.questions = data.questions;
  } else {
    console.error("No questions found in the quiz data.");
  }

  state.index = data.questions[0].id;
  state.score = 0;
  state.quizName = data.quizName || "Default Quiz";

  console.log("Quiz loaded successfully:", state);
}

export async function GetQuizNames() {
  try {
    const response = await fetch("./data/quiz.json");

    if (!response) {
      throw new Error("data file not found");
    }

    
  } catch (error) {}
}
