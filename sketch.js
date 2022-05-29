let ground;
let lander;
var lander_img;
var bg_img;
var thrust;
var rightthrust;
var leftthrust;

var vy = 0;
var g = 0.05;
var vx = 0;
var fuel = 100;
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
rightthrust = loadAnimation("right_thruster_1.png","right_thruster_2.png");
leftthrust = loadAnimation("left_thruster_1.png","left_thruster_2.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

  lander.addAnimation('thrusting',thrust);
  lander.addAnimation('left',leftthrust);
  lander.addAnimation('right',rightthrust);

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW && fuel>0) 
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    //thrust.nextFrame();
    
  }

  if(keyCode==RIGHT_ARROW && fuel>0)
  {
    right_thrust();
    lander.changeAnimation('left');
    //thrust.nextFrame();
    
  }

  if(keyCode==LEFT_ARROW && fuel>0)
  {
    left_thrust();
    lander.changeAnimation('right');
    //thrust.nextFrame();
    
  }

}

function upward_thrust()
{
  vy = -1;
  fuel-=1;

}

function right_thrust()
{
  vx += 0.2;
  fuel-=1;
  
}

function left_thrust()
{
  vx -= 0.2;
  fuel-=1;
  
}