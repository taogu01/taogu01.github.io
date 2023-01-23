var x_sec = 20;
var y_sec = 475;
var x_mn = 20;
var y_mn = 350;
var x_hr = 20;
var y_hr = 225;
var dia_sec = 40;
var dia_mn = 60;
var dia_hr = 80;
var maxLength = 500;
var canvasWidth = 800;
var canvasHeight = 600;

function setup() {
  createCanvas(canvasWidth,canvasHeight); 
}

function draw() {
  
  background(210);
  let hr = hour();
  let mn = minute();
  let sec = second();

  // background(225);
  // textSize(32);
  // fill(180);
  // text(hr, 10, 30);
  // fill(100);
  // text(mn, 10, 60);
  // fill(0);
  // text(sec, 10, 90);
  
  // hr = 24;
  // mn = 60;
  // sec = 60;
  
  for (var i = 0; i < sec; i++){
    drawBall(y_sec, x_sec + dia_sec/2 + map(i, 0, 60, 0, maxLength - dia_sec/2 + 10), dia_sec, 150, 150 + i, [100, 149, 237]);
  }
  
  for (var j = 0; j < mn; j++){
    drawBall(y_mn, x_mn + dia_mn/2 + map(j, 0, 60, 0, maxLength - dia_mn/2), dia_mn, 150, 150 + j, [255, 240, 245]);
  }
  
  for (var k = 0; k < hr; k++){
    drawBall(y_hr, x_hr + dia_hr/2 + map(k, 0, 24, 0, maxLength - dia_hr/2), dia_hr, 150, 150 + k, [255, 160, 122]);
  }
  
  
}

function drawBall(x, y, dia, k, t, c) {
  // noStroke();
  stroke(c[0],c[1],c[2]);
  strokeWeight(map(dia,0,dia,0,5,true));
  fill(k, t);
  ellipse(x, y, dia, dia);
}