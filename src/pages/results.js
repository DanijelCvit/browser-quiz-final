import { quizData } from '../pages/quiz.js';

import { createResults } from '../views/results.html.js';

export const results = () => {
  // Get selected and correct from each question and put it in an object

  const results = quizData.map(({ text, correct }) => ({
    text,
    correct,
  }));

  // Generate new HTML
  const resultTemplate = createResults(results);

  // Add HTML to app
  document.getElementById('app').innerHTML = resultTemplate;
};
