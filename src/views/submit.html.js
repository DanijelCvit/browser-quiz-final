import { quizData } from '../data.js';

const createLinkItems = (links) => {
  let list = '';
  for (const link of links) {
    list += `
          <p> ${link.text}</p>
          <p> <a href="${link.href}">${link.href}</a></p>
          `;
  }
  return list;
};

export const createSubmit = (header, pathname) => {
  return String.raw`
      <div class="item" data-aos="fade-up">
      <header><h1>${header}</h1></header>
      <p>The correct answer is: <br/>
      ${
        quizData.questions[pathname.question].answers[
          quizData.questions[pathname.question].correct
        ]
      }</p>
      <p>More info at:<br/>
    ${createLinkItems(quizData.questions[pathname.question].links)}</p>
      <a class=" btn btn-block btn-dark btn-block" id='nextQuestionButton' href='?page=${
        pathname.page
      }&question=${pathname.question + 1}'>Next question</a>
      </div>`;
};
