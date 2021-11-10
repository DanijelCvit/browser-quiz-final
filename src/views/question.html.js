import {
  ANSWER_INPUT,
  ANSWER_ITEM,
  ANSWER_LABEL,
  ANSWER_LABEL_ID,
  NEXT_QUESTION_BUTTON_ID,
  SUBMIT_BUTTON_ID,
} from '../constants.js';

export const createQuestion = (question, answers, pathname) => {
  return String.raw`
  <div class="item" data-aos="fade-up">
<h1>${question}</h1>
<ul class="answerList">
  <li class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[0].key
  }" name="answer" checked autofocus/>
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${
    answers[0].key
  }"
      >${answers[0].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">

    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[1].key
  }" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${
    answers[1].key
  }"

      >${answers[1].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">

    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[2].key
  }" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${
    answers[2].key
  }"

      >${answers[2].text}</label
    >
  </li>

  <li class="${ANSWER_ITEM}">
    <input class="${ANSWER_INPUT}" type="radio" id="${
    answers[3].key
  }" name="answer" />
    <label class="${ANSWER_LABEL}" id="${ANSWER_LABEL_ID}" for="${
    answers[3].key
  }"

      >${answers[3].text}</label
    >
  </li>

</ul>
<a class=" btn btn-block btn-dark btn-block" id="${NEXT_QUESTION_BUTTON_ID}" href="?page=${
    pathname.page
  }&question=${pathname.question + 1}">Next question</a>
 <a class=" btn btn-block btn-dark btn-block" id="${SUBMIT_BUTTON_ID}" href="?page=submit&question=${
    pathname.question
  }">Submit</a>
 </div>
 `;
};
