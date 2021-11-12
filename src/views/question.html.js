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

export const selectedCorrectOrIncorrectAnswer = (question, selected) => {
  // Get correct answer list element
  const answerList = document.querySelectorAll('li');
  const correctAnswer = quizData.questions[question].correct;

  const correctAnswerInput = document.getElementById(correctAnswer);
  const correctAnswerListItem = correctAnswerInput.parentElement;
  const correctAnswerLabel =
    document.getElementById(correctAnswer).nextElementSibling;

  // Create accordion container
  const accordionContainer = document.createElement('div');
  accordionContainer.classList.add('accordion');
  accordionContainer.id = 'accordionPanelsStayOpenExample';

  // Create accordion item
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');

  // Create accordion header
  const accordionHeader = document.createElement('h2');
  accordionHeader.classList.add('accordion-header');
  accordionHeader.id = 'panelsStayOpen-headingOne';

  // Create accordion button
  const accordionButton = document.createElement('button');
  accordionButton.classList.add('accordion-button', 'd-block', 'text-center');
  accordionButton.type = 'button';
  accordionButton.dataset.bsToggle = 'collapse';
  accordionButton.dataset.bsTarget = '#panelsStayOpen-collapseOne';

  // Add existing label text to button
  accordionButton.textContent = correctAnswerLabel.textContent;

  // Create accordion body container
  const accordionBodyContainer = document.createElement('div');
  accordionBodyContainer.id = 'panelsStayOpen-collapseOne';
  accordionBodyContainer.classList.add('accordion-collapse', 'collapse');

  // Create accordion body
  const accordionBody = document.createElement('div');
  accordionBody.classList.add('accordion-body');

  // Build accordion DOM object
  accordionHeader.appendChild(accordionButton);
  accordionBodyContainer.appendChild(accordionBody);
  accordionItem.append(accordionHeader, accordionBodyContainer);
  accordionContainer.appendChild(accordionItem);

  // Clear existing elements in list
  correctAnswerListItem.innerHTML = '';

  // Add accordion DOM object to list element
  correctAnswerListItem.appendChild(accordionContainer);

  // Disable submit button and other checkboxes

  if (correctAnswer === selected) {
    for (const item of answerList) {
      if (item.id == correctAnswer) {
        item.classList.add('selected-correct');
      }
    }
  } else {
    for (const item of answerList) {
      if (item.id == selected) {
        item.classList.add('selected-incorrect');
      }
      if (item.id == correctAnswer) {
        item.classList.add('selected-correct');
      }
    }
  }

  document.getElementById(SUBMIT_BUTTON_ID).classList.add('disabled');
  const inputElementArray = document.querySelectorAll("input[type='radio']");
  inputElementArray.forEach((input) => (input.disabled = true));
};

export const createQuestion = (question, answers, pathname) => {
  return String.raw`

  <div class=${MAIN_QUESTIONS_PAGE} data-aos="fade-up">
  <div class=${QUESTION_PAGE}>
  <div class="question-and-answers">
<h1>${question}</h1>
<ul class="answerList">


  <li  class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[0].key
  }" name="answer" />
    <label class="${ANSWER_LABEL}"  for="${answers[0].key}"

      >${answers[0].text}</label
    >
  </li>

  <li  id="${answers[1].key}" class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[1].key
  }" name="answer" />
    <label class="${ANSWER_LABEL}" for="${answers[1].key}"


      >${answers[1].text}</label
    >
  </li>

  <li id="${answers[2].key}"  class="${ANSWER_ITEM}">


    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[2].key
  }" name="answer" />
    <label class="${ANSWER_LABEL}"  for="${answers[2].key}"


      >${answers[2].text}</label
    >
  </li>


  <li  class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[3].key
  }" name="answer" />

    <label class="${ANSWER_LABEL}" for="${answers[3].key}"


      >${answers[3].text}</label
    >
  </li>

</ul>

<a  class=" btn btn-block btn-dark btn-block" id="${NEXT_QUESTION_BUTTON_ID}" href="?page=${
    pathname.page
  }&question=${pathname.question + 1}">Next question</a>
 <a class=" btn btn-block btn-dark btn-block" id="${SUBMIT_BUTTON_ID}" >Submit</a>

 </div>

 </div>
 </div>
 `;
};

export const popUpMassage = () => {
  const quizBody = document.getElementById('app');
  const msgBox = document.createElement('div');
  document.body.appendChild(msgBox);
  quizBody.classList.add('bluer');
  msgBox.innerHTML = `<div class="toast1" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
  
</div>`;
  setTimeout(() => {
    msgBox.innerHTML = '';
    quizBody.classList.remove('bluer');
  }, 3000);
};

export const createExplanationVideo = (question) => {
  const videoLink = quizData.questions[question].video;
  const description = quizData.questions[question].description;
  const questionPage = document.querySelector('.question-page');

  const explanationVideoDiv = document.createElement('div');
  explanationVideoDiv.classList.add('explanation-section');
  explanationVideoDiv.setAttribute('data-aos', 'fade-left');

  explanationVideoDiv.innerHTML = `<h3 class='mb-4'>video source<h3>
  <iframe width="100%" height="315" src="${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p>${description}</p>
  `;

  questionPage.appendChild(explanationVideoDiv);

  document.getElementById(SUBMIT_BUTTON_ID).classList.add('disabled');
  const inputElementArray = document.querySelectorAll("input[type='radio']");
  inputElementArray.forEach((input) => (input.disabled = true));
};
