function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if(choice==0){
        return('rock');
    }else if(choice==1){
        return('paper');
    }else{
        return('scissors')
    }
}
function getHumanChoice(){
    return(prompt().toLocaleLowerCase());
}
let humanScore=0;
let computerScore=0;

function playRound(){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    if(computerChoice==humanChoice){
        console.log('Draw!')
    }
    else if(humanChoice=='rock' && computerChoice=='scissors'){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
        console.log("You Win! This Round Score : Computer: "+computerScore+" Player: "+humanScore);
    }else if(humanChoice=='paper' && computerChoice=='rock'){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
        console.log("You Win! This Round Score : Computer: "+computerScore+" Player: "+humanScore);
    }else if(humanChoice=='scissors' && computerChoice=='paper'){
        humanScore=humanScore+1;
        computerScore=computerScore+0;
        console.log("You Win! This Round Score : Computer: "+computerScore+" Player: "+humanScore);
    }else{
        humanScore=humanScore+0;
        computerScore=computerScore+1;
        console.log("Computer Wins! This Round Score : Computer: "+computerScore+" Player: "+humanScore);
    }
}
function playGame(){
    for(let i=0;i<=20;i++){
        playRound();
        if(humanScore>4){
            console.log('You Win the Game');
            break;
        }
        if(computerScore>4){
            console.log('Computer Win\'s the Game');
            break;
        }
    }
}
