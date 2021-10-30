
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5 
var roofthing
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	BobDiameter = 40
	startBobPositionX = width/2 
	startBobPositionY = height/4 +500
	bob1=new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter);
	bob2=new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter);	
	bob3=new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter);
	bob4=new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter);
	bob5=new Bob(startBobPositionX-BobDiameter*2,startBobPositionY,BobDiameter);
	roofthing=new ground(0,-200,50,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roofthing.display()
  drawSprites();
 
}



