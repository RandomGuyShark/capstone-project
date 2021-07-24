class Snowfall{
    conscructor(x,y,width, height){
        this.body = Matter.Bodies.rectangle(x,y,width,height)
        this.img = loadImage("snow5.webp")
        Matter.World.add(world,this.body)
        this.snowflakeWidth = width
        this.snowflakeHeight = height
    }
    
    display(){
        image(this.img,this.body.position.x,this.body.position.y,this.snowflakeWidth,this.snowflakeHeight)
    }
}