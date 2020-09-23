var database,form,player,game;
var playerCount = 0;
var gameState = 0;
var allplayers
var form,player,game;

function setup(){
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  createCanvas(500,500);
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

