
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    roof1 = new roof(400,100,300,30);

	bob1 = new bob(250,400);
	bob2 = new bob(300,400);
	bob3 = new bob(350,400);
	bob4 = new bob(400,400);
	bob5 = new bob(450,400);

	rope1 = new rope(bob1.body,roof1.body,100,1000);
	World.add(world,rope1);

	rope2 = new rope(bob2.body,roof1.body,-50);
	World.add(world,rope2);

	rope3 = new rope(bob3.body,roof1.body,50);
	World.add(world,rope3);

	rope4 = new rope(bob4.body,roof1.body,-100);
	World.add(world,rope4);

	rope5 = new rope(bob1.body,roof1.body,100);
	World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed(); 
  drawSprites();
 
}

/*function keyPressed(){
if(keyPressed===32){
Matter.Body.applyForce(bob1.Body,bob1.position,{x:-730,y:0});
}
}*/

