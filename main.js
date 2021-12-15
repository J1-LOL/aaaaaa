noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
video = createCapture(VIDEO);
video.size(300, 300);

canvas = createCanvas(300, 300);
canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet is Initialized!')
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill('#FFE787');
    text(l0lguy, 50, 400);
}

   
function gotPoses(results){
if (results.length>0){
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}
}
