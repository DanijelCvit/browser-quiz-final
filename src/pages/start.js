import { createStart } from '../views/start.html.js';
import { quizData } from '../data.js';

export const start = () => {
  //Clear local storage of all data
  localStorage.clear();

  // Generate new HTML
  const startTemplate = createStart();

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate;
};
