var startButton,but_next1,nextImg,startImg;
var gameState=0;
var sea_calm,sea_shore_island,sea_storm,shipImg;
var ship,ship_brokenImg;
var narrator_img,narrator;
var captain,captainImg;
var zombie_walkAni,zombie_walk_1,zombie_walk_a,zombie_walk_b,zombie_walk_c;
var haunted_jungle;
var crew_idleAni,crew1,crew2,crew3,crew4;
var crew_slideAni;
var zombieA_health=500;
var zombieB_health=600;
var zombieC_health=800;
var beep_sound,z_hurt,coin_collection,bgs;
var score=0;
var restart,restartImg;

function preload(){
sea_calm=loadImage("images/sea_calm.jpg");
sea_shore_island=loadImage("images/sea_shore_island.jpg");
sea_storm=loadImage("images/sea_storm.jpg");
shipImg=loadImage("images/ship.png");
narrator_img=loadImage("images/narrator.png");
ship_brokenImg=loadImage("images/ship_broken.png");
captainImg=loadImage("images/captain.png");
zombie_walkAni=loadAnimation("images/z_Walk(1)f.png","images/z_Walk(2)f.png","images/z_Walk(3)f.png","images/z_Walk(4)f.png","images/z_Walk(5)f.png","images/z_Walk(6)f.png","images/z_Walk(7)f.png","images/z_Walk(8)f.png","images/z_Walk(9)f.png","images/z_Walk(10)f.png")
haunted_jungle=loadImage("images/haunted_jungle.jpg");
crew_idleAni=loadAnimation("images/CowBoy/Idle__000.png","images/CowBoy/Idle__001.png");
crew_slideAni=loadAnimation("images/CowBoy/Slide__001.png","images/CowBoy/Slide__002.png");
beep_sound=loadSound("sounds/beep.mp3");
z_hurt=loadSound("sounds/z_hurt.mp3");
coin_collection=loadSound("sounds/coin_collection.mp3");
bgs=loadSound("sounds/bg.mp3");
nextImg=loadImage("images/next.png");
startImg=loadImage("images/start.png");
restartImg=loadImage("images/restart.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);

startButton=createSprite(width/2,height-200,10,5);
startButton.addImage(startImg);
startButton.scale=0.5;
but_next1=createSprite(width/2-50-150,height-150-50,10,5);
but_next1.addImage(nextImg);
but_next1.scale=0.5;

ship=createSprite(width/2,height/2);
ship.addImage(shipImg);
ship.scale=0.5;
narrator=createSprite(width-200,height/2+100);
narrator.addImage(narrator_img);
narrator.scale=3.52;
captain=createSprite(width-200,height/2+100);
captain.addImage(captainImg);
zombie_walk_1=createSprite(width+10,height-100);
zombie_walk_1.addAnimation("z_walk",zombie_walkAni);
zombie_walk_1.scale=0.4;
crew1=createSprite(width/2-30,height-100);
crew2=createSprite(width/2-60,height-100);
crew3=createSprite(width/2-90,height-100);
crew4=createSprite(width/2-120,height-100);
crew1.addAnimation("c_idle",crew_idleAni); 
crew2.addAnimation("c_idle",crew_idleAni); 
crew3.addAnimation("c_idle",crew_idleAni); 
crew4.addAnimation("c_idle",crew_idleAni); 
crew1.addAnimation("slide",crew_slideAni); 
crew2.addAnimation("slide",crew_slideAni); 
crew3.addAnimation("slide",crew_slideAni);
crew4.addAnimation("slide",crew_slideAni);
crew1.scale=crew2.scale=crew3.scale=crew4.scale=0.4;
zombie_walk_a=createSprite(width+250,height-100);
zombie_walk_a.addAnimation("z_walk",zombie_walkAni);
zombie_walk_a.scale=0.4;
zombie_walk_b=createSprite(width+250,height-100);
zombie_walk_b.addAnimation("z_walk",zombie_walkAni);
zombie_walk_b.scale=0.4;
zombie_walk_c=createSprite(width+700,height-100);
zombie_walk_c.addAnimation("z_walk",zombie_walkAni);
zombie_walk_c.scale=0.4;
restart=createSprite(width*200,height/6+200,10,5);
  restart.addImage(restartImg);
  restart.scale=0.4;
bgs.loop();
}

function draw() {
  var w=windowWidth;
  if(startButton.visible!==false){
  if(mousePressedOver(startButton)){start()};
  }
  if(but_next1.visible!==false){
  if(mousePressedOver(but_next1)){next()};
  }
if(gameState===0){
background(0);
fill('white');
stroke(255,0,0);
strokeWeight(4);
textSize(28);
text("Welcome To My Game",width/2-100,height/10);
textSize(22);
text("You are a Ship Captain & is on a voyage around the World",width/3,height/10+100);
text("Can you & your Crew make it??.... Will you SURVIVE???",width/3,height/10+200);
startButton.visible=true;
but_next1.visible=false;

ship.visible=false;
narrator.visible=false;
captain.visible=false;
zombie_walk_1.visible=false;
crew1.visible=false;
crew2.visible=false;zombie_walk_a.visible=false;
crew3.visible=false;
crew4.visible=false;
restart.visible=false;
drawSprites();
}else if(gameState===1)
{
background(sea_calm);
startButton.visible=false;
but_next1.visible=true;

ship.visible=true;
narrator.visible=true;
captain.visible=false;
zombie_walk_1.visible=false;zombie_walk_a.visible=false;
crew1.visible=false;
crew2.visible=false;
crew3.visible=false;
crew4.visible=false;
restart.visible=false;
drawSprites();
fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("Hello! The Journey is Good Till Now! Hope You Are Enjoying.....",width/10,height-15);

}else if(gameState===2){
but_next1.visible=true;
startButton.visible=false;

background(sea_storm);
ship.visible=false;
captain.visible=false;
zombie_walk_1.visible=false;zombie_walk_a.visible=false;
crew1.visible=false;
crew2.visible=false;
crew3.visible=false;
restart.visible=false;
crew4.visible=false;
narrator.visible=true;

drawSprites();
fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("What's Happening?? A Teribble Storm!! Captain!!!!",width/10,height-15);
}else if(gameState===3){
  but_next1.visible=true;
  startButton.visible=false;
crew1.visible=false;zombie_walk_a.visible=false;
crew2.visible=false;
crew3.visible=false;
restart.visible=false;
crew4.visible=false;
narrator.visible=false;
captain.visible=false;
background(0,255);
drawSprites();
}else if(gameState===4){
  but_next1.visible=true;
startButton.visible=false;
  zombie_walk_1.visible=false;
  crew1.visible=false;
  crew2.visible=false;
  restart.visible=false;zombie_walk_a.visible=false;
  crew3.visible=false;
  crew4.visible=false;
  narrator.visible=true;
  background(sea_shore_island);
  ship.visible=true;
  ship.addImage(ship_brokenImg);
  ship.scale=1.2;
  drawSprites();
  fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("What just Happened???.... Where are we? What happened to ship??It's completely broken Captain!!",width/10,height-15);
}else if(gameState===5){
  but_next1.visible=true;
startButton.visible=false;
  crew1.visible=false;
  crew2.visible=false;
  crew3.visible=false;zombie_walk_a.visible=false;
  crew4.visible=false;
  restart.visible=false;
  narrator.visible=false;
  captain.visible=true;
  zombie_walk_1.visible=false;

  background(sea_shore_island);
  drawSprites();
fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("Yeah! I can also see it's broken. Where are we now??? This place is not even in the map",width/10,height-15);
}else if(gameState===6){
  but_next1.visible=true;
startButton.visible=false;
  zombie_walk_1.visible=false;
  crew1.visible=false;zombie_walk_a.visible=false;
  crew2.visible=false;
  restart.visible=false;
  crew3.visible=false;
  crew4.visible=false;
    narrator.visible=false;
    captain.visible=true;
    background(sea_shore_island);
    drawSprites();
    fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("I think this is a deserted island! Hey You All! U Okay?? Take whatever is there in the ship & come with me",width/10,height-15);
}else if(gameState===7){
  but_next1.visible=true;
  startButton.visible=false;
  narrator.visible=false;
  captain.visible=false;
  ship.visible=false;
  restart.visible=false;
  crew1.visible=false;zombie_walk_a.visible=false;
crew2.visible=false;
crew3.visible=false;
crew4.visible=false;
  background(haunted_jungle);
  zombie_walk_1.visible=true;
  zombie_walk_1.velocityX=-3;
  console.log(w);
 
drawSprites();
 if(zombie_walk_1.x<=0){
   zombie_walk_1.visible=false;
 }
}else if(gameState===8){
  but_next1.visible=true;
  startButton.visible=false;
  narrator.visible=false;restart.visible=false;
  captain.visible=true;
  ship.visible=false;
  crew1.visible=false;
crew2.visible=false;
crew3.visible=false;zombie_walk_a.visible=false;
crew4.visible=false;
  background(haunted_jungle);
  zombie_walk_1.visible=false;
  drawSprites();
  fill(Infinity);
  stroke(0);
  strokeWeight(3);
  textSize(24);
  text("What was that?? Was that.... A ZOMBIE????!!!",width/10,height-15);
}else if(gameState===9){
  but_next1.visible=true;
startButton.visible=false;
  narrator.visible=false;
  captain.visible=true;restart.visible=false;
  ship.visible=false;
  crew1.visible=false;zombie_walk_a.visible=false;
crew2.visible=false;
crew3.visible=false;
crew4.visible=false;
  background(haunted_jungle);
  zombie_walk_1.visible=false;
  drawSprites();
  fill(Infinity);
  stroke(0);
  strokeWeight(3);
  textSize(24);
  text("Hey You All Be Very Careful! I think we have entered a wrong place",width/10,height-38);
  text("Have your weapons ready!",width/10,height-15);
}else if(gameState===10){
  but_next1.visible=true;
  startButton.visible=false;
  narrator.visible=false;restart.visible=false;
  captain.visible=false;zombie_walk_a.visible=false;
  ship.visible=false;
  background(haunted_jungle);
  zombie_walk_1.visible=false;
  crew1.visible=true;
crew2.visible=true;
crew3.visible=true;
crew4.visible=true;
drawSprites();
fill(Infinity);
  stroke(0);
  strokeWeight(3);
  textSize(24);
  text("Yes Sir! We're ready to take down our enemy!!!",width/10,height-15);
}else if(gameState===11){
  but_next1.visible=true;
  startButton.visible=false;
  narrator.visible=false;
  captain.visible=true;
  ship.visible=false;
  background(haunted_jungle);
  zombie_walk_1.visible=false;restart.visible=false;
  crew1.visible=true;
crew2.visible=true;
crew3.visible=true;zombie_walk_a.visible=false;
crew4.visible=true;
drawSprites();
fill(Infinity);
  stroke(0);
  strokeWeight(3);
  textSize(24);
  text("That's the spirit!! Let's conquer it!!!!!!!",width/10,height-15);
}else if(gameState===12){
  but_next1.visible=true;
  startButton.visible=false;
  narrator.visible=false;restart.visible=false;
  captain.visible=true;
  ship.visible=false;
  background(haunted_jungle);
  zombie_walk_1.visible=false;
  crew1.visible=false;
crew2.visible=false;
crew3.visible=false;
crew4.visible=false;
zombie_walk_a.visible=false;
drawSprites();
fill(Infinity);
  stroke(0);
  strokeWeight(3);
  textSize(24);
  text("Let's hide in the bush and wait for the zombies to come",width/10,height-15);
}else if(gameState===13){
  but_next1.visible=false;
startButton.visible=false;
  narrator.visible=false;restart.visible=false;
  captain.visible=false;
  ship.visible=false;
  background(haunted_jungle);
  zombie_walk_1.visible=false;
  crew1.visible=false;
crew2.visible=false;
crew3.visible=false;
crew4.visible=false;
zombie_walk_a.velocityX=-3.5;
drawSprites();
if(zombie_walk_a.x<=width){
    zombie_walk_a.velocityX=-1.5;
  captain.visible=true;
  crew1.visible=true;
crew2.visible=true;
crew3.visible=true;
crew4.visible=true;
zombie_walk_a.visible=true;
drawSprites();
fill(Infinity);
  stroke(0);
  strokeWeight(3);
  textSize(24);
 text("There they are!! Click on the zombies to hit them",width/10,height-15);
 fill(255,255,0);
 stroke(255,0,0);
 strokeWeight(3);
 textSize(24);
 text("SCORE: "+score,width-150,height/10);
 if(mousePressedOver(zombie_walk_a)){
  zombieA_health-=25;
 crew1.changeAnimation("slide",crew_slideAni);
 crew2.changeAnimation("slide",crew_slideAni);
 crew3.changeAnimation("slide",crew_slideAni);
 crew4.changeAnimation("slide",crew_slideAni);
 z_hurt.play();
// console.log(zombie_health);
}
if(zombieA_health<=0){
  coin_collection.play();
  score=100;
  crew1.changeAnimation("c_idle",crew_idleAni);
 crew2.changeAnimation("c_idle",crew_idleAni);
 crew3.changeAnimation("c_idle",crew_idleAni);
 crew4.changeAnimation("c_idle",crew_idleAni);
 zombie_walk_a.destroy();
 
zombie_walk_b.velocityX=-2.5;
zombie_walk_c.velocityX=-4;
}
if(mousePressedOver(zombie_walk_b)){
  zombieB_health-=25;
 crew1.changeAnimation("slide",crew_slideAni);
 crew2.changeAnimation("slide",crew_slideAni);
 crew3.changeAnimation("slide",crew_slideAni);
 crew4.changeAnimation("slide",crew_slideAni);
 z_hurt.play();

// console.log(zombie_health);
}
if(mousePressedOver(zombie_walk_c)){
  zombieC_health-=25;
 crew1.changeAnimation("slide",crew_slideAni);
 crew2.changeAnimation("slide",crew_slideAni);
 crew3.changeAnimation("slide",crew_slideAni);
 crew4.changeAnimation("slide",crew_slideAni);
 z_hurt.play();

// console.log(zombie_health);
}
if(zombieB_health<=0){
  coin_collection.play();
  score=200;
  crew1.changeAnimation("c_idle",crew_idleAni);
 crew2.changeAnimation("c_idle",crew_idleAni);
 crew3.changeAnimation("c_idle",crew_idleAni);
 crew4.changeAnimation("c_idle",crew_idleAni);
 zombie_walk_b.destroy();
 }
 if(zombieC_health<=0){
  coin_collection.play();
  score=300;
  crew1.changeAnimation("c_idle",crew_idleAni);
 crew2.changeAnimation("c_idle",crew_idleAni);
 crew3.changeAnimation("c_idle",crew_idleAni);
 crew4.changeAnimation("c_idle",crew_idleAni);
 zombie_walk_c.destroy();
 gameState="win";
}

if(zombie_walk_a.isTouching(crew1) || zombie_walk_b.isTouching(crew1) || zombie_walk_c.isTouching(crew1) ){
  crew1.visible=false;
}
if(zombie_walk_a.isTouching(crew2) || zombie_walk_b.isTouching(crew2) || zombie_walk_c.isTouching(crew2) ){
  crew2.visible=false;
}
if(zombie_walk_a.isTouching(crew3) || zombie_walk_b.isTouching(crew3) || zombie_walk_c.isTouching(crew3) ){
  crew3.visible=false;
}
if(zombie_walk_a.isTouching(crew4) || zombie_walk_b.isTouching(crew4) || zombie_walk_c.isTouching(crew4) ){
  crew4.visible=false;
  gameState="lose";
}
}

}else if(gameState==="win"){
  but_next1.visible=false;
  startButton.visible=false;
    narrator.visible=false;
    captain.visible=false;
    ship.visible=false;
    background(haunted_jungle);
    zombie_walk_1.visible=false;
    crew1.visible=false;
  crew2.visible=false;
  crew3.visible=false;
  crew4.visible=false;
  fill(255,0,0);
  textSize(30);
  text("YAY!!!!! YOU WON THE GAME",width/2-100,height/6);
  textSize(20);
  text("THANK YOU FOR PLAYING    - Developed by SAYAN MANNA",width/2,height/6+100);
  text("TO RESTART THE GAME, PLEASE REFRESH THIS PAGE",width/2-50,height/6+200);

  drawSprites();
  
}else if(gameState==="lose"){
  but_next1.visible=false;
  startButton.visible=false;
    narrator.visible=false;
    captain.visible=false;
    ship.visible=false;
    background(haunted_jungle);
    zombie_walk_1.visible=false;
    crew1.visible=false;
  crew2.visible=false;
  crew3.visible=false;
  crew4.visible=false;
  fill(255,0,0);
  textSize(30);
  text("SORRY!! BETTER LUCK NEXT TIME",width/2-100,height/6);
  textSize(20);
  text("THANK YOU FOR PLAYING    - Developed by SAYAN MANNA",width/2,height/6+100);
  text("TO RESTART THE GAME, PLEASE REFRESH THIS PAGE",width/2-50,height/6+200);
  drawSprites();
  if(mousePressedOver(restart)){
    restartFnc();
  }
}
}

function start(){
beep_sound.play();
gameState=1;
}

function next(){
beep_sound.play();
gameState++;
}

function restartFnc(){
  gameState=0;
  score=0;
  ship.addImage(shipImg);
  ship.scale=0.5;
  }