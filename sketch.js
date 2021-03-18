
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var world,boy;
var stoneObj;
var con;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,50,32);
	mango3=new mango(900,150,30);
	mango4=new mango(1150,200,30);
	mango5=new mango(1050,190,33);
	mango6=new mango(950,270,30);
	mango7=new mango(1200,150,35);

	con = new cons(stoneObj.body,{x:200, y:100});

	stoneObj=new stone(300,50,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  con.display();
  groundObject.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY})
}

function mouseReleased()
{
    con.fly();
}