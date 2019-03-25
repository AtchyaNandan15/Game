//variables
var person;
var person2;
var sceneNum=0;

function setup() {
  createCanvas(640, 360);
  person = new Person();

  function setup() {
  background(50);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img, 10, 10, 50, 50);
}


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
  
  //scene 0 which is the intro
  
  if (sceneNum===0){
    //decoration
   background(108, 61, 237);
      
    textSize(80);
    fill(50,30,200);
    text("GALAXY GAME", 50, 75)
    textSize(50);
    text("By Atchya Nandan" ,100,300);
    textSize(20);
    fill(200,100, 200);

 text ("Click then Press            to play the GALAXY game", 100, 150);
 textSize(30);
    fill(255,0,0);
    text("'A'", 255, 155);
    strokeWeight(6);
stroke(52, 224, 161);
line(10, 400,320,325);
strokeWeight(2);
stroke(214, 13, 207);
line(82, 393,348,325);

strokeWeight(4);
stroke(55, 204, 250);
line(-79, 388,374,320);

 
    

    
    //secne one starts
  }else if(sceneNum===1){
//decoration
    background(44, 17, 102);
strokeWeight(6);
stroke(52, 224, 161);
line(10, 400,320,325);
strokeWeight(2);
stroke(214, 13, 207);
line(82, 393,348,325);

strokeWeight(2);
stroke(55, 204, 250);
line(-79, 388,374,320);

//star
stroke(255, 255, 255);
ellipse(143,120,2,2);
ellipse(143,120,5,2);
ellipse(247,98,2,2);
ellipse(184,158,2,2);
ellipse(93,74,2,2);
ellipse(317,129,2,2);
    stroke(255, 255, 255);
ellipse(143,120,2,2);
ellipse(143,120,5,2);
ellipse(247,98,2,2);
ellipse(184,158,2,2);
ellipse(93,74,2,2);
ellipse(317,129,2,2);
   
text("1",555,80);
    text("click 'a' to got to the next level",200,25);

//more color

      
    //the gravity for the circle
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
      
    
    
  //force
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
    //rectancles size and color and edges
  //translate(-person.pos.x,0);
  person.update();
  person.edges();
  person.display();
  fill(255,0,200);
  rect(400, height-50,70,50);

  
   
  person.update();
  person.edges();
  person.display();
  fill(127, 92, 204);


  
  //rect(400, height-50,100,200);
  //  rect(900, height-100,100,200);
  //  rect(1400, height-100,100,200); 
  //  rect(1700, height-100,100,200);
 //   rect(2000, height-100,100,200);
    //loop
    var i = 400;
for (i=400; i < 2000; i=i+300) { 
      rect(i, height-100,100,200);
  text("value ", i);
  fill(20,202,200,20);// transparent
  ellipse(333,200,20,200);


  
}
    //scene 2 starts
  } else if (sceneNum===2) {

    //decoration
background(44, 17, 102);
strokeWeight(6);
stroke(52, 224, 161);
line(10, 400,320,325);
strokeWeight(2);
stroke(214, 13, 207);
line(82, 393,348,325);

strokeWeight(4);
stroke(55, 204, 250);
line(-79, 388,374,320);

//star
stroke(255, 255, 255);
ellipse(143,120,2,2);
ellipse(143,120,5,2);
ellipse(247,98,2,2);
ellipse(184,158,2,2);
ellipse(93,74,2,2);
ellipse(317,129,2,2);
ellipse(80,185,2,2);
    text("2",555,80);

    
     //the gravity for the circle
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
      
    
    
  //force
  var force = createVector(-1,0);
  person.applyForce(force);
  }
    //rectancles size and color and edges
  //translate(-person.pos.x,0);
  person.update();
  person.edges();
  person.display();
     //text("Amount of jumps in Level two: "+this.jump,190,125);

  fill(255,0,200);
  rect(400, height-50,70,50);

  
   
  person.update();
  person.edges();
  person.display();
     //text("Amount of jumps in Level two: "+this.jump,190,125);

     fill(20,202,200,20); 
  
    //loop

for (i=400; i < 4000; i=i+300) { 
      rect(i, height-150,150,200);
  text("value ", i);



  
}
}else if(sceneNum===3){
//decoration
    background(44, 17, 102);
strokeWeight(6);
stroke(52, 224, 161);
line(10, 400,320,325);
strokeWeight(2);
stroke(214, 13, 207);
line(82, 393,348,325);

strokeWeight(4);
stroke(55, 204, 250);
line(-79, 388,374,320);

//star
stroke(255, 255, 255);
ellipse(143,120,2,2);
ellipse(143,120,5,2);
ellipse(247,98,2,2);
ellipse(184,158,2,2);
ellipse(93,74,2,2);
ellipse(317,129,2,2);
    stroke(255, 255, 255);
ellipse(143,120,2,2);
ellipse(143,120,5,2);
ellipse(247,98,2,2);
ellipse(184,158,2,2);
ellipse(93,74,2,2);
ellipse(317,129,2,2);
  text("3",555,80);


//more color

      
    //the gravity for the circle
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
      
    
    
  //force
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
    //rectancles size and color and edges
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
  fill(255,0,200);
  rect(400, height-50,70,50);

  
   
  person.update();
  person.edges();
  person.display();
  fill(127, 92, 204);


  
  //rect(400, height-50,100,200);
  //  rect(900, height-100,100,200);
  //  rect(1400, height-100,100,200); 
  //  rect(1700, height-100,100,200);
 //   rect(2000, height-100,100,200);
    //loop
    var i = 400;
for (i=400; i < 7000; i=i+300) { 
      rect(i, height-250,50,150);
  text("value ", i);
  fill(20,202,200,20);// transparent
  ellipse(333,200,20,200);


  
}
 
    

            
  } else {
   background(44, 17, 102);
    fill(10,1,13);
    textSize(50);
    strokeWeight(5);
    text("Game over!",200,200);
    textSize(20);
text("By Atchya Nandan", 200,300);
    fill(56, 217, 174);
triangle(20,50,100,200,50,30);
fill(196, 153, 153);
    triangle(20,50,100,307,50,30);
    fill(145, 123, 158);
    triangle(20,50,100,200,74,30);
    fill(157, 209, 200);
    triangle(20,50,100,200,51,59);

        triangle(124,50,100,307,50,30);
    triangle(20,50,169,200,74,30);
    triangle(20,50,143,200,51,59);


}
}

  
  
