var person;
var sceneNum=0;

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
var jump = createVector(0,-5);
    person.applyForce(jump);
    person. count();
  } else if (key=='a'){					
  sceneNum++;
  }
    }

function draw() {
  
  
  if (sceneNum===0){
   
    background(200,200,100);
    textSize(80);
    fill(50,30,200);
    text("Floating Circle", 50, 75)
    textSize(20);
    fill(200,100, 200);

 text ("Click then Press         to play the floating cube game", 100, 150);
  textSize(30);
    fill(255,0,0);
    text("'A'", 255, 155);
     ellipse(315,200,20,15);
    

    
    
  }else if(sceneNum===1){
  background(10, 200, 200);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
    
    
    
    
  
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
  fill(255,0,200);
  ellipse(400, height-50,70,50);

  
   
    person.update();
  person.edges();
    person.display();
  fill(25,0,400);
  rect(400, height-50,100,200);
      rect(900, height-100,100,200);
    
  }else if (sceneNum===2)
  background(10, 200, 200);
 
            
   else{
    background(15,100,2);
    fill(10,1,13);
    textSize(50);
    strokeWeight(10);
    text("That is all!",50,200);
  }

    

    
  

    
  }
