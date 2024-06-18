
difference = 0;
rightWrist_x = 0;
leftWrist_x = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(450, 450);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftWrist_x - rightWrist_x);
        console.log("leftWristX  = " + leftWrist_x  + " rightWristX = "+ rightWrist_x + " difference = " + difference);

  }
}

function draw(){
    background('#da8f83');
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = " + difference + "px";
    fill("#9966CC")
    textSize(difference);
    text('Anusha',50,400);
}
