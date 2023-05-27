let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(400, 400);
  
  video = createCapture(VIDEO);
  video.size(width, height);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet model loaded');
}

function gotPoses(results) {
  poses = results;
}

function draw() {
  background(255);
  
  if (poses.length > 0) {
    let pose = poses[0].pose;
    let nose = pose['nose'];
    
    fill(0);
    textSize(12);
    textFont('Georgia');
    text("인공지능", nose.x, nose.y);
  }
}
