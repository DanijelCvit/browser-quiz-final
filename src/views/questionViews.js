'use strict';

import { NEXT_QUESTION_BUTTON_ID, ANSWER_ITEM, ANSWER_INPUT, ANSWER_LABEL, ANSWER_LABEL_ID } from '../constants.js';
import { nextQuestion, selectAnswer } from '../listeners/questionListeners.js';
import { createDOMElement, } from '../utils/DOMUtils.js';








/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText, questionNumber) => {
  const answerElement = createDOMElement('li', { className: ANSWER_ITEM, });
  const answerRadioButton = createDOMElement('input', { className: ANSWER_INPUT });
  answerRadioButton.type = "radio";
  answerRadioButton.id = questionNumber;
  answerRadioButton.name = 'answer';
  const answerRadioLabel = createDOMElement('label', { className: ANSWER_LABEL, id: ANSWER_LABEL_ID });
  answerRadioLabel.setAttribute("for", questionNumber)
  answerRadioLabel.textContent = answerText;
  answerElement.appendChild(answerRadioButton)
  answerElement.appendChild(answerRadioLabel);
  answerRadioLabel.addEventListener('click', selectAnswer);

  return answerElement;
};

/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);
  const answerContainer = createDOMElement('ol');
  answerContainer.classList.add('answerList');
  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey], answerKey)
    // console.log(answerKey);
    answerContainer.appendChild(answer);
  }
  container.appendChild(answerContainer);

  return container;
};

/**
 * Creates and returns the next questions button
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'Next question';
  buttonElement.classList.add('btn', 'btn-block', 'btn-dark', 'btn-block');
  buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};

