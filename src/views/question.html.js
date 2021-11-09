import {
  ANSWER_INPUT,
  ANSWER_ITEM,
  ANSWER_LABEL,
  ANSWER_LABEL_ID,
} from '../constants.js';

import { quizData } from '../data.js';

export default `
<h1>{{question}}</h1>
<ul class="answerList">
  {{#each answersObject}}
  <li class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="{{this.key}}" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="{{this.key}}"
      >{{this.answer}}</label
    >
  </li>
  {{/each}}
</ul>
<a class=" btn btn-block btn-dark btn-block" id="nextQuestionButton" href="?page={{pathname}}">Next question</a>
`;

document.addEventListener('click', (event) => {
  if (event.target?.id === ANSWER_LABEL_ID) {
    let selectedItem = event.target;
    console.log(selectedItem.getAttribute('for'));
    quizData.questions[quizData.currentQuestionIndex].selected =
      selectedItem.getAttribute('for');
  }
});
