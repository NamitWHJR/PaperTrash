
class Ground{
  constructor(x,y,width,height){
var optionGround = {
isStatic : true
}
this.body = Bodies.rectangle(x,y,width,height,optionGround)
this.width = width
this.height = height

World.add(world,this.body)

  }
  display(){
var pos = this.body.position
fill ("red")
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)
//imageMode(CENTER);
 //image(this.image, pos.x, pos.y, this.width, this.height);
  }
}