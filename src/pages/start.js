import { createStart } from '../views/start.html.js';
import { quizData } from '../data.js';

export const start = () => {
  //Clear local storage of all data
  localStorage.clear();

  // Pre fill local storage with default answer 'a'
  for (let i = 0; i < quizData.questions.length; i++) {
    localStorage.setItem(i, 'a');
  }

  // Generate new HTML
  const startTemplate = createStart();

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate;
};
