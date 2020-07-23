
var mySound;

function preload() {
	mySound = loadSound("https://www.mboxdrive.com/5.mp3");
}

function setup() {
	createCanvas(400,400);
	background(100);
  }

    function mousePressed() {
        if (soundTrack.isPlaying()) {
          soundTrack.pause();
          soundPlaying = false;
        } else {
          soundTrack.play();
          soundPlaying = true;
        }
      }
