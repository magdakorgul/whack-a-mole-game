

class Board{
    constructor(){
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

class Square{
    constructor(){
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
    };
}

const houses = new Square();

//generate a random integer number
document.addEventListener("DOMContentLoaded", function() {
  generateRandom();
});

function generateRandom(){

let randomIndex = Math.floor(Math.random() * 9);
  let randomSquare = document.querySelectorAll(".square")[randomIndex];

  randomSquare.innerHTML = Math.floor(Math.random() * 9); 
  console.log(randomSquare);
} 
