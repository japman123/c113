function setup() {
  canvas = createCanvas(650,500);
  canvas.position(500, 150);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
image(video,0,0, 650, 500);
circle(30,30,90)
circle(620,30,90)
rect(620,180,400)
circle(180,180,100)
rect (100,100,5,)
}