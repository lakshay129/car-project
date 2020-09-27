var car,wall;
var speed,weight;
var speed2;
var speed3;
var speed4;
var line1,line2,line3,line4;
var car1,wall1;
var car2,wall2;
var car3,wall3;

function setup() {
  createCanvas(800,400);

  speed=random(5,25);
  speed2=random(3,25);
  speed3=random(10,15);
  speed4=random(5,10);
  weight=random(100,120);

  car=createSprite(30, 30, 20, 20);
  car.velocityX=speed;
  wall=createSprite(780,40,20,70);
  line1=createSprite(400,85,850,5);

  car1=createSprite(30,120,20,20);
  car1.velocityX=speed2;
  wall1=createSprite(780,130,20,70);
  line2=createSprite(400,175,850,5);

  car2=createSprite(30,210,20,20)
  car2.velocityX=speed3;
  wall2=createSprite(780,220,20,70)
  line3=createSprite(400,265,850,5);

  car3=createSprite(30,300,20,20)
  car3.velocityX=speed4;
  wall3=createSprite(780,310,20,70)
  line4=createSprite(400,355,850,5);

  


  
}

function draw() {
  background("black");  

  if(wall.x-car.x<(wall.width+car.width)/2){

    car.velocityX=0;
    var deformation=0.5 *weight * speed * speed/150

    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }
    
  }

  if(wall1.x-car1.x<(wall1.width+car1.width)/2){

    car1.velocityX=0;
    var deformation=0.5 *weight * speed * speed/230

    if(deformation<100){
      car1.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car1.shapeColor="yellow";
    }
    if(deformation>180){
      car1.shapeColor="red";
    }
    
  }

  
  if(wall2.x-car2.x<(wall2.width+car2.width)/2){

    car2.velocityX=0;
    var deformation=0.5 *weight * speed * speed/90

    if(deformation<100){
      car2.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car2.shapeColor="yellow";
    }
    if(deformation>180){
      car2.shapeColor="red";
    }
    
  }
  
  if(wall3.x-car3.x<(wall3.width+car3.width)/2){

    car3.velocityX=0;
    var deformation=0.5 *weight * speed * speed/130

    if(deformation<100){
      car3.shapeColor="green";
    }
    if(deformation>100 && deformation<180){
      car3.shapeColor="yellow";
    }
    if(deformation>180){
      car3.shapeColor="red";
    }
    
  }
  drawSprites();
}