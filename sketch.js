
var monkey , monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score ;
var points=0;
var survivaltime=0;
var gameState="play";
function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
background= createSprite(0,0,600,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkeyRunning);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
  
}


function draw() {
if ( gameState==="play"){
  if (background.x<0){
    background.x=background.width/2;
 }
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivaltime,550,50);
   text("Points:"+points,50,50)
if (World.frameCount%60===0){
  spawnBananas();
  spawnObstacles();
  
 
  
} 
  monkey.velocityY=2;
  monkey.velocityX=3;
  
  if(keyDown("space")){
    monkey.velocityY=-4;
  }
  if(monkey.isTouching(FoodGroup))
    {
      FoodGroup.destroyEach();
      points=points+1;
    }
  if(monkey.isTouching(obstacleGroup))
    {
      obstacleGroup.destroyEach();
      
      gameState="end"
    }
}
  if(gameState==="end"){
    monkey.velocityX=0;
    obstacle.velocityX=0;
    textSize(50); 
    text("GameOver",0,0);
  }
  
  drawSprites();
}

function spawnObstacles()
{
    var obstacle=createSprite(100,100,60,10);
     obstacle.addImage(obstacleImage);
     obstacle.x=400;
     obstacle.y=315;
     obstacle.velocityX=survivaltime/3*(-1);
     obstacle.lifetime=100;
     obstacle.scale=0.3;
     obstacleGroup.add(obstacle);
}

function spawnBananas()
{
    var banana=createSprite(100,100,60,10);
     banana.addImage(bananaImage);
     banana.x=400;
     banana.y=300;
     banana.velocityX=survivaltime/2*(-1);
     banana.lifetime=100;
     banana.scale=0.3;
     FoodGroup.add(banana);
}





