var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundIMG=loadImage("background.png")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	background1=createSprite(400,400,50,50);
	background1.addImage(backgroundIMG)


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground=createSprite(390,650,150,10);
	ground.shapeColor=color("red")
	
  b1Sprite=createSprite(320,625,10,60);
  b1Sprite.shapeColor=color("red")
 
  b2Sprite=createSprite(460, 625,10,60);
  b2Sprite.shapeColor=color("red")
  
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(390,630,60, 10 , {isStatic:true} );
 	World.add(world, ground);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false);  
  }
}



