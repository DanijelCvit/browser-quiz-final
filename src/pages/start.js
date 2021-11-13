import { createStart } from '../views/start.html.js';
import { storeRandomQuestionOrder } from '../data.js';

export const start = () => {
  //Clear local storage of all data
  localStorage.clear();

  // Generate new HTML
  const startTemplate = createStart();
  storeRandomQuestionOrder();

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate;
};
