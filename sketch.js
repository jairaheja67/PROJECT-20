var speed;
var car1,car2,car3;
var wall;
var deformation


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  
  car1=createSprite(50,200,20,20);
  car2=createSprite(150,200,20,20)
  car3=createSprite(250,200,20,20)

  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;

   car1.shapeColor="blue"
   car2.shapeColor="pink"
   car3.shapeColor="grey"
   
  wall=createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255); 
 
  if(wall.x-car1.x<(car1.width+wall.width)/2){
     
     
     var deformation=0.5*weight*speed*speed/22509
     if(deformation>180)
     {
        car1.shapeColor="green"
     }
      if(deformation<180 && deformation>180 )
     {
       car1.shapeColor="red"
     }
     if(deformation<100)
     {
       car1.shapeColor="yellow"
     }

    }
     
     if(wall.x-car2.x<(car2.width+wall.width)/2){
      car1.velocity=0
      
      var deformation=0.5*weight*speed*speed/22509
      if(deformation>180)
      {
         car2.shapeColor="green"
      }
       if(deformation<180 && deformation>180 )
      {
        car2.shapeColor="red"
      }
      if(deformation<100)
      {
        car2.shapeColor="yellow"
      }

      if(wall.x-car3.x<(car3.width+wall.width)/2){
        car1.velocity=0
        
        var deformation=0.5*weight*speed*speed/22509
        if(deformation>180)
        {
           car3.shapeColor="green"
        }
         if(deformation<180 && deformation>180 )
        {
          car3.shapeColor="red"
        }
        if(deformation<100)
        {
          car3.shapeColor="yellow"
        }
     


     


  }
   
  drawSprites();
}}