
var box

function setup() {
  createCanvas(500,500);
  box = createSprite(200,200,25,25)
  box.shapeColor = "Red";
}

function draw() 
{
  background(212,232,123);
  //Moving code
  if(keyIsDown(RIGHT_ARROW)){


     box.x = box.x + 5
  }
  if(keyIsDown(LEFT_ARROW)){


    box.x = box.x - 5
  }

  if(keyIsDown(UP_ARROW)){


    box.y = box.y - 5
  }
  if(keyIsDown(DOWN_ARROW)){


    box.y = box.y + 5
  }

  drawSprites()
}




