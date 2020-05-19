var movingRect,fixedRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "pink";
  fixedRect1 = createSprite(100,100,50,20);
  fixedRect1.shapeColor = "yellow";
  fixedRect2 = createSprite(200,100,50,20);
  fixedRect2.shapeColor = "yellow";
  fixedRect3 = createSprite(300,100,50,20);
  fixedRect3.shapeColor = "yellow";
  gameObject1= createSprite(100,300,50,20);
  gameObject2 = createSprite(700,300,50,20);
  gameObject3= createSprite(100,200,50,20);
  gameObject4= createSprite(700,200,50,20);
  gameObject1.velocityX =  4;
  gameObject2.velocityX =  -4;
  gameObject3.velocityX =  2;
  gameObject4.velocityX =  -3;
}

function draw() {
  background(155,255,255);
    
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 if(isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor = " pink";
  fixedRect1.shapeColor = "green";
   }
   else{
movingRect.shapeColor = "pink"
fixedRect1.shapeColor = "yellow"

   }
   if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "pink";
    fixedRect2.shapeColor = "red";
     }
     else{
  movingRect.shapeColor = "pink"
  fixedRect2.shapeColor = "yellow"
  
     }
     if(isTouching(movingRect,fixedRect3)){
      movingRect.shapeColor = "pink";
      fixedRect3.shapeColor = "lime";
       }
       else{
    movingRect.shapeColor = "pink"
    fixedRect3.shapeColor = "yellow"
    
       }

bounceOff(gameObject1,gameObject2)
bounceOff(gameObject3,gameObject4)
  //algorithm bounceOff
  
   /* if( fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){

  }
  else{
  movingRect.shapeColor = "pink";
 fixedRect.shapeColor = "yellow";
  }*/


  drawSprites();
}
function isTouching(object1,object2){
 if(object1.x-object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object2.y - object1.y < object2.height/2 + object1.height/2
    && object1.y - object2.y < object2.height/2 + object1.height/2){
return true;

  }
  else{
  return false;
  }

}
function bounceOff(object1,object2){
  if(object1.x-object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
    {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
      
    }

}