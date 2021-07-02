var shipImg1
var seaImg
var ship
var seaImg

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,180,400,20);
  sea.addImage(seaImg);
  sea.x = sea.width/2;
  sea.velocityX=-2
  
  ship =createSprite(200,200);
  ship.addAnimation("animatedship",shipImg1);
  ship.scale=0.5

  
}

if (sea.x<0){
  sea.x = sea.width/2;
}

function draw() {

  drawSprites();
 
  
}