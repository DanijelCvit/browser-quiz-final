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
  if (savedAnswer && savedAnswer !== 'undefined') {
    const savedAnswerElement = document.getElementById(savedAnswer);
    savedAnswerElement.checked = true;
    savedAnswerElement.nextElementSibling.style.color = 'rgb(0,143,149';
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

const handleSubmitAnswer = () => {
  document.getElementById(SUBMIT_BUTTON_ID).click();
  document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
};

const storeAnswer = (answer) => {
  const searchParams = new URLSearchParams(location.search);
  localStorage.setItem(searchParams.get('question'), answer);
};

const setSelectedColor = () => {
  const [...spanElementsArray] = document.querySelectorAll('.your-choice');
  spanElementsArray.forEach((span) => {
    if (span.nextElementSibling.htmlFor === localStorage[getQuestionNumber()]) {
      span.style.color = 'rgb(0,143,149';
    } else {
      span.style.color = 'white';
    }
  });
  // spanElement.style.color = 'rgb(0,143,149';
};

const handleSelectAnswer = (event) => {
  const searchParams = new URLSearchParams(location.search);
  const submitted = localStorage.getItem(`submitted${getQuestionNumber()}`);
  const question = quizData[+searchParams.get('question')];

  if (event.target?.classList.contains(ANSWER_LABEL) && submitted !== 'yes') {
    storeAnswer(event.target.htmlFor);
    setSelectedColor();
  } else if (event.target?.id === SUBMIT_BUTTON_ID) {
    createExplanationVideo(searchParams.get('question'));
    event.target.classList.add('disabled');
    document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
    localStorage.setItem(`submitted${searchParams.get('question')}`, 'yes');
    document.querySelector(
      `#${quizData[getQuestionNumber()].correct}~label`
    ).style.color = 'green';
  }
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
  storeAnswer(selectedAnswer.id);
  setSelectedColor();
};

const handleKeyboardInput = (event) => {
  const answerKeys = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D'];

  if (event.key === 'Enter') {
    if (!location.search) {
      document.getElementById(START_BUTTON).click();
    } else {
      document.getElementById(NEXT_QUESTION_BUTTON_ID).click();
    }
  } else if (event.key === 's' || event.key === 'S') {
    handleSubmitAnswer();
  } else if (answerKeys.includes(event.key)) {
    handleAnswerKeys(event);
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
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
