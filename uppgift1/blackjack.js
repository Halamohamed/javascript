var player = 0, playerDraw=0, playerScore;
var computer = 0, computerDraw=0, computerScore;
var randomNumber = (function randomDraw() {
    return Math.floor((Math.random*11)+1);
});
function draw() {
    var number = randomNumber;
    return number;
};
function score(play) {
    return play;
    
}
function startGame() {
    playerDraw =  draw();
    console.log('player draw',playerDraw);
    playerScore = score(playerDraw)+ player;
    console.log('player score',playerScore);
    computerDraw = draw();    
    console.log('computer draw',computerDraw);
    computerScore = score(computerDraw)+ computer;
    console.log(draw('computer score', computerScore));
    count(playerScore,computerScore);
    
       
}
function playGame(params) {
    var draw1 =  draw();
    console.log('player draw',draw1);
    playerScore = score(draw1)+ playerDraw;
    console.log('player score', playerScore);
    var draw2 =  draw();
    console.log('player draw',draw2);
    playerScore = score(draw2)+ playerScore;
    console.log('player score',playerScore);
    var compDraw = draw();    
    console.log('computer draw',compDraw);
    computerScore = score(compDraw)+ computerScore;
    
}
function endGame() {
    console.log('player',playerScore);
    console.log('computer', computerScore);  
}
function count(card1,card2) {
    if((card1 == 21 || card1 > 21) || (card2 == 21 || card2 > 21)){
        console.log(' you winner!'); 
    }
    else if (card1 == card2){
        console.log('it is drew');
        
    }
    else if(card1 > card2){
        console.log('winner!');
        
    }
    else if(card2 > card1){
        console.log('winner!');
        
    }

    endGame();
}
window.addEventListener("keydown", function(event){

    startGame();
    if (event.code === 'KeyD') {
  
     playGame();


  
    } else if (event.code === 'KeyS') {
  
      endGame();
  
    }
  
  }());