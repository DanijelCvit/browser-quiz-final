import startString from '../views/start.html.js';

export const start = () => {
  // Generate new HTML
  const startTemplate = Handlebars.compile(startString);

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate({});
};
