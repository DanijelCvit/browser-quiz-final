import { quizData } from '../data.js';
import {
  SUBMIT_BUTTON_ID,
  ANSWER_LABEL,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestion } from '../views/question.html.js';
import { createExplanationItem, popUpMassage } from '../views/question.html.js';

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

  if (event.target?.classList.contains(ANSWER_LABEL)) {
    let selectedItem = event.target;

    localStorage.setItem(
      searchParams.get('question'),
      selectedItem.getAttribute('for')
    );
  } else if (event.target?.id === SUBMIT_BUTTON_ID) {
    createExplanationItem(searchParams.get('question'));
  }
});

const handleSelectAnswer = (event) => {
  const searchParams = new URLSearchParams(location.search);

  if (location.search === '') {
    location.search = `?page=quiz&question=0`;
  } else if (event.target?.name === 'answer') {
    let selectedItem = event.target;
    localStorage.setItem(
      searchParams.get('question'),
      selectedItem.getAttribute('id')
    );

    if (+searchParams.get('question') === quizData.questions.length - 1) {
      location.search = `?page=results`;
    } else {
      location.search = `?page=quiz&question=${
        +searchParams.get('question') + 1
      }`;
    }
  }
};

const handleSubmitAnswer = () => {
  document.getElementById(SUBMIT_BUTTON_ID).click();
  document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
};

const handleAnswerKeys = (event) => {
  const [...inputElementsArray] = document.querySelectorAll(
    "input[type='radio']"
  );
  const selectedAnswer = inputElementsArray.find(
    (input) => input.id === event.key.toLowerCase()
  );
  selectedAnswer.checked = true;
  selectedAnswer.focus();
};

document.addEventListener('keyup', (event) => {
  const answerKeys = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D'];

  if (event.key === 'Enter') {
    handleSelectAnswer(event);
  } else if (event.key === 's' || event.key === 'S') {
    handleSubmitAnswer();
  } else if (answerKeys.includes(event.key)) {
    handleAnswerKeys(event);
  }
});

let multipleClickCounter = 0;

const multiplePress = (event) => {
  const searchParams = new URLSearchParams(location.search);

  if (event.target?.classList.contains(ANSWER_LABEL)) {
    let selectedItem = event.target;

    localStorage.setItem(
      searchParams.get('question'),
      selectedItem.getAttribute('for')
    );
    multipleClickCounter += 1;
    if (multipleClickCounter === 3 || multipleClickCounter > 5) {
      popUpMassage();
    }
  }
};
document.addEventListener('click', multiplePress);
