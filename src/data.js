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
  // the questions in the quiz
  questions: [
    {
      text: 'Which is the correct CSS syntax?',
      answers: {
        a: 'p {text-size:bold;}',
        b: 'p {font-weight:bold;}  ',
        c: '&lt;p style="font-size:bold;"&gt;',
        d: '&lt; style="text-size:bold;"&gt;',
      },
      correct: 'b',
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
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
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
        a: '&lt;scripting&gt;  ',
        b: '&lt;js&gt;',
        c: '&lt;javascript&gt',
        d: '&lt;script&gt  ',
      },
      correct: 'd',
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
      text: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
      answers: {
        a: '#demo.innerHTML = "Hello World!";  ',
        b: 'document.getElementById("demo").innerHTML = "Hello World!";  ',
        c: 'document.getElementByName("p").innerHTML = "Hello World!";',
        d: 'document.getElement("p").innerHTML = "Hello World!";',
      },
      correct: 'b',
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
        a: 'The &lt;head&gt; section',
        b: 'The &lt;body&gt; section',
        c: 'Both the &lt;head&gt; section and the &lt;body&gt; section are correct  ',
        d: 'The &lt;title&gt; section',
      },
      correct: 'c',
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
        a: 'if (i == 5) {}  ',
        b: 'if i = 5 then',
        c: 'if i = 5',
        d: 'if i == 5 then',
      },
      correct: 'a',
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
      text: 'Which operator is used to assign a value to a variable?',
      answers: {
        a: '*',
        b: 'x',
        c: '= ',
        d: '-',
      },
      correct: 'c',
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
      text: 'How do you find the number with the highest value of x and y?',
      answers: {
        a: 'top(x, y)',
        b: 'Math.max(x, y)  ',
        c: 'ceil(x, y)',
        d: 'Math.ceil(x, y) ',
      },
      correct: 'b',
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
      text: 'In HTML, which attribute is used to specify that an input field must be filled out?',
      answers: {
        a: 'formvalidate',
        b: 'required  ',
        c: 'placeholder',
        d: 'validate',
      },
      correct: 'b',
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
      text: ' Which input type defines a slider control?',
      answers: {
        a: 'search',
        b: 'range    ',
        c: 'controls',
        d: 'slider',
      },
      correct: 'b',
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
      text: 'How can you make a bulleted list?',
      answers: {
        a: '&lt; ol;"&gt;',
        b: ' &lt;dl ;"&gt;',
        c: ' &lt;ul ;"&gt;',
        d: ' &lt;list ;"&gt;',
      },
      correct: 'c',
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
      text: 'How can you make a numbered list?',
      answers: {
        a: '&lt; ol;"&gt;',
        b: ' &lt;dl ;"&gt;',
        c: ' &lt;ul ;"&gt;',
        d: ' &lt;list ;"&gt;',
      },
      correct: 'a',
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
      text: 'What is the correct HTML for making a text input field?',
      answers: {
        a: '&lt; textfield;"&gt;',
        b: ' &lt;input type="text" ;"&gt;',
        c: ' &lt;textinput type="text" ;"&gt;',
        d: ' &lt;input type="textfield" ;"&gt;',
      },
      correct: 'b',
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
      text: 'What is the correct HTML for inserting an image?',
      answers: {
        a: '&lt; img src="image.gif" alt="MyImage";"&gt;',
        b: ' &lt;img alt="MyImage" ;"&gt; image.gif &lt;/img ;"&gt;',
        c: ' &lt;img href="image.gif" alt="MyImage" ;"&gt;',
        d: ' &lt;image src="image.gif" alt="MyImage" ;"&gt;',
      },
      correct: 'a',
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
      text: 'What is the correct way to write a JavaScript array?',
      answers: {
        a: 'var colors = "red", "green", "blue"',
        b: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        c: 'var colors = (1:"red", 2:"green", 3:"blue")',
        d: 'var colors = ["red", "green", "blue"]  ',
      },
      correct: 'd',
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
