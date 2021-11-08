import { quizData } from "../data.js";
import { quiz } from "../pages/quiz.js";
import { results } from "../pages/results.js";
import { start } from "../pages/start.js";

// Error path
const err = () => {
  document.getElementById("app").innerHTML = `<h1>Error: page not found<h1>`;
};

//Router
const router = () => {
  // Get the current path
  const [currentPath, question] = window.location.search.slice(1).split("&");

  // Find the page for this path
  if (currentPath === "") {
    start();
  } else if (currentPath === "page=quiz") {
    if (question.slice(0, 8) === "question") {
      const qNumber = parseInt(question.slice(9));
      if (qNumber >= quizData.questions.length) {
        start();
      } else {
        quiz(qNumber);
      }
    } else {
      err();
    }
  } else if (currentPath === "page=results") {
    console.log("here");
    results();
  } else {
    err();
  }
};

// Event listeners
window.addEventListener("load", router);
