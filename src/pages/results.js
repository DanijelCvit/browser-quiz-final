import { shortageData } from '../init/app.js';

import { createResults } from '../views/results.html.js';

export const results = () => {
  // Get selected and correct from each question and put it in an object

  const results = shortageData.map(({ text, correct }) => ({
    text,
    correct,
  }));

  // Generate new HTML
  const resultTemplate = createResults(results);

  // Add HTML to app
  document.getElementById('app').innerHTML = resultTemplate;
};
