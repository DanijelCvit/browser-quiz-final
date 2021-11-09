'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';
import { handleSelectAnswer } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};
export const selectAnswer = (e) => {
  handleSelectAnswer(e);
};