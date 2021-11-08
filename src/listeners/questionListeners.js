'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';
import checkAnswer from '../handlers/answerQuestion.js';

export const nextQuestion = () => {
  checkAnswer()
  handleNextQuestion();
};
