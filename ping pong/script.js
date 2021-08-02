const canvasHeight = 600;
const canvasWidth = 400;


var replay = document.querySelector('.replay');


const ball = new Ball(canvasWidth/2,canvasHeight/2,20);
const score = new Score();
var bar2 = new Bar(10,10);
var bar1 = new Bar(10,600-20);

var xSpeedOfBar = 3
var xDirection1 = 0;
var xDirection2 = 0;


function setup(){

    createCanvas(canvasWidth,canvasHeight);
}
// 🎇
 function draw(){


   background(0,0,0,100);
   stroke(0)
   if(score.winner == 0){
  //Ball
  ball.move();
  ball.draw();
  ball.checkCollison(bar1,bar2);
}else{
    ball.y = canvasHeight/2;
    ball.x = canvasWidth/2;
}

  // Bar
  bar1.draw();
  bar2.draw();
  bar1.move(xDirection1);
  bar2.move(xDirection2);
  score.scoreUpdate(ball);
  score.gameOver();
  
 

}
//  function sound(){
//     let osc = ac.createOscillator();
//     osc.type = 'triangle';

//     osc.start()

//     osc.stop(ac.currentTime + 10);

//     osc.connect(ac.destination);
//  }

function keyPressed(){
    
    if(keyCode === LEFT_ARROW){
      xDirection1 = - xSpeedOfBar

    }
    else if(keyCode === RIGHT_ARROW){
       xDirection1 = xSpeedOfBar
    }

   //  if(ac.state === 'suspended'){
   //     ac.resume();
   //  }
}


function keyReleased(){
    xDirection1 = 0
}
 
replay.addEventListener('click',function(){
    score.score1 = 0;
    score.score2 = 0;
    score.winner = 0;

    gameover.classList.remove('slidedown');

})


