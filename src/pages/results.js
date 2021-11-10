import { quizData } from '../data.js';
import { createResults } from '../views/results.html.js';

export const results = () => {
  // Get selected and correct from each question and put it in an object
  const results = quizData.questions.map(({ text, correct }) => ({
    text,
    correct,
  }));

  // Generate new HTML
  const resultTemplate = createResults(results);

  // Add HTML to app
  document.getElementById('app').innerHTML = resultTemplate;
};


// let resultCounter = 0;
// export const checkAnswer = () => {

//   if (quizData.questions[quizData.currentQuestionIndex].correct === quizData.questions[quizData.currentQuestionIndex].selected) {
//     resultCounter++
//     console.log('right', resultCounter)
//   } else {
//     console.log('wrong')
//   }
// }