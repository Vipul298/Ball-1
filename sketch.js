const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
  Paper = new paper(100,390,40);
  Dust1 = new dustbin(870,375,230,90);
  Dust2 = new dustbin(745,295,100,0);
  Dust3 = new dustbin(995,295,100,0);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  Paper.display();
  Dust1.display();
  Dust2.display();
  Dust3.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:45,y:-45});
     
    }
 }
