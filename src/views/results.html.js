const createListItems = (results) => {
  let list = '';
  for (const { selected, correct } of results) {
    list += `
    <li>selected: ${selected}, correct: ${correct}</li>

    `;
  }
  return list;
};

export const createResults = (results) => {
  return `
  <h1>Results</h1>
  <ul class='results'>
    ${createListItems(results)}
</ul>`;
};
