function preload(){
  snowflakeImg =  loadImage("snow5.webp")
  backgroundImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1500,800);
  

}

function draw() {
  background(backgroundImg);  
  drawSprites();
  spawnSnowflake();
}
function spawnSnowflake(){
  if(frameCount%60 === 0){
    snow = createSprite(Math.round(random(50,1450)), 0, 50, 50);
    snow.addImage(snowflakeImg)
    snow.scale = 0.3
    snow.velocityY = 3
  }
}