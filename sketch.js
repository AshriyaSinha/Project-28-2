const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy = loadImage ("boy.png/PluckingMangoes")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boi = createSprite (150,600)

	bigtree = new Tree(500,500); 
	ground = new Ground(0,750,800,25);
	ston = new Stone(100,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bigtree.display();
  ground.display(); 
  ston.display()
 
}

