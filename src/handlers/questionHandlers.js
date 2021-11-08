'use strict';

import { QUESTION_CONTAINER_ID, ANSWER_LABEL_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export const handleNextQuestion = () => {
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  }
  showCurrentQuestion();
};


export const handleSelectAnswer = (e) => {
  let selectedItem = e.currentTarget;
  console.log(selectedItem.getAttribute('for'));
  quizData.questions[quizData.currentQuestionIndex].selected = selectedItem.getAttribute('for');
};