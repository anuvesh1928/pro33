const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg

var boy
var snowman
var snow2
var snow3
var snow4
var snow5
var snow6
var snow7
var snow8
var snow9
var snow10
var snow11
var snow12
var sling
var snowball

var ground
var gift
var score

function preload(){
backgroundImg=loadImage("snowbg.png")

boy=loadImage("boy.png")



}

function setup() {
  createCanvas(1365,625);
  engine = Engine.create();
    world = engine.world;
    
score=0
   
    snowman=new Snowman(1200,10,120,120)
    snow2=new Snowman(1100,10,120,120)
    snow3=new Snowman(1000,10,120,120)
    snow4=new Snowman(900,10,120,120)
    snow5=new Snowman(800,10,120,120)
    snow6=new Snowman(700,10,120,120)
    snow7=new Snowman(600,10,120,120)
    snow8=new Snowman(500,10,120,120)
    snow9=new Snowman(400,10,120,120)
    snow10=new Snowman(300,10,120,120)
    snow11=new Snowman(200,10,120,120)
    snow12=new Snowman(100,10,120,120)
 
 


    snowball=new Snowball(400,330,50,50)
    sling=new Sling(snowball.body,{x:400, y:330})
    ground=new Ground(670,620,1400,30)


}

function draw() {
  background(backgroundImg)
  Engine.update(engine);
 
  image(boy ,360,260,200,280);

  
 
 
  snowman.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()
  snow11.display()
  snow12.display()


  sling.display()
  snowball.display()
  ground.display()
  
 
  
  
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(snowball.body,{x:mouseX, y:mouseY})
 
  }

  function mouseReleased(){
    sling.fly()
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(snowball.body,{x:400, y:330})
    sling.attach(snowball.body)
    }
  }

  

 

  

 