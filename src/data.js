'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'Which is the correct CSS syntax?',
      answers: {
        a: 'p {text-size:bold;}',
        b: 'p {font-weight:bold;}  ',
        c: '<p style="font-size:bold;">',
        d: '<p style="text-size:bold;">',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },

    // Add more questions here
    {
      text: 'Which tool can you use to ensure code quality?',
      answers: {
        a: 'Angular',
        b: 'jQuery',
        c: 'RequireJS',
        d: 'ESLint',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'sitepoint',
          href: 'https://www.sitepoint.com/simple-javascript-quiz/',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Which event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'onmouseclick',
        b: 'onclick',
        c: 'onmouseover',
        d: 'onchange',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'sitepoint',
          href: 'https://www.sitepoint.com/simple-javascript-quiz/',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
      ],
    },
    {
      text: 'Inside which HTML element do we put the JavaScript?',
      answers: {
        a: '<scripting>  ',
        b: '<js>',
        c: '<javascript>',
        d: '<script>  ',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text:
        'What is the correct JavaScript syntax to change the content of the HTML element below?',
      answers: {
        a: '#demo.innerHTML = "Hello World!";  ',
        b: 'document.getElementById("demo").innerHTML = "Hello World!";  ',
        c: 'document.getElementByName("p").innerHTML = "Hello World!";',
        d: 'document.getElement("p").innerHTML = "Hello World!";',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Where is the correct place to insert a JavaScript?',
      answers: {
        a: 'The <head> section',
        b: 'The <body> section',
        c: 'Both the <head> section and the <body> section are correct  ',
        d: 'The <title> section',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'How do you write "Hello World" in an alert box?',
      answers: {
        a: 'msgBox("Hello World");',
        b: 'alertBox("Hello World");',
        c: 'msg("Hello World");',
        d: 'alert("Hello World");  ',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'sitepoint',
          href: 'https://www.sitepoint.com/simple-javascript-quiz/',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
      ],
    },
    {
      text: 'How to write an IF statement in JavaScript?',
      answers: {
        a: 'if (i == 5)  ',
        b: 'if i = 5 then',
        c: 'if i = 5',
        d: 'if i == 5 then',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'sitepoint',
          href: 'https://www.sitepoint.com/simple-javascript-quiz/',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
      ],
    },
    {
      text: 'What does CSS stand for?',
      answers: {
        a: 'Colorful style sheets ',
        b: 'Computer style sheets',
        c: 'Cascading style sheet',
        d: 'Creative style sheets',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/quiztest',
        },
      ],
    },
  ],
};
