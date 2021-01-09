
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,
var ground,
var side1,side2,side3

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	paper = new Paper(100,600,10)
	ground = new Ground(400,680,800,20)
	side1 = new Dustbin(550,620,20,100)
	side2 = new Dustbin(550,620,150,20)
	side3 = new Dustbin(550,620,20,100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  
  side1.display()
  side2.display()
  side3.display()
  ground.display()
  paper.display()
  
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}


