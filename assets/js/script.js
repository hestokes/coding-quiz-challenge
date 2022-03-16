var menu = document.querySelector(".menu");

var main = document.querySelector(".main");
var quiz = document.querySelector(".quiz");

var choice0 = document.querySelector(".btn0");
var choice1 = document.querySelector(".btn1");
var choice2 = document.querySelector(".btn2");
var choice3 = document.querySelector(".btn3");
let score = 0;

var highscore = localStorage.getItem("highscore");
const scoreText = document.querySelector(".score");

var start = function () {
  //Start and introduction
  var introContainer = document.createElement("div");
  var h1El = document.createElement("h1");
  var pEl = document.createElement("p");
  var buttonEl = document.createElement("button");

  h1El.textContent = "Coding Quiz Challenge";
  pEl.textContent =
    "Try to answer the following code-relrated questions within the time limit. Keep in mind that incorrect answers will penaltize your score time by 10 seconds";
  buttonEl.textContent = "Start Quiz";

  introContainer.className = "intro-main";
  h1El.className = "intro-title";
  pEl.className = "intro-info";
  buttonEl.className = "start-button";

  main.appendChild(introContainer);
  introContainer.appendChild(h1El);
  introContainer.appendChild(pEl);
  introContainer.appendChild(buttonEl);

  buttonEl.addEventListener("click", function () {
    introContainer.remove();
    timeCount();
  });
};

//Add quiz Questions TODO

var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed with __________.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. paranthesis",
      "4. square brackets",
    ],
    answer: "3. paranthesis",
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: "3. quotes",
  },
  {
    question:
      "A very useful tool to use during development and debugging for printing content to the debugger is:",
    choices: [
      "1. Javascript",
      "2. terminal / bash",
      "3. for loops",
      "4. console log",
    ],
    answer: "4. console log",
  },
];

let startTimer;

var timeCount = function () {
  quizTimerCounter = 0;
  totalTime = 75;
  timeLeft.textContent = totalTime;

  startTimer = setInterval(function () {
    totalTime--;
    timeLeft.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (quizTimerCounter < quizQuestions.length - 1) {
      }
    }
  }, 1000);

  getQuestions();
};
