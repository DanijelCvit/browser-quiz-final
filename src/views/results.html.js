import { RESULT_PAGE } from '../constants.js';

const createListItems = (results) => {
  let list = '';

  for (const item of results) {
    if (localStorage[results.indexOf(item)] !== item.correct) {
      list += `
    <h4>${item.text}</h4>
    <button class="btn btn-outline-dark mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${results.indexOf(item)}" aria-expanded="false" aria-controls="collapseExample${results.indexOf(item)}">
    Learn More
  </button>
    <div class="collapse" id="collapseExample${results.indexOf(item)}">
    <div class="card card-body">
    <li><p class='selected'>selected: ${item.answers[localStorage[results.indexOf(item)]]}</p></li>
    <p><span class='correct'>Learn about it :</span> ${item.description} <p>
    <p>${item.links[0].text} : <a href='${item.links[0].href}'>${item.links[0].href}</a></p>
    <p>${item.links[1].text} : <a href='${item.links[1].href}'>${item.links[1].href}</a></p>
        </div>
        </div>
    `;
    }
  }
  return list;
};

let resultCounter = 0;
const checkAnswer = (results) => {
  for (const item of results) {
    if (localStorage[results.indexOf(item)] === item.correct) {
      resultCounter += 1;
    }
  }

  return resultCounter;
};

const evaluate = (result) => {
  let yourEvaluate = '';
  if (result <= 3) {
    yourEvaluate = 'try again &#128533'
  } else if (result > 3 && result <= 6) {
    yourEvaluate = 'Good &#128522'
  } else if (result > 6 && result <= 8) {
    yourEvaluate = 'Very Good &#128513'
  } else {
    yourEvaluate = 'Amazing &#128525'
  }

  return yourEvaluate;
}


export const createResults = (results) => {
  let correctAnswerResult = checkAnswer(results);
  return String.raw`
<div class=${RESULT_PAGE} data-aos="fade-up">
<div class='incorrect-answer'>
<h1>Incorrect Answers</h1>
<ol class='results'>
  ${createListItems(results)}
</ol>
</div>
<div class='result-summary'>
<h1 class='mb-5'>Quiz Summary</h1>
<h5 class='mb-5'>Correct answers : ${correctAnswerResult} / ${results.length}</h5>
<h5 class='mb-5'>Correct Average : ${(correctAnswerResult * 100) / results.length}%</h5>
<h5 class='mb-5'>Evaluate : ${evaluate(correctAnswerResult)}</h5>
<a class="try-again btn btn-block btn-dark btn-block" id="" href="index.html">Try Again</a>
</div>
</div>`;
};
