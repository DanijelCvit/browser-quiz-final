import { QUESTION_TEMPLATE } from "../constants.js";
import { quizData } from "../data.js";

export const quiz = (qNumber) => {
  let pathname = `quiz&question=${qNumber + 1}`;

  // Redirect to results if it's last question
  if (qNumber === quizData.questions.length - 1) {
    pathname = `results`;
  }

  // Get keys and answers and put them in an object
  const answersKeyValues = Object.entries(quizData.questions[qNumber].answers);
  const answersObject = answersKeyValues.map(([key, answer]) => ({
    key,
    answer,
  }));

  // quizData.currentQuestionIndex++;

  // Generate question HTML
  document.getElementById("app").innerHTML = QUESTION_TEMPLATE({
    answersObject,
    question: quizData.questions[qNumber].text,
    pathname,
  });
};
