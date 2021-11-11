import { quizData } from '../data.js';
import { ANSWER_LABEL_ID } from '../constants.js';
import { createQuestion } from '../views/question.html.js';

export const quiz = (qNumber) => {
  // Create path for next question
  let pathname = { page: 'quiz', question: qNumber };

  // Redirect to results if it's last question
  if (qNumber === quizData.questions.length - 1) {
    pathname.page = 'results';
  }

  const currentQuestionText = quizData.questions[qNumber].text;
  const currentAnswersObject = quizData.questions[qNumber].answers;
  const currentAnswersData = Object.entries(currentAnswersObject).map(
    ([key, text]) => ({
      key,
      text,
    })
  );
  // Generate new HTML
  const quizTemplate = createQuestion(
    currentQuestionText,
    currentAnswersData,
    pathname
  );
  // Add HTML to app
  document.getElementById('app').innerHTML = quizTemplate;
};

//
document.addEventListener('click', (event) => {
  const searchParams = new URLSearchParams(location.search);

  if (event.target?.id === ANSWER_LABEL_ID) {
    let selectedItem = event.target;
    localStorage.setItem(
      searchParams.get('question'),
      selectedItem.getAttribute('for')
    );
  }
});

document.addEventListener('keyup', (event) => {
  const searchParams = new URLSearchParams(location.search);

  if (location.search === '') {
    location.search = `?page=quiz&question=0`;
  }

  if (event.target?.name === 'answer') {
    if (event.key === 'Enter') {
      let selectedItem = event.target;
      localStorage.setItem(
        searchParams.get('question'),
        selectedItem.getAttribute('id')
      );

      if (+searchParams.get('question') === quizData.questions.length - 1) {
        location.search = `?page=results`;
      } else {
        location.search = `?page=quiz&question=${+searchParams.get('question') + 1
          }`;
      }
    }
  }
});
