import { quiz } from '../pages/quiz.js';
import { results } from '../pages/results.js';
import { start } from '../pages/start.js';

// Error path
const err = () => {
  document.getElementById('app').innerHTML = `<h1>Error: page not found<h1>`;
};

const parseSearch = (string) => {
  const pages = ['error', 'start', 'quiz', 'results'];
  const beginsWithPage = string.slice(0, 5) === 'page=';
  const beginsWithQuestion = string.slice(0, 9) === 'question=';
  const parsedData = { type: 'error', route: 0 };

  if (beginsWithPage) {
    parsedData.type = 'page';
    const restString = string.slice(5);
    const pagesIndex = pages.indexOf(restString);
    parsedData.route = pagesIndex === -1 ? 0 : pagesIndex;
  } else if (beginsWithQuestion) {
    parsedData.type = 'question';
    const restString = string.slice(9);
    if (Number(restString) != NaN) {
      parsedData.route = 2;
      parsedData.number = +restString;
    }
  }
  return parsedData;
};

export const findRoute = (searchString = '') => {
  const routes = [
    { route: err },
    { route: start },
    { route: quiz },
    { route: results },
  ];

  const stringArray = searchString.split('&');

  if (stringArray.length === 1) {
    if (!stringArray[0]) {
      return routes[1]; // "start";
    } else {
      const searchArgument = parseSearch(stringArray[0]);
      if (searchArgument.route === 2) {
        return routes[0]; // error
      } else {
        return routes[searchArgument.route];
      }
    }
  } else if (stringArray.length === 2) {
    if (!stringArray[0]) {
      return routes[0]; //err;
    } else {
      const firstArgument = parseSearch(stringArray[0]);
      const secondArgument = parseSearch(stringArray[1]);
      if (
        firstArgument.type === secondArgument.type ||
        !firstArgument.route ||
        !secondArgument.route
      ) {
        return routes[0]; //err
      } else {
        if (firstArgument.route === secondArgument.route) {
          const firstLength = Object.values(firstArgument).length;
          const secondLength = Object.values(secondArgument).length;
          const question =
            firstLength > secondLength ? firstArgument : secondArgument;
          routes[2].number = question.number;

          return routes[2];
        }
      }
    }
  }
  return routes[0];
};
