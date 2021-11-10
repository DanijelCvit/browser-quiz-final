export const createStart = () => {
  return String.raw`
    <header><h1>START PAGE HEADER HERE</h1></header>
    <a class=" btn btn-block btn-dark btn-block" id='nextQuestionButton' href='?page=quiz&question=0'>Start Quiz</a>
    `;
};
