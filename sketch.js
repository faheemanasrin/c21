var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  car = createSprite(400, 200, 50, 80);
  car.shapeColor = "red";
  car.velocityY=3;

  van = createSprite(400, 800, 80, 80);
  van.shapeColor = "blue";
  van.velocityY=-3;
}

function draw() {
  background(0,0,0);  


  bounceOff(car,van);
  
  drawSprites();
}



