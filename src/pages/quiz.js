import {
  SUBMIT_BUTTON_ID,
  ANSWER_LABEL,
  NEXT_QUESTION_BUTTON_ID,
  START_BUTTON,
} from '../constants.js';

import { popUpMassage } from '../views/question.html.js';

import {
  selectedCorrectOrIncorrectAnswer,
  createExplanationVideo,
  createQuestion,
} from '../views/question.html.js';
export const quizData = JSON.parse(localStorage.getItem('questions'));

export const quiz = (qNumber) => {
  // Create path for next question
  let pathname = { page: 'quiz', question: qNumber };

  // Redirect to results if it's last question
  if (qNumber === quizData.length - 1) {
    pathname.page = 'results';
  }

  const currentQuestionText = quizData[qNumber].text;
  const currentAnswersObject = quizData[qNumber].answers;
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

  // Restore any saved answer from local storage
  const savedAnswer = localStorage.getItem(qNumber);
  if (savedAnswer) {
    const savedAnswerElement = document.getElementById(savedAnswer);
    savedAnswerElement.checked = true;
    savedAnswerElement.focus();
  } else {
    document.getElementById('a').focus();
  }

  // If user already submitted his answer show that answer again
  const submittedAnswer = localStorage.getItem(`submitted${qNumber}`);
  if (submittedAnswer === 'yes') {
    handleSubmitAnswer();
  }

  // popup timer
  popupTimer(5000);
};

const popupTimer = (delay) => {
  setTimeout(() => {
    localStorage.setItem(`guessed${getQuestionNumber()}`, 'no');
  }, delay);
};

const checkAnswer = () => {
  const currentQuestion = getQuestionNumber();
  const selectedAnswer = localStorage.getItem(currentQuestion);
  const correctAnswer = quizData.questions[currentQuestion].correct;
  return selectedAnswer === correctAnswer;
};

const getQuestionNumber = () => {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get('question');
};

const handleSubmitAnswer = () => {
  document.getElementById(SUBMIT_BUTTON_ID).click();
  document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
};

const storeAnswer = (answer) => {
  const searchParams = new URLSearchParams(location.search);
  localStorage.setItem(searchParams.get('question'), answer);
};

//

const handlePopupModal = (event) => {
  const guessed = localStorage.getItem(`guessed${getQuestionNumber()}`);
  const submitted = localStorage.getItem(`submitted${getQuestionNumber()}`);

  if (guessed !== 'no' && submitted !== 'yes' && !checkAnswer()) {
    const popup = new bootstrap.Modal(document.getElementById('popupModal'));
    popup.show();
    event.preventDefault();
    document.getElementById(SUBMIT_BUTTON_ID).click();
  }
};

document.addEventListener('click', (event) => {
  const searchParams = new URLSearchParams(location.search);

  if (event.target?.classList.contains(ANSWER_LABEL)) {
    let selectedItem = event.target;

    localStorage.setItem(
      searchParams.get('question'),
      selectedItem.getAttribute('for')
    );
  } else if (event.target?.id === SUBMIT_BUTTON_ID) {
    createExplanationVideo(searchParams.get('question'));

    storeAnswer(event.target.htmlFor);
  } else if (event.target?.id === SUBMIT_BUTTON_ID) {
    let selectedAnswer = localStorage[searchParams.get('question')];
    selectedCorrectOrIncorrectAnswer(
      searchParams.get('question'),
      selectedAnswer
    );

    // createExplanationItem(searchParams.get('question'));
    createExplanationVideo(searchParams.get('question'));

    document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
    localStorage.setItem(`submitted${searchParams.get('question')}`, 'yes');
  } else if (event.target?.id === NEXT_QUESTION_BUTTON_ID) {
    handlePopupModal(event);
  }
});

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
    if (!location.search) {
      document.getElementById(START_BUTTON).click();
    } else {
      document.getElementById(NEXT_QUESTION_BUTTON_ID).click();
      handlePopupModal();
    }
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
