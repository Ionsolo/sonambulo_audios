var inc = 0.01;
var scl = 50;
var cols, rows;
var zoff = 0;
var flowfield;
var particles = [];
let contador = 0;
let walker;


function setup() {
  //createCanvas(3348, 934);
  walker = new Walker();
  createCanvas(windowWidth, windowHeight);
  cols = floor(width/scl);
  rows = floor(height/scl);
  flowfield = new Array(cols * rows);
  background(0);
}

function draw() {
  //background(127);
  let lo = width /sqrt(64);
  let li = height/sqrt(64);
  //point(width/8,height/8)
   walker.render();	
	if (mouseIsPressed) {
		particles[contador++] = new Particle();
		walker.step(); walker.render();	}
	
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 19;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(4.9);
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;
    zoff += 0.0001;
  }
  for(var i = 0; i < particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

function Particle(){
  this.xini = walker.x;
  this.yini = walker.y;
  this.pos = createVector(this.xini, this.yini);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.prevPos = this.pos.copy();
  this.maxspeed = 3;

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors){
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){
    stroke(10,200);
    strokeWeight(0.4);
    ellipse(this.pos.x, this.pos.y, 10,10);
    this.updatePrev();
  }

  this.updatePrev = function(){
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function(){
    if(this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if(this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if(this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if(this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }

}

class Walker {
  constructor(){
    this.x = width/2+width/8/2;
    this.y = height/2+height/8/2;
  }
  
  render() {
    stroke(mouseX,mouseY,100);
    strokeWeight(10);
    point(this.x,this.y);
  }

  step() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x = this.x +width/8;
    } else if (choice == 1) {
      this.x = this.x -width/8;
    } else if (choice == 2) {
      this.y = this.y +height/8;
    } else {
      this.y = this.y -height/8;
    }
    this.x = constrain(this.x,width/8/2,width/8*7+width/8/2);
    this.y = constrain(this.y,height/8/2,height/8*7+height/8/2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
      }


