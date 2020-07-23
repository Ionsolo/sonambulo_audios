
var mySound;

function preload() {
	mySound = loadSound("https://raw.githubusercontent.com/Ionsolo/sonambulo_audios/master/file.mp3");
}

function setup() {
	createCanvas(400,400);
	background(100);
  }

    function mousePressed() {
        if (mySound.isPlaying()) {
          mySound.pause();
          mySound = false;
        } else {
          mySound.play();
          mySound = true;
        }
      }
