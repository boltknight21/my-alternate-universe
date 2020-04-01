var sun,sunImage,planet1,planet1Image;

function preload() {
sunImage=loadImage("sun.jpg");
planet1=loadImage("earth");
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
 sun=createSprite(400,200,15,15);
 planet1=createSprite(200,100,10,10);
 sun.shapeColor="yellow";
 planet1.shapeColor="blue";

}

function draw() {
  background("black");
  planet1.x=mouseX;
  planet1.y=mouseY;  
  sun.scale=5;
  planet1.scale=4;
  drawSprites();
}