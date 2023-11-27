var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8dd6450c-40b6-4b76-b79f-0f769cb04649","676e5e1b-bc63-4395-a99d-98f55cdfe366","a7149756-70df-4182-b2d8-d93c6b35df3d","1181d29a-1b24-43cd-b73c-85cb1323c19b","b1e63eee-656c-4da5-9d0c-ae5d0269b5ca","4b7e56d9-7b83-49b4-95a4-627bfaa5717c","d1c1f9cc-4fd2-4c20-9890-3995059bdfac","f7435a35-d436-4ff6-bb4d-fcea015cf80e","0032e6d4-1c52-4590-b7ac-afc9f193ab60","7ccbb9c9-0365-4e46-b124-e3be592e055a","a63f8058-6d9d-429f-a4a8-e49e7083492b","ca97e313-1849-40bf-864c-23e4cc2fc06a","d3c0147b-e748-4c02-8411-0d13bb7a7a3c","c6353923-b8d8-4663-9720-a9cec5ac7595","6bb4d3f6-0e98-4330-8c1c-5e643cb25072","35e41b0f-b6d0-401e-896f-3ad634c02834","88760938-f108-43bc-9773-03749de59862","478b021a-ddb4-453f-8bc5-bb140a8a398a","14af32e2-76cb-4a17-ad5e-7965833dc88d","e153e2a7-171d-466c-a4ce-a1008d36aacf","5e47f748-555b-42d3-b6cb-39cc7fb0fe61","ff3940c5-69ef-4fdf-b04c-cceeacd1f876"],"propsByKey":{"8dd6450c-40b6-4b76-b79f-0f769cb04649":{"name":"alien1","sourceUrl":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png"},"676e5e1b-bc63-4395-a99d-98f55cdfe366":{"name":"alien2","sourceUrl":"assets/api/v1/animation-library/gamelab/tDr0azHb0tI.4E2wZmB6a4qum9FoAZL0/category_retro/retroaliens_10.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"tDr0azHb0tI.4E2wZmB6a4qum9FoAZL0","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tDr0azHb0tI.4E2wZmB6a4qum9FoAZL0/category_retro/retroaliens_10.png"},"a7149756-70df-4182-b2d8-d93c6b35df3d":{"name":"alien3","sourceUrl":null,"frameSize":{"x":332,"y":365},"frameCount":2,"looping":true,"frameDelay":20,"version":"9QUoo8i5qr8VxQ_t1f3qeZKLqlLIOjUH","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":730},"rootRelativePath":"assets/a7149756-70df-4182-b2d8-d93c6b35df3d.png"},"1181d29a-1b24-43cd-b73c-85cb1323c19b":{"name":"spacefighter","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":2,"looping":true,"frameDelay":12,"version":"5b4CSI_Doi_sW2CFDZFy8CQ_i2BuIuS7","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":796},"rootRelativePath":"assets/1181d29a-1b24-43cd-b73c-85cb1323c19b.png"},"b1e63eee-656c-4da5-9d0c-ae5d0269b5ca":{"name":"spaceDestroyed","sourceUrl":null,"frameSize":{"x":396,"y":398},"frameCount":3,"looping":true,"frameDelay":12,"version":"URJ2N.a8RxKEuFA5NpjrK4mn1a0.JKAh","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":792,"y":796},"rootRelativePath":"assets/b1e63eee-656c-4da5-9d0c-ae5d0269b5ca.png"},"4b7e56d9-7b83-49b4-95a4-627bfaa5717c":{"name":"boss1","sourceUrl":null,"frameSize":{"x":365,"y":365},"frameCount":2,"looping":true,"frameDelay":12,"version":"z56VtNdfMizGiEGGDmnfKNfi.fMrwBqz","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":730},"rootRelativePath":"assets/4b7e56d9-7b83-49b4-95a4-627bfaa5717c.png"},"d1c1f9cc-4fd2-4c20-9890-3995059bdfac":{"name":"alien4","sourceUrl":"assets/api/v1/animation-library/gamelab/gVjFhS3G.mFm4Jy8mgZBPmTQjCd36dHy/category_retro/retroaliens_25.png","frameSize":{"x":356,"y":356},"frameCount":1,"looping":true,"frameDelay":2,"version":"gVjFhS3G.mFm4Jy8mgZBPmTQjCd36dHy","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":356},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gVjFhS3G.mFm4Jy8mgZBPmTQjCd36dHy/category_retro/retroaliens_25.png"},"f7435a35-d436-4ff6-bb4d-fcea015cf80e":{"name":"alien5","sourceUrl":"assets/api/v1/animation-library/gamelab/ZhXOzdnre5u66314c4S41rbBaLa6PEbD/category_retro/retroaliens_07.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZhXOzdnre5u66314c4S41rbBaLa6PEbD","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZhXOzdnre5u66314c4S41rbBaLa6PEbD/category_retro/retroaliens_07.png"},"0032e6d4-1c52-4590-b7ac-afc9f193ab60":{"name":"finalBoss","sourceUrl":"assets/api/v1/animation-library/gamelab/1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4/category_retro/retroship_21.png","frameSize":{"x":283,"y":308},"frameCount":1,"looping":true,"frameDelay":2,"version":"1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":308},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1V75Vfoe.RrGZRMPR7RJKGTzrbR4gG_4/category_retro/retroship_21.png"},"7ccbb9c9-0365-4e46-b124-e3be592e055a":{"name":"boss2","sourceUrl":"assets/api/v1/animation-library/gamelab/GiGe5Z6fPTV_epVnirL3V_u0XGqpaRWu/category_retro/retroaliens_02.png","frameSize":{"x":356,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GiGe5Z6fPTV_epVnirL3V_u0XGqpaRWu","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":356,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GiGe5Z6fPTV_epVnirL3V_u0XGqpaRWu/category_retro/retroaliens_02.png"},"a63f8058-6d9d-429f-a4a8-e49e7083492b":{"name":"boss3","sourceUrl":"assets/api/v1/animation-library/gamelab/oX1TB0JnpgRaa2CowPdcDEzm957e0ebe/category_retro/retroaliens_11.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oX1TB0JnpgRaa2CowPdcDEzm957e0ebe","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oX1TB0JnpgRaa2CowPdcDEzm957e0ebe/category_retro/retroaliens_11.png"},"ca97e313-1849-40bf-864c-23e4cc2fc06a":{"name":"boss4","sourceUrl":"assets/api/v1/animation-library/gamelab/gweexffTvzt5T_AHvh28Ivkd3olW3tsV/category_retro/retrocreature_05.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"gweexffTvzt5T_AHvh28Ivkd3olW3tsV","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gweexffTvzt5T_AHvh28Ivkd3olW3tsV/category_retro/retrocreature_05.png"},"d3c0147b-e748-4c02-8411-0d13bb7a7a3c":{"name":"background1","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"FxwKkoD2X_dFcNIVlko32kBPY885ViFF","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/d3c0147b-e748-4c02-8411-0d13bb7a7a3c.png"},"c6353923-b8d8-4663-9720-a9cec5ac7595":{"name":"alienboom","sourceUrl":null,"frameSize":{"x":236,"y":237},"frameCount":4,"looping":true,"frameDelay":20,"version":"MhbhCX2Ov6oWV_LixLARviM0M9ygQqMR","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":472,"y":474},"rootRelativePath":"assets/c6353923-b8d8-4663-9720-a9cec5ac7595.png"},"6bb4d3f6-0e98-4330-8c1c-5e643cb25072":{"name":"startmenu","sourceUrl":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/6bb4d3f6-0e98-4330-8c1c-5e643cb25072.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":".xjVeoenhzb0PjZXbT2iUT4mLj8zZVAE","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/6bb4d3f6-0e98-4330-8c1c-5e643cb25072.png"},"35e41b0f-b6d0-401e-896f-3ad634c02834":{"name":"start","sourceUrl":null,"frameSize":{"x":1271,"y":521},"frameCount":2,"looping":true,"frameDelay":12,"version":"gvFurL8YcuGSR2VafojULcFGXXF3v6km","loadedFromSource":true,"saved":true,"sourceSize":{"x":1271,"y":1042},"rootRelativePath":"assets/35e41b0f-b6d0-401e-896f-3ad634c02834.png"},"88760938-f108-43bc-9773-03749de59862":{"name":"heart1","sourceUrl":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/88760938-f108-43bc-9773-03749de59862.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"vnddLXwhhClDVOhYWMK.M65Re7hDZup5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/88760938-f108-43bc-9773-03749de59862.png"},"478b021a-ddb4-453f-8bc5-bb140a8a398a":{"name":"heart2","sourceUrl":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/88760938-f108-43bc-9773-03749de59862.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"vnddLXwhhClDVOhYWMK.M65Re7hDZup5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/88760938-f108-43bc-9773-03749de59862.png"},"14af32e2-76cb-4a17-ad5e-7965833dc88d":{"name":"heart3","sourceUrl":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/88760938-f108-43bc-9773-03749de59862.png","frameSize":{"x":1200,"y":1200},"frameCount":1,"looping":true,"frameDelay":4,"version":"vnddLXwhhClDVOhYWMK.M65Re7hDZup5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/88760938-f108-43bc-9773-03749de59862.png"},"e153e2a7-171d-466c-a4ce-a1008d36aacf":{"name":"zap","sourceUrl":null,"frameSize":{"x":102,"y":194},"frameCount":2,"looping":true,"frameDelay":12,"version":"rSbs3Z55cby8_iPnm4qxG6dFhFhVIvW1","loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":194},"rootRelativePath":"assets/e153e2a7-171d-466c-a4ce-a1008d36aacf.png"},"5e47f748-555b-42d3-b6cb-39cc7fb0fe61":{"name":"win","sourceUrl":null,"frameSize":{"x":910,"y":480},"frameCount":2,"looping":true,"frameDelay":12,"version":"lKQcFgylf2ekWXR7VgepYEzB41tBLxHf","loadedFromSource":true,"saved":true,"sourceSize":{"x":910,"y":960},"rootRelativePath":"assets/5e47f748-555b-42d3-b6cb-39cc7fb0fe61.png"},"ff3940c5-69ef-4fdf-b04c-cceeacd1f876":{"name":"gameover","sourceUrl":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/ff3940c5-69ef-4fdf-b04c-cceeacd1f876.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"FPV509ZbsL8n.4n_Ay8F3jWVHMaGmTaH","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/SG8T8Tj5aRlJKmiT8L4p8-Ek2B81Cld5G7DRZznNFGQ/ff3940c5-69ef-4fdf-b04c-cceeacd1f876.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Variable declaration

//background and game level
createEdgeSprites();
var background1 = createSprite(200,200);
background1.visible = false;
background1.setAnimation("background1");
background1.scale = 1;
background1.rotationSpeed = -0.1;

var background0 = createSprite(200,200);
background0.visible = true;
background0.setAnimation("startmenu");
background0.scale = 0.6;

var menu2 = createSprite(200,200);
menu2.setAnimation("win");
menu2.scale = 0.5;
menu2.visible = false;

var gameover = createSprite(200,200);
gameover.setAnimation("gameover");
gameover.visible = false;

var start = createSprite(180,350);
start.setAnimation("start");
start.scale = 0.1;
start.visible = false;

//Variable functions
var gameState = "start";
var score = 0;
  //timers
var stateTime1 = 0;
var boomTimer1 = 20;
var stateTime2 = 0;
var boomTimer2 = 20;
var stateTime3 = 0;
var boomTimer3 = 20;


//Spaceship
var spaceship = createSprite(200,350);
spaceship.setAnimation("spacefighter");
spaceship.scale = 0.1;
spaceship.visible = false;

//bullets
var bullet = createSprite(100,-10,5,10);
bullet.shapeColor = "red";
bullet.visible = false;


//
var aliensGroup = createGroup(); 

//aliens
  //zaps
var zap = createSprite(-50,0);
zap.visible = false;
zap.setAnimation("zap");
zap.scale = 0.4;

var zap2 = createSprite(-50,0);
zap2.visible = false;
zap2.setAnimation("zap");
zap2.scale = 0.4;

var zap3 = createSprite(-50,0);
zap3.visible = false;
zap3.setAnimation("zap");
zap3.scale = 0.4;

var zap2 = createSprite(-50,0);
zap2.visible = false;
zap2.setAnimation("zap");
zap2.scale = 0.4;



 
  //alien Config

var alien1 = createSprite(50,120);
alien1.setAnimation("alien1");
alien1.scale =0.1;
alien1.visible = false;
alien1.velocityX = 5;


var alien2 = createSprite(50,100);
alien2.setAnimation("alien2");
alien2.scale =0.1;
alien2.visible = false;
alien2.velocityX = 10;

var alien3 = createSprite(50,120);
alien3.setAnimation("alien3");
alien3.scale =0.1;
alien3.visible = false;
alien3.velocityX = 7;




//Game consumbles Functions
  //hearts

  var heart = 0;

  var heart1 = createSprite(20,20);
  heart1.setAnimation("heart1");
  heart1.scale = 0.03;
  heart1.visible = false;
  
  var heart2 = createSprite(20,50);
  heart2.setAnimation("heart1");
  heart2.scale = 0.03;
  heart2.visible = false;
  
  var heart3 = createSprite(20,80);
  heart3.setAnimation("heart1");
  heart3.scale = 0.03;
  heart3.visible = false;

  //score
  function SCORE(){
    if (score == 6){
      gameState = "end";
    }
    
  }


//Game mechanics Functions
function SpaceshipMovements(){
  spaceship.visible = true;
  if (keyDown("left")){
    spaceship.x = spaceship.x - 5;
  }
  if (keyDown("right")){
    spaceship.x = spaceship.x + 5;
  }

  spaceship.bounce(edges);
  
}

//Alien's Level 1 functions
  //zap probs
function ZapProbability(){
  var zapper = randomNumber(0,20);
  zap.visible = true;
  if (zapper == 0){
    zap.x=alien1.x;
    zap.y=alien1.y;
    zap.velocityY = 10;
  }
  if(zap.y>400){
    zapper = randomNumber(0,20);
  }
}

function ZapProbability2(){
  var zapper2 = randomNumber(0,40);
  zap2.visible = true;
  if (zapper2 == 0){
    zap2.x=alien2.x;
    zap2.y=alien2.y;
    zap2.velocityY = 10;
  }
  if(zap2.y>400){
    zapper2 = randomNumber(0,20);
  }
}

function ZapProbability3(){
  var zapper3 = randomNumber(0,40);
  zap3.visible = true;
  if (zapper3 == 0){
    zap3.x=alien3.x;
    zap3.y=alien3.y;
    zap3.velocityY = 10;
  }
  if(zap2.y>400){
    zapper3 = randomNumber(0,20);
  }
}

function SpaceShipDestroy(){
  if (heart == 3){
    gameState = "over";
  }
}

function HeartDestroy(){
  if (zap.isTouching(spaceship)){
    zap.x = -400;
    heart = heart + 1;
    console.log(heart);
  }
  if (zap2.isTouching(spaceship)){
    zap2.x = -400;
    heart = heart + 1;
    console.log(heart);
  }
  if (zap3.isTouching(spaceship)){
    zap3.x = -400;
    heart = heart + 1;
    console.log(heart);
  }
}

function HeartDisplay(){
  if (heart ==1){
    heart1.destroy();
  }
  if (heart ==2){
    heart2.destroy();
  }
  if (heart ==3){
    heart3.destroy();
  }
}
//Shoot
function Shoot(){
  bullet.visible = true;
  if (mouseWentDown("left") && bullet.y <0){
    playSound("assets/category_pop/puzzle_game_downgrade_bubble_04.mp3", false);
    bullet.x = spaceship.x;
    bullet.y = spaceship.y;
    bullet.velocityY = -10;
  }
}

function Alien1Shot(){
  if (bullet.isTouching(alien1)){
    playSound("assets/default.mp3", false);
    bullet.x = 100;
    bullet.y = -10;
    alien1.setAnimation("alienboom");
    alien1.scale = 0.2;
    score = score + 1;
    stateTime1 = "true";
    if (stateTime1 == "true"){
    boomTimer1 = boomTimer1 - 10;
    alien1.velocityX = 0;
    if (Math.round(boomTimer1) == 0){
      alien1.destroy();
      zap.destroy();
      console.log(boomTimer1);
    }
  
    }
  }
}
function Alien2Shot(){
  if (bullet.isTouching(alien2)){
    playSound("assets/default.mp3", false);
    bullet.x = 100;
    bullet.y = -10;
    alien2.setAnimation("alienboom");
    alien2.scale = 0.2;
    score = score + 1;
    stateTime2 = "true";
    if (stateTime2 == "true"){
    boomTimer2 = boomTimer2 - 10;
    alien2.velocityX = 0;
    if (Math.round(boomTimer2) == 0){
      alien2.destroy();
      zap2.destroy();
      console.log(boomTimer2);
    }
  
    }
  }
}
function Alien3Shot(){
  if (bullet.isTouching(alien3)){
    bullet.x = 100;
    bullet.y = -10;
    alien3.setAnimation("alienboom");
    alien3.scale = 0.2;
    score = score + 1;
    stateTime3 = "true";
    if (stateTime3 == "true"){
    boomTimer3 = boomTimer3 - 10;
    alien3.velocityX = 0;
    if (Math.round(boomTimer3) == 0){
      alien3.destroy();
      zap3.destroy();
      console.log(boomTimer3);
    }
  
    }
  }
}

// Game run functions
function GameStart(){
  if (gameState == "start"){
    start.visible = true;
  } else {
    
  }
  if (keyWentDown("space")){
    gameState = "level1";
    
  }
}


function Level1(){
  if (gameState == "level1"){
    Shoot();
    Alien1Shot();
    Alien2Shot();
    Alien3Shot();
    SpaceshipMovements();
    start.visible = false;
    background0.visible = false;
    background1.visible = true;
    spaceship.visible = true;
    //aliens
    alien1.visible = true;
    alien2.visible = true;
    alien3.visible = true;
    
    //hearts
    heart1.visible = true;
    heart2.visible = true;
    heart3.visible = true;
    ZapProbability();
    ZapProbability2();
    ZapProbability3();
    //SpaceShipDestroy();
    HeartDisplay();
    HeartDestroy();
    SCORE();
    SpaceShipDestroy();
  }
}
function GameEnd(){
  if (gameState == "end"){
    spaceship.visible = false;
    background1.visible = false;
    menu2.visible = true;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
  }
  if (gameState == "over"){
    spaceship.setAnimation("spaceDestroyed");
    gameover.visible = true;
    alien1.visible = false;
    alien2.visible = false;
    alien3.visible = false;
    zap.visible = false;
    zap2.visible = false;
    zap3.visible = false;
    heart1.visible =false;
    heart2.visible =false;
    heart3.visible =false;
}
}


function draw() {
  background("white");
  drawSprites();



  alien1.bounceOff(edges);
  alien2.bounceOff(edges);
  alien3.bounceOff(edges);




  GameStart();
  GameEnd();
  Level1();
  SpaceShipDestroy();
  
}
playSound("assets/category_background/eerie_beginnings.mp3", false);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
