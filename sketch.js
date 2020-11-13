
var monkey , monkey_running;
var banana ,bananaImage, bananaGroup;
var obstacle, obstacleImage, obstacleGroup;
var ground;
var survivalTime = 0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(40,360,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,390,900,5); 
  ground.velocityX = -3;
  ground.x = ground.width/2;
  
  bananaGroup = new Group();
  
  obstacleGroup = new Group();
}


function draw() {
  background(255);
  stroke(0);
  fill(255);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,160,30);
  // monkey.debug = true;
  // console.log(monkey.y);
  if(ground.x < 0) {
     ground.x = 400;
  }
  
  if(keyDown("space") && monkey.y > 355) {
     monkey.velocityY = -18;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  bananas();
  obstacles();
  drawSprites();
}

function bananas() {
  if(frameCount % 80 == 0) {
    var r = Math.round(random(120,200));
    banana = createSprite(400,r,1,1);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount % 300 == 0) {
    obstacle = createSprite(400,375,1,1);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}






