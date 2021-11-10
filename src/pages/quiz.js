import { quizData } from '../data.js';
import { ANSWER_LABEL_ID, NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { createQuestion } from '../views/question.html.js';

export const quiz = (qNumber) => {
  // Create path for next question
  let pathname = { page: 'quiz', question: qNumber };

  // Redirect to results if it's last question
  if (qNumber === quizData.questions.length - 1) {
    pathname.page = 'results';
  }

  const currentQuestionText = quizData.questions[qNumber].text;
  const currentAnswersObject = quizData.questions[qNumber].answers;
  const currentAnswersData = Object.entries(currentAnswersObject).map(
    ([key, text]) => ({
      key,
      text,
    })
  );
  // Generate new HTML
  const quizTemplate = createQuestion(
    currentQuestionText,
    currentAnswersData,
    pathname
  );
  // Add HTML to app
  document.getElementById('app').innerHTML = quizTemplate;

  document.addEventListener('click', (event) => {
    if (event.target?.id === ANSWER_LABEL_ID) {
      let selectedItem = event.target;
      localStorage.setItem(qNumber, selectedItem.getAttribute('for'));
       }
  });
};
