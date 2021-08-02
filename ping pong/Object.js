// for choosing speed of ball from the given values
var speeds = [ -3, -2 , 2, -3 ]; 
// max score 
var maxScore = 10;

var scoreOne = document.querySelector('.score1 h2 span');
var scoreTwo = document.querySelector('.score2 h2 span');
var gameover = document.querySelector('.gameover');
var result = document.querySelector('.result  span');

const gameoversound = document.querySelector(".gameoversound");
const ballhit = document.querySelector(".ballhit");
const ballmiss = document.querySelector(".ballmiss");



class Score{
    constructor(){
        this.score1 = 0
        this.score2 = 0
        this.winner = 0
        this.scoreUpdate = function(ball){
            if(ball.y - ball.r/2 <= 0){
                this.score1 += 1;
                
            }
            else if(ball.y+ball.r/2 >= canvasHeight){

                this.score2 += 1
            
            } 
            scoreOne.innerHTML = this.score1<10?'0'+this.score1+'':''+this.score1+'';
            scoreTwo.innerHTML = this.score2<10?'0'+this.score2+'':''+this.score2+'';

        }
        this.gameOver = function(){


            
            if(this.winner){
                result.innerHTML = ''+this.winner+'';
                gameover.classList.add('slidedown');
            }
            else{
                // sounds
                gameoversound.currentTime = 0
                gameoversound.play()

                if(this.score1 == maxScore){
                    this.winner = 1;
                }else if(this.score2 == maxScore){
                    this.winner = 2;
                }
               
            }
           
            
        }


    }
    
}
// class ball with x position and y position
class Ball{
constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = speeds[Math.floor(Math.random()*4)];//random speed selection along x axis 
    this.yspeed = speeds[Math.floor(Math.random()*4)];// random speed selection along y axis
   
    
    this.move = function(){
        this.x = (this.x + this.xspeed); // x + delta x { current position + increment in  position }
        this.y = (this.y + this.yspeed);

        if(this.y - this.r/2 <= 0 || this.y+this.r/2 >= height){
            this.yspeed *= -1; // reflection 
           
            ballmiss.currentTime = 0
            ballmiss.play()
        
        }
      
        
        if(this.x - this.r/2 <= 0 || this.x + this.r/2 >= width){
            this.xspeed *= -1;
            
        
        }
       
    }

    this.checkCollison = function(bar1,bar2){
        if((this.x + this.r/2 > bar1.x && this.x - this.r/2 < bar1.x + 50 && this.y + this.r/2 > bar1.y - 10)){
          this.yspeed  *=  -1  ;

          ballhit.currentTime = 0
          ballhit.play()

        }
        else if((this.x + this.r/2 > bar2.x && this.x - this.r/2 < bar2.x + 50 && this.y - this.r/2 < bar2.y + 10)){
          this.yspeed  *=  -1  ;

          ballhit.currentTime = 0
          ballhit.play()

        } 
    }
    this.draw = function(){
    stroke(0,0,0,0)
    fill(255,0,0)
    ellipse(this.x,this.y,this.r);
    }
}
}


class Bar{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.draw = function(){
            stroke(0,0,0,0)
            fill(255,255,255)   
            rect(this.x,this.y,50,10);
        }
        this.move = function(xdir){
           this.x = (this.x + xdir) >= 0 ? (this.x + xdir)%400 : (-1*(this.x + xdir))%400 ;
        }

    }
    

}


