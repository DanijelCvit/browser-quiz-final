const createListItems = (correctAnswers) => {
  let list = '';
  for (let i = 0; i < correctAnswers.length; i++) {
    list += `
    <li>selected: ${
      localStorage[i] === undefined ? '?' : localStorage[i]
    }, correct: ${correctAnswers[i]}</li>

    `;
  }
  return list;
};

export const createResults = (correctAnswers) => {
  return String.raw`
    <div class="item" data-aos="fade-up">
  <h1>Results</h1>
  <ul class='results'>
    ${createListItems(correctAnswers)}
</ul></div>
`;
};
