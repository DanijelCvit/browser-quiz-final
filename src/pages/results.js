import { quizData } from './quiz.js';

import { createResults } from '../views/results.html.js';

export const results = () => {
  // Get selected and correct from each question and put it in an object
  console.log(quizData);
  const results = quizData;

  // Generate new HTML
  const resultTemplate = createResults(results);

  // Add HTML to app
  document.getElementById('app').innerHTML = resultTemplate;
};
