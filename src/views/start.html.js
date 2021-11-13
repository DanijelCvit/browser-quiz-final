import { START_PAGE } from '../constants.js';

export const createStart = () => {
  return String.raw`
    
    <div class=${START_PAGE}>
    <p>WELCOME IN </p>
    <p>A-TEAM QUIZ</p>
    <a class="start-button btn btn-block btn-dark btn-block" id='startButton' href='?page=quiz&question=0'>Start Quiz</a>
    </div>
    `;
};
