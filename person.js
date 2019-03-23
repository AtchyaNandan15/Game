

function Person() {
  this.pos = createVector(500, 250);
  this.vel = createVector(1, 10);
  this.acc = createVector(1, 0);
  this.mass = 10;
  this.jump = 1;
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    
  }
  this.display = function() {
   
    //cirlce that jumps
    fill(40, 164, 173);
    stroke(255)
    //ellipse(this.pos.x, this.pos.y, this.mass*8, this.mass*8);
    ellipse( this.pos.x +40, this.pos.y, 20,20);
    
 //amount of jump
     text("Amount of jumps in Level one: "+this.jump,190+this.pos.x,125);
    
    
  }
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
    }
  }
  this.count= function() {
    this.jump++;
    
    
  }
}

// second scene
