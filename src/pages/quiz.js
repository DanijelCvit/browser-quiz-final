import { quizData } from '../data.js';
import quizString from '../views/question.html.js';

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

  // Generate new HTML
  const quizTemplate = Handlebars.compile(quizString);

  // Add HTML to app
  document.getElementById('app').innerHTML = quizTemplate({
    answersObject,
    question: quizData.questions[qNumber].text,
    pathname,
  });
};
