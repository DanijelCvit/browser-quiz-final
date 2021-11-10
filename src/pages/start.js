import { createStart } from '../views/start.html.js';

export const start = () => {
  // Clear local storage
  localStorage.clear();

  // Generate new HTML
  const startTemplate = createStart();

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate;
};
