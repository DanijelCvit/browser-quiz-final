import { quizData } from '../data.js';
import resultString from '../views/results.html.js';

export const results = () => {
  const results = quizData.questions.map(({ correct, selected }) => ({
    correct,
    selected,
  }));

  // Generate new HTML
  const resultTemplate = Handlebars.compile(resultString);

  // Add HTML to app
  document.getElementById('app').innerHTML = resultTemplate({
    results,
  });
};
