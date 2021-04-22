
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,400,20,20);
  monkey.addAnimation("mouving",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,420,1500,10)
  ground.velocityX=-4
  foodGroup=new Group();
  obstaclesGroup=new Group();
  

  
}


function draw() {
background("skyblue")
  if (ground.x < 0){
    ground.x=ground.width/2
  }
  monkey.collide(ground)
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  spawnFood();
  
  
  
  drawSprites();
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana = createSprite(600,250,10,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
   banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    
    monkey.depth = banana.depth + 1;
    
    //adding cloud to the group
   foodGroup.add(banana);
    }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //adding cloud to the group
   cloudsGroup.add(cloud);
    }
}







