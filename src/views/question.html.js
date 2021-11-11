import {
  ANSWER_INPUT,
  ANSWER_ITEM,
  ANSWER_LABEL,
  NEXT_QUESTION_BUTTON_ID,
  SUBMIT_BUTTON_ID,
} from '../constants.js';
import { quizData } from '../data.js';

export const createExplanationItem = (question) => {
  // Get correct answer list element
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
  document.getElementById(SUBMIT_BUTTON_ID).classList.add('disabled');
  const inputElementArray = document.querySelectorAll("input[type='radio']");
  inputElementArray.forEach((input) => (input.disabled = true));

  // Auto expand accordion
  accordionButton.click();
};

export const createQuestion = (question, answers, pathname) => {
  return String.raw`
  <div class="item" data-aos="fade-up">
<h1>${question}</h1>
<ul class="answerList">
  <li  class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[0].key
  }" name="answer" checked autofocus/>
    <label class="${ANSWER_LABEL}"  for="${answers[0].key}"
      >${answers[0].text}</label
    >
  </li>

  <li  class="${ANSWER_ITEM}">

    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[1].key
  }" name="answer" />
    <label class="${ANSWER_LABEL}" for="${answers[1].key}"

      >${answers[1].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">

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
<a class=" btn btn-block btn-dark btn-block" id="${NEXT_QUESTION_BUTTON_ID}" href="?page=${
    pathname.page
  }&question=${pathname.question + 1}">Next question</a>
 <a class=" btn btn-block btn-dark btn-block" id="${SUBMIT_BUTTON_ID}" >Submit</a>
 </div>
 `;
};
