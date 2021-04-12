const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground



function setup() {

  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

  ground = Bodies.rectangle(200,380,500,50,{isStatic:true})
  World.add(world,ground)
  console.log(ground)
  console.log(ground.position.x)
ball=Bodies.circle(300,200,30,{restitution:1})
World.add(world,ball)
ball2=Bodies.circle(100,120,20,{restitution:0.5}) 
World.add(world,ball2)


}


function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,500,50)
ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)

ellipseMode(RADIUS)
ellipse(ball2.position.x,ball2.position.y,20,20)






}