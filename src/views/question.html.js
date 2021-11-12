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
<h1>${question}</h1>
<ul class="answerList">

  <li  class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${answers[0].key
    }" name="answer" checked autofocus/>
    <label class="${ANSWER_LABEL}"  for="${answers[0].key}"

      >${answers[0].text}</label
    >
  </li>

  <li  class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${answers[1].key
    }" name="answer" />
    <label class="${ANSWER_LABEL}" for="${answers[1].key}"


      >${answers[1].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${answers[2].key
    }" name="answer" />
    <label class="${ANSWER_LABEL}"  for="${answers[2].key}"


      >${answers[2].text}</label
    >
  </li>

  <li  class="${ANSWER_ITEM}">
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

 </div>
 </div>
 `;
};

export const createExplanationVideo = (question) => {

  const videoLink = quizData.questions[question].video;
  const description = quizData.questions[question].description;
  const questionPage = document.querySelector('.question-page');

  const explanationVideoDiv = document.createElement('div');
  explanationVideoDiv.classList.add('explanation-section');
  explanationVideoDiv.setAttribute('data-aos', "fade-left");

  explanationVideoDiv.innerHTML = `<h3 class='mb-4'>video source<h3>
  <iframe width="100%" height="315" src="${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p>${description}</p>
  `

  questionPage.appendChild(explanationVideoDiv);

  document.getElementById(SUBMIT_BUTTON_ID).classList.add('disabled');
  const inputElementArray = document.querySelectorAll("input[type='radio']");
  inputElementArray.forEach((input) => (input.disabled = true));
}

