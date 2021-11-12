import { createStart } from '../views/start.html.js';
import { quizData } from '../data.js';
const storeRandomQuestionOrder = () => {
  const shuffledQuestions = quizData.questions.sort(() => Math.random() - 0.5);
  const shortageData = shuffledQuestions.slice(0, 10);
  localStorage.setItem('questions', JSON.stringify(shortageData));
  return shortageData;
};

export const start = () => {
  //Clear local storage of all data
  localStorage.clear();

  // Generate new HTML
  const startTemplate = createStart();
  window.localStorage.clear();
  storeRandomQuestionOrder();

  // Add HTML to app
  document.getElementById('app').innerHTML = startTemplate;
};
