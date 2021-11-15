import { quizData } from '../data.js';
import {
  SUBMIT_BUTTON_ID,
  ANSWER_LABEL,
  NEXT_QUESTION_BUTTON_ID,
  START_BUTTON,
} from '../constants.js';
import {
  createExplanationVideo,
  createPopupMessage,
  createQuestion,
} from '../views/question.html.js';

export const quiz = (qNumber) => {
  // Create path for next question
  const pathname = getNextPathname(qNumber);

  // Get the data for current question
  const currentQuestion = getQuizData(qNumber);

  // Generate new HTML
  const quizTemplate = createQuestion(
    currentQuestion.currentQuestionText,
    currentQuestion.currentAnswersData,
    pathname
  );

  // Add HTML to app
  document.getElementById('app').innerHTML = quizTemplate;

  // Restore any saved answer from local storage
  restoreSavedAnswer(qNumber);

  // If user already submitted his answer show that answer again
  checkSubmitAnswer(qNumber);
};

const getNextPathname = (qNumber) => {
  let pathname = { page: 'quiz', question: qNumber };

  // Redirect to results if it's last question
  if (qNumber === quizData.length - 1) {
    pathname.page = 'results';
  }

  return pathname;
};

const getQuizData = (qNumber) => {
  const currentQuestionText = quizData[qNumber].text;
  const currentAnswersObject = quizData[qNumber].answers;

  // Create an array of answer objects
  const currentAnswersData = Object.entries(currentAnswersObject).map(
    ([key, text]) => ({
      key,
      text,
    })
  );
  return { currentQuestionText, currentAnswersData };
};

const restoreSavedAnswer = (qNumber) => {
  const savedAnswer = localStorage.getItem(qNumber);

  if (savedAnswer && savedAnswer !== 'undefined') {
    const savedAnswerElement = document.getElementById(savedAnswer);
    savedAnswerElement.checked = true;
    savedAnswerElement.nextElementSibling.style.color = 'rgb(0,143,149';
    savedAnswerElement.focus();
  } else {
    const selectedAnswer = document.getElementById('a');
    selectedAnswer.focus();
  }
};

const getQuestionNumber = () => {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get('question');
};

const checkAnswer = () => {
  const currentQuestion = getQuestionNumber();
  const selectedAnswer = localStorage.getItem(currentQuestion);
  const correctAnswer = quizData[currentQuestion].correct;
  return selectedAnswer === correctAnswer;
};

const checkSubmitAnswer = (qNumber) => {
  const submittedAnswer = localStorage.getItem(`submitted${qNumber}`);
  if (submittedAnswer === 'yes') {
    document.getElementById(SUBMIT_BUTTON_ID).click();
    document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
  }
};

const storeAnswer = (answer) => {
  localStorage.setItem(getQuestionNumber(), answer);
};

const setSelectedColor = () => {
  const spanElementsList = document.querySelectorAll('.your-choice');
  spanElementsList.forEach((span) => {
    if (span.nextElementSibling.htmlFor === localStorage[getQuestionNumber()]) {
      span.style.color = 'rgb(0,143,149';
    } else {
      span.style.color = 'white';
    }
  });
};

const handleSubmitAnswer = (event) => {
  localStorage.setItem(`submitted${getQuestionNumber()}`, 'yes');

  createExplanationVideo(getQuestionNumber());

  const correct = quizData[getQuestionNumber()].correct;
  document.querySelector(`#${correct}~label`).style.color = 'green';
  document.querySelector(`#${correct}~span`).style.color = 'green';

  event.target.classList.add('disabled');
  document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
};

const handleSelectAnswer = (event) => {
  const submitted = localStorage.getItem(`submitted${getQuestionNumber()}`);

  if (event.target?.classList.contains(ANSWER_LABEL) && submitted !== 'yes') {
    storeAnswer(event.target.htmlFor);
    setSelectedColor();
  } else if (event.target?.id === SUBMIT_BUTTON_ID) {
    handleSubmitAnswer(event);
  }
};

const handleAnswerKeys = (event) => {
  const inputElementsList = document.querySelectorAll("input[type='radio']");
  const inputElementsArray = Array.from(inputElementsList);

  const selectedAnswer = inputElementsArray.find(
    (input) => input.id === event.key.toLowerCase()
  );
  selectedAnswer.checked = true;
  selectedAnswer.focus();

  storeAnswer(selectedAnswer.id);
  setSelectedColor();
};

const handleKeyboardInput = (event) => {
  const answerKeys = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D'];
  const submitted = localStorage.getItem(`submitted${getQuestionNumber()}`);

  if (event.key === 'Enter') {
    if (!location.search) {
      document.getElementById(START_BUTTON).click();
    } else {
      document.getElementById(NEXT_QUESTION_BUTTON_ID).click();
    }
  } else if ((event.key === 's' || event.key === 'S') && submitted !== 'yes') {
    handleSubmitAnswer();
  } else if (answerKeys.includes(event.key && submitted !== 'yes')) {
    handleAnswerKeys(event);
  } else if (
    event.key === 'ArrowUp' ||
    event.key === 'ArrowDown' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight'
  ) {
    const selectedAnswer = document.querySelector('input:checked');
    storeAnswer(selectedAnswer.id);
    setSelectedColor();
  }
};

const initializeGuessCounter = () => {
  let multipleClickCounter = 0;
  createPopupMessage(' &#128557; Stop guessing!', 'toastGuess');
  const toastLive = document.getElementById('toastGuess');
  const toast = new bootstrap.Toast(toastLive);

  const multiplePress = (event) => {
    const submitted = localStorage.getItem(`submitted${getQuestionNumber()}`);

    if (event.target?.classList.contains(ANSWER_LABEL) && submitted !== 'yes') {
      multipleClickCounter += 1;
      if (multipleClickCounter === 3) {
        toast.show();
      }
    }
  };

  return multiplePress;
};

const initializeQuickAnswer = () => {
  createPopupMessage('Wrong answer! Please take your time', 'toastQuickAnswer');
  const toastLive = document.getElementById('toastQuickAnswer');
  const toast = new bootstrap.Toast(toastLive);

  const quickAnswer = (event) => {
    const submitted = localStorage.getItem(`submitted${getQuestionNumber()}`);

    if (
      event.target?.id === NEXT_QUESTION_BUTTON_ID &&
      !checkAnswer() &&
      submitted !== 'yes'
    ) {
      toast.show();
      event.preventDefault();
      document.getElementById(SUBMIT_BUTTON_ID).click();
    }
  };

  // Clear event listener after 5 seconds
  setTimeout(() => {
    document.removeEventListener('click', quickAnswer);
  }, 5000);

  return quickAnswer;
};

document.addEventListener('click', initializeQuickAnswer());
document.addEventListener('click', handleSelectAnswer);
document.addEventListener('click', initializeGuessCounter());
document.addEventListener('keyup', handleKeyboardInput);
