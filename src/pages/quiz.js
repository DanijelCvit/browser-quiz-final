import { createQuestion } from '../views/question.html.js';
import {
  SUBMIT_BUTTON_ID,
  ANSWER_LABEL,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createExplanationItem } from '../views/question.html.js';
export const quizData = JSON.parse(localStorage.getItem('questions'));
const handleSubmitAnswer = () => {
  document.getElementById(SUBMIT_BUTTON_ID).click();
  document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
};

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
  document.getElementById(savedAnswer).checked = true;

  // If user already submitted his answer show that answer again
  const submittedAnswer = localStorage.getItem(`submitted${qNumber}`);
  if (submittedAnswer === 'yes') {
    handleSubmitAnswer();
  }
};

const storeAnswer = (answer) => {
  const searchParams = new URLSearchParams(location.search);
  localStorage.setItem(searchParams.get('question'), answer);
};

document.addEventListener('change', (event) => {
  if (event.target?.name === 'answer') {
    storeAnswer(event.target.id);
  }
});

document.addEventListener('click', (event) => {
  const searchParams = new URLSearchParams(location.search);

  if (event.target?.classList.contains(ANSWER_LABEL)) {
    storeAnswer(event.target.htmlFor);
  } else if (event.target?.id === SUBMIT_BUTTON_ID) {
    createExplanationItem(searchParams.get('question'));
    document.getElementById(NEXT_QUESTION_BUTTON_ID).focus();
    localStorage.setItem(`submitted${searchParams.get('question')}`, 'yes');
  }
});

const handleSelectAnswer = (event) => {
  const searchParams = new URLSearchParams(location.search);

  if (location.search === '') {
    location.search = `?page=quiz&question=0`;
  } else if (event.target?.name === 'answer') {
    storeAnswer(event.target.id);

    if (+searchParams.get('question') === quizData.questions.length - 1) {
      location.search = `?page=results`;
    } else {
      location.search = `?page=quiz&question=${
        +searchParams.get('question') + 1
      }`;
    }
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
};

//
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
