import {
  ANSWER_INPUT,
  ANSWER_ITEM,
  ANSWER_LABEL,
  NEXT_QUESTION_BUTTON_ID,
  SUBMIT_BUTTON_ID,
  QUESTION_PAGE,
  MAIN_QUESTIONS_PAGE,
} from '../constants.js';
import { quizData } from '../data.js';

export const createQuestion = (question, answers, pathname) => {
  return String.raw`

  <div class=${MAIN_QUESTIONS_PAGE} data-aos="fade-up">
  <div class=${QUESTION_PAGE}>
  <div class="question-and-answers">
<h1 class="mb-5">${question}</h1>
<ul class="answerList">


  <li  class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[0].key
  }" name="answer" />
    <span class="your-choice">a</span>
    <label data-testid="answer-a" class="${ANSWER_LABEL}"  for="${
    answers[0].key
  }"

      > ${answers[0].text}</label
    >
  </li>


  <li  class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[1].key
  }" name="answer" />
    <span class="your-choice">b</span>
    <label data-testid="answer-b" class="${ANSWER_LABEL}" for="${
    answers[1].key
  }"


      >${answers[1].text}</label
    >
  </li>

  <li  class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[2].key
  }" name="answer" />
    <span class="your-choice">c</span>
    <label data-testid="answer-c" class="${ANSWER_LABEL}"  for="${
    answers[2].key
  }"


      >${answers[2].text}</label
    >
  </li>


  <li  class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[3].key
  }" name="answer" />
    <span class="your-choice">d</span>
    <label data-testid="answer-d" class="${ANSWER_LABEL}" for="${
    answers[3].key
  }"


      >${answers[3].text}</label
    >
  </li>

</ul>

<a  data-testid="next-button" class="next-question-button btn btn-block btn-dark btn-block" id="${NEXT_QUESTION_BUTTON_ID}" href="?page=${
    pathname.page
  }&question=${pathname.question + 1}">Next question</a>
 <a data-testid="submit" class="submit-button btn btn-block btn-dark btn-block" id="${SUBMIT_BUTTON_ID}" >Submit</a>

 </div>

 </div>
 </div>
 `;
};

export const createPopupMessage = (message, id) => {
  const msgBox = document.createElement('div');
  document.body.appendChild(msgBox);
  msgBox.innerHTML = String.raw`<div id=${id} class="toast align-items-center position-absolute top-0 end-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
   ${message}
   </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`;
};

export const createExplanationVideo = (question) => {
  document.getElementById(SUBMIT_BUTTON_ID).classList.add('disabled');
  const inputElementArray = document.querySelectorAll("input[type='radio']");
  inputElementArray.forEach((input) => (input.disabled = true));

  const videoLink = quizData[question].video;
  const resources = quizData[question].links;

  if (!videoLink) {
    return;
  }

  const questionPage = document.querySelector('.question-page');

  const explanationVideoDiv = document.createElement('div');
  explanationVideoDiv.classList.add('explanation-section');
  explanationVideoDiv.setAttribute('data-aos', 'fade-left');

  explanationVideoDiv.innerHTML = `<h2 class='mb-4'>video source<h2>
  <iframe width="100%" height="315" src="${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h4>${resources[0].text}<h4>
  <p><a href="${resources[0].href}">${resources[0].href}</a><p>
  <h4>${resources[1].text}<h4>
  <p><a href="${resources[1].href}">${resources[1].href}</a><p>
  `;

  questionPage.appendChild(explanationVideoDiv);
};
