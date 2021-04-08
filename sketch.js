const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane,ball,d,b,c,e;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball = new Cat(150,590);
    d = new box(300,590,50,70);
    b=new box(50,590,30,30);
    v=new dot(400,590);
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ball.display()
    plane.display();
    hammer.display();
    d.display();
    v.display();
 
}