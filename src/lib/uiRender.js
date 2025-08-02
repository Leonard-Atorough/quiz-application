export async function renderQuestion(state) {
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

    page
      .querySelector(`[data-component="${questionTemplate.id}"]`)
      .appendChild(questionBody);
  } catch (error) {
    console.log(error);
  }
}
