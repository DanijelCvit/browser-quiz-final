import { START_PAGE } from '../constants.js';

export const createStart = () => {
  return String.raw`
    
    <div class=${START_PAGE}>
    <h1>START PAGE HEADER HERE</h1>
    <a class=" btn btn-block btn-dark btn-block" id='startButton' href='?page=quiz&question=0'>Start Quiz</a>
    </div>
    `;
};
