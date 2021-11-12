import { quiz } from '../pages/quiz.js';
import { results } from '../pages/results.js';
import { start } from '../pages/start.js';
import { quizData } from '../data.js';
import { initializePopup } from '../pages/popup.js';

// Error path
const err = () => {
  document.getElementById('app').innerHTML = `<h1>Error: page not found<h1>`;
};
AOS.init({
  duration: 1200,
});

initializePopup();

//Router
const router = () => {
  const searchParams = new URLSearchParams(window.location.search);

  const routes = ['start', 'quiz', 'results'];

  if (searchParams.toString() === '' || !searchParams.has('page')) {
    return start();
  }
  // Check if there are more than 2 params or other params than page/question
  let counter = 0;
  for (const param of searchParams) {
    counter++;
    if (counter > 2 || (param[0] !== 'page' && param[0] !== 'question')) {
      return err();
    }
  }

  const hasPage = searchParams.has('page');
  const currentPage = searchParams.get('page');
  const routeExists = routes.find((page) => page === currentPage);

  // Check if a valid route is given
  if (!hasPage || routeExists === undefined) {
    return err();
  }
  const hasQuestion = searchParams.has('question');
  const currentQuestion = searchParams.get('question');
  const isValidNumber =
    currentQuestion &&
    currentQuestion >= 0 &&
    currentQuestion < quizData.questions.length;

  // Check quiz route for valid number
  if (currentPage === 'quiz') {
    if (hasQuestion && isValidNumber) {
      return quiz(+currentQuestion);
    } else {
      return err();
    }
  } else {
    return results();
  }
};

// Event listeners
window.addEventListener('load', router);
