'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';
import checkAnswer from '../handlers/answerQuestion.js';

import { handleSelectAnswer } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  checkAnswer()
  handleNextQuestion();
};
export const selectAnswer = (e) => {
  handleSelectAnswer(e);
};