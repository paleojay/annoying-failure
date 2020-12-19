const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var box1,box2;
var chain

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    box1=new Box (900,750,100,50);
    box2=new Box (900,700,100,50);
    box3=new Box (900,650,100,50);
    box4=new Box (900,600,100,50);
    box5=new Box (900,550,100,50);
    box6=new Box (900,500,100,50);
    box7=new Box (900,450,100,50); 
    box8=new Box (1000,750,100,50);
    box9=new Box (1000,700,100,50);
    box10=new Box (1000,650,100,50);
    box11=new Box (1000,600,100,50);
    box12=new Box (1000,550,100,50);
    box13=new Box (1000,500,100,50);
    box14=new Box (1000,450,100,50);
    box15=new Box (1100,750,100,50);
    box16=new Box (1100,700,100,50);
    box17=new Box (1100,650,100,50);
    box21=new Box (1100,600,100,50);
    box18=new Box (1100,550,100,50);
    box19=new Box (1100,500,100,50);
    box20=new Box (1100,450,100,50);
    ground=new Ground (600,height,1200,20);
    ball=Bodies.circle(100,100,100)
    World.add(world, ball);
    s=new SlingShot (ball,{x:200,y:50})
    
}


function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    ground.display();
    s.display();
    ball.position.x=mouseX
    ball.position.y=mouseY
ellipse(ball.position.x,ball.position.y,200);
}