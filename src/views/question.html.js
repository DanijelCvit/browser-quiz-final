export default `
<h1>{{question}}</h1>
<ul class='answers'>
  {{#each answersObject}}
    <li>{{this.key}} {{this.answer}}</li>
  {{/each}}
</ul>
<a id='nextQuestionButton' href='?page={{pathname}}'>Next question</a>
`;
