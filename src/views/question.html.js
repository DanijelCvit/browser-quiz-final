import {
  ANSWER_INPUT,
  ANSWER_ITEM,
  ANSWER_LABEL,
  NEXT_QUESTION_BUTTON_ID,
  SUBMIT_BUTTON_ID,
  QUESTION_PAGE,
} from '../constants.js';
import { quizData } from '../data.js';

export const selectedCorrectOrIncorrectAnswer = (question, selected) => {
  // Get correct answer list element
  const answerList = document.querySelectorAll('li')
  const correctAnswer = quizData.questions[question].correct;

  if (correctAnswer === selected) {

    for (const item of answerList) {
      if (item.id == correctAnswer) {
        item.classList.add('selected-correct')
      }
    }

  } else {
    for (const item of answerList) {
      if (item.id == selected) {
        item.classList.add('selected-incorrect')
      }
      if (item.id == correctAnswer) {
        item.classList.add('selected-correct')

      }
    }
  }


  document.getElementById(SUBMIT_BUTTON_ID).classList.add('disabled');
  const inputElementArray = document.querySelectorAll("input[type='radio']");
  inputElementArray.forEach((input) => (input.disabled = true));


};

export const createQuestion = (question, answers, pathname) => {
  return String.raw`
  <div class=${QUESTION_PAGE} data-aos="fade-up">
<h1>${question}</h1>
<ul class="answerList">

  <li id="${answers[0].key}" class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${answers[0].key
    }" name="answer" checked autofocus/>
    <label class="${ANSWER_LABEL}"  for="${answers[0].key}"

      >${answers[0].text}</label
    >
  </li>

  <li  id="${answers[1].key}" class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${answers[1].key
    }" name="answer" />
    <label class="${ANSWER_LABEL}" for="${answers[1].key}"


      >${answers[1].text}</label
    >
  </li>

  <li id="${answers[2].key}"  class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${answers[2].key
    }" name="answer" />
    <label class="${ANSWER_LABEL}"  for="${answers[2].key}"


      >${answers[2].text}</label
    >
  </li>

  <li id="${answers[3].key}"   class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${answers[3].key
    }" name="answer" />
    <label class="${ANSWER_LABEL}" for="${answers[3].key}"


      >${answers[3].text}</label
    >
  </li>

</ul>

<a class=" btn btn-block btn-dark btn-block" id="${NEXT_QUESTION_BUTTON_ID}" href="?page=${pathname.page
    }&question=${pathname.question + 1}">Next question</a>
 <a class=" btn btn-block btn-dark btn-block" id="${SUBMIT_BUTTON_ID}" >Submit</a>

 </div>
 `;
};
