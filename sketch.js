var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload(){
getBackgroundImg();
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

}

function setup(){
  
  createCanvas(windowWidth,windowHeight)
  //createCanvas(400,400)
//background image
// bg = createSprite(165,485,windowWidth,windowHeight);
// bg.scale=1.0



//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  // console.log(bgImg)
if(bgImg)
  background(bgImg)
        
          //making the hot air balloon jump
          if(touches.length>0 || keyDown("space")) {
            balloon.velocityY = -6 ;
            //if((touches.length > 0 || keyDown("SPACE")) && boy.y  >= height-120) {
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;

           
          Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop.lifetime = 100;
    
   balloon.depth = balloon.depth + 1;
  }
  
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = balloon.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
        }


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=16){
    
    // bg.addImage(bgImg);
    bgImg = loadImage("assets/bg.png")
 
    // bg.scale = 1.3
  }
  else{
    bgImg = loadImage("assets/bgImg2.jpg")
    // bg.addImage(bgImg2);
    // bg.scale = 1.5
    // bg.x=200
    // bg.y=200
  }

}
