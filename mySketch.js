var inc = 0.01;
var scl = 50;
var cols, rows;
var zoff = 0;
var flowfield;
var particles = [];
let contador = 0;
let walker;

function preload() {
	sonido1 = loadSound("sonambulo/1.mp3?raw=true",loaded());
	sonido2 = loadSound("sonambulo/2.mp3?raw=true",loaded());
	sonido3 = loadSound("sonambulo/3.mp3?raw=true",loaded());
	sonido4 = loadSound("sonambulo/4.mp3?raw=true",loaded());
	sonido5 = loadSound("sonambulo/5.mp3?raw=true",loaded());
	sonido6 = loadSound("sonambulo/6.mp3?raw=true",loaded());
	sonido7 = loadSound("sonambulo/7.mp3?raw=true",loaded());
	sonido8 = loadSound("sonambulo/8.mp3?raw=true",loaded());
	sonido9 = loadSound("sonambulo/9.mp3?raw=true",loaded());
	sonido10 = loadSound("sonambulo/10.mp3?raw=true",loaded());
	sonido11 = loadSound("sonambulo/11.mp3?raw=true",loaded());
	sonido14 = loadSound("sonambulo/14.mp3?raw=true",loaded());
	sonido15 = loadSound("sonambulo/15.mp3?raw=true",loaded());
	sonido16 = loadSound("sonambulo/16.mp3?raw=true",loaded());
	sonido18 = loadSound("sonambulo/18.mp3?raw=true",loaded());
	sonido19 = loadSound("sonambulo/19.mp3?raw=true",loaded());
	sonido20 = loadSound("sonambulo/20.mp3?raw=true",loaded());
	sonido21 = loadSound("sonambulo/21.mp3?raw=true",loaded());
	sonido22 = loadSound("sonambulo/22.mp3?raw=true",loaded());
	sonido25 = loadSound("sonambulo/25.mp3?raw=true",loaded());
	sonido26 = loadSound("sonambulo/26.mp3?raw=true",loaded());
	sonido27 = loadSound("sonambulo/27.mp3?raw=true",loaded());
	sonido28 = loadSound("sonambulo/28.mp3?raw=true",loaded());
	sonido29 = loadSound("sonambulo/29.mp3?raw=true",loaded());
	sonido30 = loadSound("sonambulo/30.mp3?raw=true",loaded());
	sonido31 = loadSound("sonambulo/31.mp3?raw=true",loaded());
	sonido32 = loadSound("sonambulo/32.mp3?raw=true",loaded());
	sonido33 = loadSound("sonambulo/33.mp3?raw=true",loaded());
	sonido34 = loadSound("sonambulo/34.mp3?raw=true",loaded());
	sonido35 = loadSound("sonambulo/35.mp3?raw=true",loaded());
	sonido36 = loadSound("sonambulo/36.mp3?raw=true",loaded());
	sonido37 = loadSound("sonambulo/37.mp3?raw=true",loaded());
	sonido38 = loadSound("sonambulo/38.mp3?raw=true",loaded());
	sonido39 = loadSound("sonambulo/39.mp3?raw=true",loaded());
	sonido40 = loadSound("sonambulo/40.mp3?raw=true",loaded());
	sonido41 = loadSound("sonambulo/41.mp3?raw=true",loaded());
	sonido42 = loadSound("sonambulo/42.mp3?raw=true",loaded());
	sonido44 = loadSound("sonambulo/44.mp3?raw=true",loaded());
	sonido45 = loadSound("sonambulo/45.mp3?raw=true",loaded());
	sonido46 = loadSound("sonambulo/46.mp3?raw=true",loaded());
	sonido47 = loadSound("sonambulo/47.mp3?raw=true",loaded());
	sonido48 = loadSound("sonambulo/48.mp3?raw=true",loaded());
	sonido49 = loadSound("sonambulo/49.mp3?raw=true",loaded());
	sonido50 = loadSound("sonambulo/50.mp3?raw=true",loaded());
	sonido51 = loadSound("sonambulo/51.mp3?raw=true",loaded());
	sonido52 = loadSound("sonambulo/52.mp3?raw=true",loaded());
	sonido53 = loadSound("sonambulo/53.mp3?raw=true",loaded());
	sonido54 = loadSound("sonambulo/54.mp3?raw=true",loaded());
	sonido55 = loadSound("sonambulo/55.mp3?raw=true",loaded());
	sonido56 = loadSound("sonambulo/56.mp3?raw=true",loaded());
	sonido57 = loadSound("sonambulo/57.mp3?raw=true",loaded());
	sonido58 = loadSound("sonambulo/58.mp3?raw=true",loaded());
	sonido59 = loadSound("sonambulo/59.mp3?raw=true",loaded());
	sonido60 = loadSound("sonambulo/60.mp3?raw=true",loaded());
	sonido61 = loadSound("sonambulo/61.mp3?raw=true",loaded());
	sonido62 = loadSound("sonambulo/62.mp3?raw=true",loaded());
	sonido63 = loadSound("sonambulo/63.mp3?raw=true",loaded());
	sonido64 = loadSound("sonambulo/64.mp3?raw=true",loaded());
	sonido65 = loadSound("sonambulo/65.mp3?raw=true",loaded());
}

function loaded() {console.log("loaded")}

function playing() {
	if (	sonido1.isPlaying() || 
		sonido2.isPlaying() || 
		sonido3.isPlaying() || 
		sonido4.isPlaying() || 
		sonido5.isPlaying() || 
		sonido6.isPlaying() || 
		sonido7.isPlaying() || 
		sonido8.isPlaying() || 
		sonido9.isPlaying() || 
		sonido10.isPlaying() || 
		sonido11.isPlaying() || 
		sonido14.isPlaying() || 
		sonido15.isPlaying() || 
		sonido16.isPlaying() || 
		sonido18.isPlaying() || 
		sonido19.isPlaying() || 
		sonido20.isPlaying() || 
		sonido21.isPlaying() || 
		sonido22.isPlaying() || 
		sonido25.isPlaying() || 
		sonido26.isPlaying() || 
		sonido27.isPlaying() || 
		sonido28.isPlaying() || 
		sonido29.isPlaying() || 
		sonido30.isPlaying() || 
		sonido31.isPlaying() || 
		sonido32.isPlaying() || 
		sonido33.isPlaying() || 
		sonido34.isPlaying() || 
		sonido35.isPlaying() || 
		sonido36.isPlaying() || 
		sonido37.isPlaying() || 
		sonido38.isPlaying() || 
		sonido39.isPlaying() || 
		sonido40.isPlaying() || 
		sonido41.isPlaying() || 
		sonido42.isPlaying() || 
		sonido44.isPlaying() || 
		sonido45.isPlaying() || 
		sonido46.isPlaying() || 
		sonido47.isPlaying() || 
		sonido48.isPlaying() || 
		sonido49.isPlaying() || 
		sonido50.isPlaying() || 
		sonido51.isPlaying() || 
		sonido52.isPlaying() || 
		sonido53.isPlaying() || 
		sonido54.isPlaying() || 
		sonido55.isPlaying() || 
		sonido56.isPlaying() || 
		sonido57.isPlaying() || 
		sonido58.isPlaying() || 
		sonido59.isPlaying() || 
		sonido60.isPlaying() || 
		sonido61.isPlaying() || 
		sonido62.isPlaying() || 
		sonido63.isPlaying() || 
		sonido64.isPlaying() || 
		sonido65.isPlaying()
		) {return true} else {return false;}
	}


function avanzar() {if (playing()) {} else {walker.step(); walker.render(); walker.reproducir(); particles[contador++] = new Particle()}}  



function setup() {
  //createCanvas(3348, 934);
  walker = new Walker();
  createCanvas(windowWidth, windowHeight);
  cols = floor(width/scl);
  rows = floor(height/scl);
  flowfield = new Array(cols * rows);
  background(127);
  walker.x = width/2+width/8/2;
  walker.y = height/2+height/8/2;
}

function draw() {
  background(127);
  walker.render();
  //variables de dibujo
  let lo = width /sqrt(64);
  let li = height/sqrt(64);
  //point(width/8,height/8)
 
  //dibuja las lineas
  for (let i = 1; i<8; i++) {
    strokeWeight(.1);
    stroke(1);
    line(lo*i,0,lo*i,width);
    line(0,li*i,width,li*i);
  }
	if (mouseIsPressed) {avanzar()}
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
    this.xprev = this.x;
    this.yprev = this.y;
    var choice = floor(random(8));
    if (choice === 0) {
      this.x = this.x +width/8*floor(random(4));
    } else if (choice == 1) {
      this.x = this.x -width/8*floor(random(4));
    } else if (choice == 2) {
      this.y = this.y +height/8*floor(random(4));
    } else if (choice == 4) {
      this.y = this.y -height/8*floor(random(4));
    } else if (choice == 5) {
      this.x = this.x + width/8;
      this.y = this.y + height/8
    } else if (choice == 6) {
      this.x = this.x + width/8;
      this.y = this.y - height/8
    } else if (choice == 7) {
      this.x = this.x - width/8;
      this.y = this.y + height/8
    } else  if (choice == 8) {
      this.x = this.x - width/8;
      this.y = this.y - height/8
    }
    
    if (this.x > width ) {this.x = width/8/2 } else if (this.x < 0) { this.x = width/8*7+width/8/2 } else if (this.y > height) {this.y = height/8/2} else if (this.y < 0) {this.y = height/8*7+height/8/2}
    if(this.xprev == this.x && this.yprev == this.y) {this.step()}
    //this.x = constrain(this.x,width/8/2,width/8*7+width/8/2);
    //this.y = constrain(this.y,height/8/2,height/8*7+height/8/2);
  }
  
  reproducir() {
  let x = width;
  let y = height;
   if (this.x < x/8) {
	if (this.y < y/8) {
	console.log("llego al primer cuadro y reproduciendo");
	if (playing()) {} else {sonido1.play()}
	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al segundo cuadro");
	if (playing()) {} else {sonido2.play()};
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al tercer cuadro")
	if (playing()) {} else {sonido3.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al cuarto cuadro");
	if (playing()) {} else {sonido4.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al quinto cuadro");
	if (playing()) {} else {sonido5.play()}
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al sexto cuadro");
	if (playing()) {} else {sonido6.play()}
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al septimo cuadro");
	if (playing()) {} else {sonido7.play()}
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al octavo cuadro"); if (playing()) {} else {sonido8.play()}}
	} else if (this.x > x/8 && this.x < x/8*2 ) {
	if (this.y < y/8) {
	console.log("llego al 2primer cuadro");
	if (playing()) {} else {sonido8.play()}
	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al 2segundo cuadro");
	if (playing()) {} else {sonido9.play()}
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al 2tercer cuadro");
	if (playing()) {} else {sonido10.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al 2cuarto cuadro");
	if (playing()) {} else {sonido11.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al 2quinto cuadro");
	if (playing()) {} else {sonido14.play()}
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al 2sexto cuadro");
	if (playing()) {} else {sonido15.play()}
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al 2septimo cuadro");
	if (playing()) {} else {sonido16.play()}
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al 2octavo cuadro"); if (playing()) {} else {sonido18.play()}}
	} else if (this.x > x/8*2 && this.x < x/8*3) {
	if (this.y < y/8) {
	console.log("llego al 3primer cuadro");
	if (playing()) {} else {sonido19.play()}
	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al 3segundo cuadro");
	if (playing()) {} else {sonido21.play()}
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al 3tercer cuadro");
	if (playing()) {} else {sonido22.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al 3cuarto cuadro");
	if (playing()) {} else {sonido25.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al 3quinto cuadro");
	if (playing()) {} else {sonido26.play()}
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al 3sexto cuadro");
	if (playing()) {} else {sonido27.play()}
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al 3septimo cuadro");
	if (playing()) {} else {sonido28.play()}
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al 3octavo cuadro"); if (playing()) {} else {sonido29.play()}}
	} else if (this.x > x/8*3 && this.x < x/8*4) {
	if (this.y < y/8) {
	console.log("llego al 4primer cuadro");
	if (playing()) {} else {sonido30.play()}
	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al 4segundo cuadro");
	if (playing()) {} else {sonido31.play()}
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al 4tercer cuadro");
	if (playing()) {} else {sonido31.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al 4cuarto cuadro");
	if (playing()) {} else {sonido32.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al 4quinto cuadro");
	if (playing()) {} else {sonido33.play()}
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al 4sexto cuadro");
	if (playing()) {} else {sonido34.play()}
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al 4septimo cuadro");
	if (playing()) {} else {sonido35.play()}
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al 4octavo cuadro"); if (playing()) {} else {sonido36.play()}}
	} else if (this.x > x/8*4 && this.x < x/8*5) {
	if (this.y < y/8) {
	console.log("llego al 5primer cuadro");
	if (playing()) {} else {sonido37.play()}
	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al 5segundo cuadro");
	if (playing()) {} else {sonido38.play()}
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al 5tercer cuadro");
	if (playing()) {} else {sonido39.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al 5cuarto cuadro");
	if (playing()) {} else {sonido40.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al 5quinto cuadro");
	if (playing()) {} else {sonido41.play()}
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al 5sexto cuadro");
	if (playing()) {} else {sonido42.play()}
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al 5septimo cuadro");
	if (playing()) {} else {sonido44.play()}
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al 5octavo cuadro"); if (playing()) {} else {sonido45.play()}}
	} else if (this.x > x/8*5 && this.x < x/8*6) {
	if (this.y < y/8) {
	console.log("llego al 6primer cuadro");
	if (playing()) {} else {sonido46.play()}
	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al 6segundo cuadro");
	if (playing()) {} else {sonido47.play()}
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al 6tercer cuadro");
	if (playing()) {} else {sonido48.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al 6cuarto cuadro");
	if (playing()) {} else {sonido49.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al 6quinto cuadro");
	if (playing()) {} else {sonido50.play()}
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al 6sexto cuadro");
	if (playing()) {} else {sonido51.play()}
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al 6septimo cuadro");
	if (playing()) {} else {sonido52.play()}
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al 6octavo cuadro"); if (playing()) {} else {sonido53.play()}}
	} else if (this.x > x/8*6 && this.x < x/8*7) {
	if (this.y < y/8) {
	console.log("llego al 7primer cuadro");
	if (playing()) {} else {sonido54.play()}
	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al 7segundo cuadro");
	if (playing()) {} else {sonido55.play()}
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al 7tercer cuadro");
	if (playing()) {} else {sonido56.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al 7cuarto cuadro");
	if (playing()) {} else {sonido57.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al 7quinto cuadro");
	if (playing()) {} else {sonido58.play()}
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al 7sexto cuadro");
	if (playing()) {} else {sonido59.play()}
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al 7septimo cuadro");
	if (playing()) {} else {sonido61.play()}
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al 7octavo cuadro"); if (playing()) {} else {sonido62.play()}}
	} else if (this.x > x/8*7 && this.x < x/8*8) {
	if (this.y < y/8) {
	console.log("llego al 8primer cuadro");

	} else if (this.y > y/8 && this.y < y/8*2) {
	console.log("llego al 8segundo cuadro");
	if (playing()) {} else {sonido63.play()}
	} else if (this.y > y/8*2 && this.y < y/8*3) {
	console.log("llego al 8tercer cuadro");
	if (playing()) {} else {sonido64.play()}
	} else if (this.y > y/8*3 && this.y < y/8*4) {
	console.log("llego al 8cuarto cuadro");
	if (playing()) {} else {sonido65.play()}
	} else if (this.y > y/8*4 && this.y < y/8*5) {
	console.log("llego al 8quinto cuadro")
	} else if (this.y > y/8*5 && this.y < y/8*6) {
	console.log("llego al 8sexto cuadro")
	} else if (this.y > y/8*6 && this.y < y/8*7) {
	console.log("llego al 8septimo cuadro")
	} else if (this.y > y/8*7 && this.y < y/8*8) {
	console.log("llego al 8octavo cuadro")}
	}
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
      }


