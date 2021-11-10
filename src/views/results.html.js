const createListItems = (results) => {
  let list = '';

  for (const item of results) {
    if (localStorage[results.indexOf(item)] !== item.correct) {
      list += `
    <h4>${item.text}</h4>
    <li>selected: ${localStorage[results.indexOf(item)]} , correct: ${
        item.correct
      }</li>

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

export const createResults = (results) => {
  return `
<h1>Results</h1>
<ol class='results'>
  ${createListItems(results)}
</ol>
<p>Correct answers :${checkAnswer(results)} / ${results.length}</p>`;
};
