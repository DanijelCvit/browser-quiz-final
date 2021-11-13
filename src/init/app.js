import { quizData } from '../data.js';
import { quiz } from '../pages/quiz.js';
import { results } from '../pages/results.js';
import { start } from '../pages/start.js';

AOS.init({
  duration: 1200,
});

//Router
const router = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = searchParams.get('page');

  // Redirect to start on empty search or no page given
  if (searchParams.toString() === '' || !searchParams.has('page')) {
    return start();
  }
  // Return to start on invalid route
  if (currentPage !== 'quiz' && currentPage !== 'results') {
    return start();
  }

  if (currentPage === 'quiz') {
    // Check quiz route for valid number
    const questionNumber = parseInt(searchParams.get('question'));
    const isValidNumber =
      questionNumber !== NaN &&
      questionNumber >= 0 &&
      questionNumber < quizData.length;

    if (searchParams.has('question') && isValidNumber) {
      return quiz(questionNumber);
    } else {
      return start();
    }
  } else {
    return results();
  }
};

// Go to router on load
window.addEventListener('load', router);
