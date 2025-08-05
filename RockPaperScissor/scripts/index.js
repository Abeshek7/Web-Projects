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
    
    if(playerMove === 'Scissor'){
      
         if(computerMove === 'Rock'){
        result ='Lose';
        } else if (computerMove === 'Paper'){
        result ='Win';
        }else if (computerMove ==='Scissor'){
        result = 'Tie';
        }
    } else if (playerMove === 'Paper'){
        if(computerMove === 'Rock'){
         result ='Win';
        } else if (computerMove === 'Paper'){
        result ='Tie';
        }else if (computerMove ==='Scissor'){
        result = 'Lose';
        }
    } else if (playerMove === 'Rock'){
         if(computerMove === 'Rock'){
        result ='Tie';
        } else if (computerMove === 'Paper'){
        result ='lose';
        }else if (computerMove ==='Scissor'){
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
        computerMove = 'Rock';
    } 
    else if(mypick>1/3 && mypick <2/3)
    {
        computerMove = 'Paper';
     }
    else if(mypick>2/3 && mypick<1)
    {
       computerMove = 'Scissor';
     }
     return computerMove

    }
