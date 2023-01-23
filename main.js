left_wrist_x = "";
right_wrist_x = "";
difference = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 430);
    canvas.position(700, 170);

    poseNet = ml5.poseNet(video, modelLoaded);  
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }

    right_wrist_x = results[0].pose.rightWrist.x;
    console.log("THE X COORDINATES OF RIGHT WRIST ARE" + right_wrist_x + ".");

    left_wrist_x = results[0].pose.leftWrist.x;
    console.log("THE X COORDINATES OF LEFT WRIST ARE" + left_wrist_x + ".");

    difference = floor(right_wrist_x - left_wrist_x);
    console.log("DIFFERENCE BETWEEN THE LEFT AND THE RIGHT WRIST IS " + difference + ".");
}

function draw(){
    background('black');
    textSize(difference);
    fill('#387413');
    text('Hello!', 40, 200);
}