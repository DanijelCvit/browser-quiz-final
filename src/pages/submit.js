import { createSubmit } from '../views/submit.html.js';

import { quizData } from '../pages/quiz.js';
export const submit = (qNumber) => {
  // Create path for next question
  let pathname = { page: 'quiz', question: qNumber };

  // Redirect to results if it's last question
  if (qNumber >= quizData.length - 1) {
    pathname.page = 'results';
  }

  // Check the answer and select appropriate header
  const correctAnswer = quizData[qNumber].correct;
  const isCorrect = correctAnswer === localStorage.getItem(qNumber);
  const header = isCorrect ? 'Correct' : 'Incorrect!';

  // Generate new HTML
  const submitTemplate = createSubmit(header, pathname);

  // Add HTML to app
  document.getElementById('app').innerHTML = submitTemplate;
};
