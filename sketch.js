const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constrained = Matter.Constraint;

var engine, world;
var ball;
var ground;
var obstacle;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle7;





function setup(){
    var canvas = createCanvas(1400,600);

    engine = Engine.create();
    world = engine.world;

    
   
    ball = new Ball(200,300);
    hold = new Hold(ball.body,{x:190,y:350});
    ground = new Ground(700,height,1400,5);
    obstacle = new Obstacle(900,550,100,100,PI/2);
    obstacle2 = new Obstacle(1000,550,100,100,PI/2);
    obstacle3 = new Obstacle(1100,550,100,100,PI/2);
    obstacle4 = new Obstacle(1200,550,100,100,PI/2);
    obstacle5 = new Obstacle(950,450,100,100,PI/2);
    obstacle6 = new Obstacle(1050,450,100,100,PI/2);
    obstacle7 = new Obstacle(1150,450,100,100,PI/2);
    obstacle8 = new Obstacle(1000,350,100,100,PI/2);
    obstacle9 = new Obstacle(1100,350,100,100,PI/2);
    obstacle10 = new Obstacle(1050,250,100,100,PI/2);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
   
   
    ball.display();
    
    hold.display();
    ground.display();
    obstacle.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();
    obstacle8.display();
    obstacle9.display();
    obstacle10.display();

    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    hold.fly();
}