const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1190,120,30);
	mango3=new mango(1000,110,30);
	mango4=new mango(900,190,30);
	mango5=new mango(1020,220,30);
	mango6=new mango(1210,210,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(1,1,30);
	launcherObject=new Chain(stoneObj.body,{x:225,y:410});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
launcherObject.display();
  groundObject.display();

  detectColliion(stoneObj,mango1);
  detectColliion(stoneObj,mango2);
  detectColliion(stoneObj,mango3);
  detectColliion(stoneObj,mango4);
  detectColliion(stoneObj,mango5);
  detectColliion(stoneObj,mango6);
keyPressed();
  text("press space to get second chance to play!!",10,8)
  Engine.update(engine)
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	launcherObject.fly();
}

function detectColliion(bodyA,bodyB)
{
	var distance =dist(bodyA.body.position.x,bodyA.body.position.y,bodyB.body.position.x,bodyB.body.position.y)

	if(distance<=bodyB.r+bodyB.r)
	{
		Matter.Body.setStatic(bodyB.body,false)
	}
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stoneObj.body,{x:220,y:400});
		launcherObject.attach(stoneObj.body);
	}
}