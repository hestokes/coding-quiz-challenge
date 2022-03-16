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
const previousHighScore = document.querySelector(".previousHighScore");

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

var getQuestions = function () {
  var questionContainer = document.createElement("div");
  var questionPEl = document.createElement("p");
  var buttonContainer = document.createElement("div");
  var button0 = document.createElement("button");
  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");

  if (quizTimerCounter == quizQuestions.length) {
    endTheGame();
    return;
  }

  questionPEl.textContent = quizQuestions[quizTimerCounter].question;
  button0.textContent = quizQuestions[quizTimerCounter].choices[0];
  button1.textContent = quizQuestions[quizTimerCounter].choices[1];
  button2.textContent = quizQuestions[quizTimerCounter].choices[2];
  button3.textContent = quizQuestions[quizTimerCounter].choices[3];

  questionContainer.className = "question";
  buttonContainer.className = "btns";
  button0.className = "btn btn0";
  button1.className = "btn btn1";
  button2.className = "btn btn2";
  button3.className = "btn btn3";

  function onClickListener(event) {
    const answer = quizQuestions[quizTimerCounter].answer;
    if (answer === event.target.textContent) {
      score += 10;
      incrementScore(score);
    } else {
      totalTime -= 10;
    }
    quizTimerCounter++;
    removeAllChildren(questionContainer);
    getQuestions();
  }

  button0.addEventListener("click", onClickListener);
  button1.addEventListener("click", onClickListener);
  button2.addEventListener("click", onClickListener);
  button3.addEventListener("click", onClickListener);

  quiz.appendChild(questionContainer);
  quiz.appendChild(buttonContainer);
  questionContainer.appendChild(questionPEl);
  questionContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(button0);
  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);
  buttonContainer.appendChild(button3);
};

function removeAllChildren(questionContainer) {
  while (questionContainer.firstChild) {
    questionContainer.removeChild(questionContainer.firstChild);
  }
}

function gethighScore() {
  if (highscore !== null) {
    if (score > highscore) {
      localStorage.setItem("highscore", score);
    }
  } else {
    localStorage.setItem("highscore", score);
  }
  previousHighScore.innerText = localStorage.getItem("highscore", score);
}

incrementScore = (num) => {
  score + -num;
  scoreText.innerText = score;
};

var saveScores = function () {
  localStorage.setItem("scores", score);
};

var saveUsername = function () {
  localStorage.setItem("Usernames", userName);
}

function getUsername () {
  var input = document.getElementById("input").userName;
  previousUsername.innerText = localStorage.getItem("Usernames", input);
}
function endTheGame() {
  clearInterval(startTimer);
  removeAllChildren(main);
  let userName = document.createElement("input");
  main.appendChild(userName);
  saveScores();
  gethighScore()
  saveUsername();
  
  //enter and save username
}


start();
