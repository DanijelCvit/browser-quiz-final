import { shortageData } from '../init/app.js';

let questionTracker = [];
let questionAmount = 5;

export function random() {
  for (let i = 0; i < questionAmount; i++) {
    // Keep creating random numbers until the number is unique
    console.log(quizData.questions.length);
    let randomQuestion = Math.floor(Math.random() * quizData.questions.length);
    console.log(randomQuestion);

    // Add the question to the tracker
    questionTracker.push(randomQuestion);
  }
}
