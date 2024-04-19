

class Player{
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 20;

        this.playerElm = document.getElementById("player");
        this.playerElm.style.bottom = this.positionY + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.width = this.width +"vw";
        this.playerElm.style.height = this.height + "vh";
        
    }

moveLeft(){
    if(this.positionX > 0){
    this.positionX--;
    this.playerElm.style.left = this.positionX + "vw";
    }

}
moveRight(){
    if(this.positionX < 100 - this.width){
    this.positionX++; // or: this.position += 1
    this.playerElm.style.left = this.positionX + "vw";
    }
}
}

class Obstacle{
    constructor(){
        this.positionX = 50;
        this.positionY = 80;
        this.width = 10;
        this.height = 10;
        this.obstacleElement = null;

        this.createDomElement();
    }
    createDomElement(){
        this.obstacleElement = document.createElement("div");

        this.obstacleElement.className = "obstacle";
        this.obstacleElement.style.left = this.positionX + "vw";
        this.obstacleElement.style.border = this.positionY + "vh";
        this.obstacleElement.style.width = this.width + "vw"
        this.obstacleElement.style.height = this.height + "vh";

        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.obstacleElement);
    }


    moveDown(){
    this.positionY--;
    this.obstacleElement.style.bottom = this.positionY + "vw";
     }
}

const player = new Player();

const obstaclesArr = [];

//const o1 = new Obstacle();

setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
}, 3000);


//move obstacle
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveDown();

        if(
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ){
            console.log("game over");
            location.href = "gameover.html";
        }
    });
}, 80);

document.addEventListener("keydown", (e) => {
   if (e.code === "ArrowLeft"){;
    player.moveLeft();
}
else if(e.code === "ArrowRight"){
    player.moveRight();
}
});