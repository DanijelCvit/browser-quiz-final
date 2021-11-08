export default `
<h1>Results</h1>
<ul class='results'>
  {{#each results}}
    <li>selected: {{this.selected}}, correct: {{this.correct}}</li>
  {{/each}}
</ul>
`;
