   // we are converting string back to Javascript object
    
    let score= JSON.parse(localStorage.getItem('score')) || {
        wins :0,
        losses :0,
        Ties :0} ; //using default operator we learnt in the boolean clas

    /*if(score === null){
        
        score ={
        wins :0,
        losses :0,
        Ties :0};
    }*/

    updatedScore();

    function playGame(playerMove){
    
    const computerMove = pickComputerMove();

    let result = '';
    
    if(playerMove === 'scissor'){
      
         if(computerMove === 'rock'){
        result ='Lose';
        } else if (computerMove === 'paper'){
        result ='Win';
        }else if (computerMove ==='scissor'){
        result = 'Tie';
        }
    } else if (playerMove === 'paper'){
        if(computerMove === 'rock'){
         result ='Win';
        } else if (computerMove === 'paper'){
        result ='Tie';
        }else if (computerMove ==='scissor'){
        result = 'Lose';
        }
    } else if (playerMove === 'rock'){
         if(computerMove === 'rock'){
        result ='Tie';
        } else if (computerMove === 'paper'){
        result ='lose';
        }else if (computerMove ==='scissor'){
        result = 'Win';
        }

    }
    if (result === 'Win'){
        score.wins +=1;
    }else if (result === 'Lose'){
        score.losses +=1;
    }else if (result === 'Tie'){
        score.Ties +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updatedScore();

    document.querySelector('.js-result').innerHTML = `You ${result}`;

    document.querySelector('.js-moves').innerHTML=
        `     You
        <img src="/images/${playerMove}emoji.png" class="move-icons">
        <img src="/images/${computerMove}emoji.png" class="move-icons">
        Computer`
    }
    
    function updatedScore(){
        document.querySelector('.js-score').innerHTML =
        `Wins : ${score.wins} , Losses: ${score.losses} , Tie : ${score.Ties}`;
    }
    
    

    function pickComputerMove(){
    
    const mypick=Math.random();// It will generate values between 0 and 1

    let computerMove='';

    if(mypick>=0 && mypick<1/3)
    {
        computerMove = 'rock';
    } 
    else if(mypick>1/3 && mypick <2/3)
    {
        computerMove = 'paper';
     }
    else if(mypick>2/3 && mypick<1)
    {
       computerMove = 'scissor';
     }
     return computerMove
    }