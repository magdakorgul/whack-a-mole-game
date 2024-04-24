class Board {
  constructor() {
    this.width = 70;
    this.height = 70;
    this.positionX = 50;
    this.positionY = 20;

    this.square = document.querySelector("#board-game");
    this.square.style.width = this.width + "vw";
    this.square.style.height = this.height + "vh";
    this.square.style.bottom = this.positionY + "vh";
    this.square.style.left = this.positionX + "vw";
  }
}

const boardGame = new Board();

class Square {
  constructor() {
    this.width = 17;
    this.height = 17;
    this.positionX = 50;
    this.positionY = 20;

    this.squareElement = document.querySelectorAll(".square");

    // for (let i=0; i<this.squareElement.length; i++){
    //     let element = this.squareElement[i];
    // element.style.width = this.width + "vw";
    // element.style.height = this.height + "vh";
    // element.style.bottom = this.positionY + "vh";
    // element.style.left = this.positionX + "vw";

    // let image = document.querySelector(".rat");
    // image.style.width = "80px";
    // image.style.maxHeight = "100%";
    // image.style.position = "relative";

    //  element.appendChild(image);
  }
}

const houses = new Square();

// >>>>> generate a random integer number <<<<<< //

document.addEventListener("DOMContentLoaded", function () {
  generateRandom();
  // initializeGame();
});

function generateRandom() {
  let squares = document.querySelectorAll(".square");
  let chosenSquare = document.querySelector(".chosenSquare");

  if (chosenSquare) {
    chosenSquare.classList.remove("chosenSquare");
  }

  let randomIndex = Math.floor(Math.random() * squares.length);
  squares[randomIndex].classList.add("chosenSquare");

  console.log(squares[randomIndex]);
}

// >>>>> generate a time interval <<<<<< //

let timerId;

function generateTime() {
  timerId = setInterval(generateRandom, 700);
}
generateTime();

setTimeout(() => {
  console.log("stop");
  clearInterval(timerId);
}, 40000);

// >>>>>> show the timer <<<<< //

let timerGame;
let timeRemaining = 30;

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 30)
    .toString()
    .padStart(2, "0");
  const seconds = (timeRemaining % 30).toString().padStart(2, "0");
  let timeRemainingElement = document.querySelector(".timeRemaining");
  timeRemainingElement.innerText = `${minutes}:${seconds}`;
}

// >>>>> timer functionality <<<<<< //

function StartTheTimer() {
  timerGame = setInterval(() => {
    timeRemaining--;
    updateTimer();

    if (timeRemaining <= 0) {
      console.log("game over...");
      clearInterval(timerGame);
      location.href = "gameover.html";
    }
  }, 1000);
}
StartTheTimer();

// >>>> controling the hammer <<<< //
function trackMouseMovement() {
  const hammer = document.getElementById("hammer");
  const onMouseMovement = (e) => {
    hammer.style.left = e.pageX + "px";
    hammer.style.top = e.pageY + "px";
  };
  document.addEventListener("mousemove", onMouseMovement);
}

// document.addEventListener("DOMContentLoaded", function () {

let allSquares = document.querySelectorAll(".square");

function changeColor(event) {
  console.log(event);
  event.target.classList.remove("chosenSquare");
  hitMole();
}

allSquares.forEach((square) => {
  square.addEventListener("click", changeColor);
});

let score = 0;

function hitMole() {
  console.log("Mole hit");
  updateScore(1);
}

// >>>>> scoring points only after clicking on chosenSquare - NOT DONE <<<<<<//

// >>>> counting scores <<<<< //

function initializeScore() {
  score = 0;
  updateScoreDisplay();
}

function updateScore(points) {
  score += points;
  updateScoreDisplay();
}

function updateScoreDisplay() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score;
}

function initializeGame() {
  initializeScore();
  trackMouseMovement();
  addHammerClick();

  // const allSquares = document.querySelectorAll(".square");
  // allSquares.forEach((square) => {
  //   square.addEventListener("click", changeColor);
  // });

  // document.addEventListener("DOMContentLoaded", function () {
  //   initializeGame();
  // });
}

//
