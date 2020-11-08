
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(300,360,10)
ground=new Ground(800,680,1600,20)
leftSide = new Dustbin(1300, 665, 170, 20);
 bottom = new Dustbin(1205, 615, 20, 120);
  rightSide = new Dustbin(1395, 615, 20,700);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
 
}

function keyPressed(){ if(keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y: -20}) } }

