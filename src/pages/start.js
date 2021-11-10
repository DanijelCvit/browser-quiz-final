import { createStart } from '../views/start.html.js';

export const start = () => {
  // Clear local storage
  localStorage.clear();

  // Generate new HTML
  const startTemplate = createStart();
  window.localStorage.clear();

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate;
};
