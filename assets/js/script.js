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
