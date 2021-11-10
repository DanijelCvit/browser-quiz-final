import { createStart } from '../views/start.html.js';

export const start = () => {
  // Generate new HTML
  const startTemplate = createStart();
  window.localStorage.clear();

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate;
};
