import { quizData } from '../data.js';

import { createResults } from '../views/results.html.js';

export const results = () => {
  // Generate new HTML
  const resultTemplate = createResults(quizData);

  // Add HTML to app
  document.getElementById('app').innerHTML = resultTemplate;
};
