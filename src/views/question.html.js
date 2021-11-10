import {
  ANSWER_INPUT,
  ANSWER_ITEM,
  ANSWER_LABEL,
  ANSWER_LABEL_ID,
} from '../constants.js';

export const createQuestion = (question, answers, pathname) => {
  return `
<h1>${question}</h1>
<ul class="answerList">
  <li class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${answers[0].key}" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${answers[0].key}"
      >${answers[0].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${answers[0].key}" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${answers[1].key}"
      >${answers[1].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${answers[0].key}" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${answers[2].key}"
      >${answers[2].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${answers[0].key}" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${answers[3].key}"
      >${answers[3].text}</label
    >
  </li>

</ul>
<a class=" btn btn-block btn-dark btn-block" id="nextQuestionButton" href="?page=${pathname}">Next question</a>
`;
};
