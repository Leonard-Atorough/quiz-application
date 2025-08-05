import { state } from "./state.js";

export async function renderApp(onAnswerClick) {
  // weird thing here where state is not yet initialized so have put a temp workaround
  if (state.index <= state.quizLength || state.quizLength === 0) {
    renderQuestion(onAnswerClick);
  } else {
    window.alert(
      `Quiz over. Your score is: ${state.score}/${state.quizLength}`
    );
  }
}

async function renderQuestion(onAnswerClick) {
  console.log("here");
  const page = document.getElementById("main-content");
  if (!page) {
    console.log("Error: Unable to get element with id: 'main-content'.");
    return;
  }

  try {
    const response = await fetch("./components/question.html");
    if (!response.ok) {
      throw new Error(
        `Failed to load HTML from ${url}: ${response.statusText}`
      );
    }
    const html = await response.text();
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    const question = state.questions[state.index - 1];

    const questionTemplate = wrapper.querySelector("template");
    const questionBody = questionTemplate.content.cloneNode(true);

    const questionText = questionBody.querySelector("#question-text");
    questionText.textContent = question.question;

    const answerContainer = questionBody.querySelector("#question-answers");
    answerContainer.innerHTML = "";

    renderQuestionButtons(question, answerContainer, onAnswerClick);

    let questionContainer = page.querySelector(
      `[data-component="${questionTemplate.id}"]`
    );
    questionContainer.innerHTML = "";
    questionContainer.appendChild(questionBody);
  } catch (error) {
    console.log(error);
  }
}

function renderQuestionButtons(question, answerContainer, onAnswerClick) {
  question.options.forEach((element, index) => {
    var button = document.createElement("BUTTON");

    button.classList.add("btn", "btn-primary", "answer");
    button.textContent = element;
    button.id = index;
    button.type = "button";
    button.onclick = () => onAnswerClick(index);

    answerContainer.appendChild(button);
  });
}
