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
  }
}

const houses = new Square();

// >>>>> generate a random integer number <<<<<< //

document.addEventListener("DOMContentLoaded", function () {
  generateRandom();
});

function generateRandom() {
  let squares = document.querySelectorAll(".square");
  let chosenSquare = document.querySelector(".chosenSquare");
  let gameOverSquare = document.querySelector(".gameOver");

  if (chosenSquare) {
    chosenSquare.classList.remove("chosenSquare");
  }

  if (gameOverSquare) {
    gameOverSquare.classList.remove("gameOver");
  }

  let randomIndex = Math.floor(Math.random() * squares.length);
  squares[randomIndex].classList.add("chosenSquare");

  if (Math.random() < 0.1) {
    squares[randomIndex].classList.add("gameOver");
  }

  console.log(squares[randomIndex]);
}

// >>>>> generate a time interval <<<<<< //

let timerId;

function generateTime() {
  timerId = setInterval(generateRandom, 900);
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
      location.href = "../html/gameover.html";
    }
  }, 1000);
}
StartTheTimer();

let allSquares = document.querySelectorAll(".square");

//>>>>> if clicking on different types of squares: <<<<<<//

function changeColor(event) {
  console.log(event);
  if (event.target.classList.contains("gameOver")) {
    gameOver();
  } else if (
    event.target.classList.contains("square") &&
    event.target.classList.contains("chosenSquare") !== true
  ) {
    updateScore === false;
  } else {
    event.target.classList.remove("chosenSquare");
    hitMole();
  }
}

//>>>>>> game over <<<<<< //

function gameOver() {
  console.log("game over");
  clearInterval(timerGame);
  location.href = "../html/gameover.html";
}

allSquares.forEach((square) => {
  square.addEventListener("click", changeColor);
});

let score = 0;

function hitMole() {
  console.log("Mole hit");
  updateScore(1);
}

// >>>>> scoring points only after clicking on chosenSquare <<<<<<//

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
}
