
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

   	var ball_options = {
	isStatic:false,
    restitution:0.3,
	frition:0,
	density:1.2
	}

    ball = Bodies.circle(100,375,20,ball_options);
    World.add(world,ball_options);
    fill("white");

    //groundObj=new ground(width/2,670,width,20);
    //leftSide=new ground(1100,600,20,120);
    //rightSide=new ground(1250,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipse(RADIUS);

  background(0);
  
  

  ellipse(ball.position.x,ball.position.y,20);

 // groundObj.display();
 // leftSide.display();
 // rightSide.display();

  drawSprites();
 
}

function keyPressed()
 { if (keyCode === UP_ARROW) 
    { Matter.Body.applyForce(ball,ball.position,{x:85,y:-85} );
 }  
 
       }