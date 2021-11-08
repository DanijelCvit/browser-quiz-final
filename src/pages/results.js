import { RESULTS_TEMPLATE } from "../constants.js";
import { quizData } from "../data.js";

export const results = () => {
  const results = quizData.questions.map(({ correct, selected }) => ({
    correct,
    selected,
  }));

  // Generate results HTML
  document.getElementById("app").innerHTML = RESULTS_TEMPLATE({
    results,
  });
};
