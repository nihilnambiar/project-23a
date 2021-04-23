var helicopterIMG, helicopterSprite;
var packageIMG,packageSprite;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.15;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,20,{restitution : 0.5, isStatic : true});
	World.add(world,packageBody);
	
	ground = Bodies.rectangle(width/2,650,width,15,{isStatic : true});
	 World.add(world,ground);
	 boxPosition=width/2-100
	 leftBody=Bodies.rectangle(boxPosition+20,610,20,100)
	 World.add(world, leftBody)
	 leftSprite=createSprite(boxPosition,610,20,100)

	 rigtBody=Bodies.rectangle(boxPosition+180,610,20,100)
	 World.add(world,rightBody)
	 rightSprite=createSprite(boxPosition+200,610,20,100)

	 baseBody=Bodies.rectangle(boxPosition+100,635,200,20)
	 World.add(world, baseBody)
	 baseSprite=createSprite(boxPosition+100,650,200,20)
}

  


function draw() {
 
  background(0);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  keyPressed();
 
  drawSprites();

}

function keyPressed() {
 
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
	  
}