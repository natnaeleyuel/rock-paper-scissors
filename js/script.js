const gameRPS = ['rock', 'paper', 'scissors']
const buttonGame = document.querySelector('.gameButtons2');
const pointComputer = document.getElementById('pointComputer');
const pointPlayer = document.getElementById('pointPlayer');
const newGame = document.getElementById('newGame');
const result = document.getElementById('result');

newGame.style.visibility = 'hidden';
function changeInnerContent(value){
    let computerRandom = Math.floor(Math.random() * 3)
    if(parseInt(pointComputer.innerHTML) < 5 && parseInt(pointPlayer.innerHTML) < 5){
        
        if(value == gameRPS[computerRandom]){
            result.innerHTML = 'Tie!';
        }
        else if(value == gameRPS[0] && gameRPS[computerRandom] == 'paper'){
            result.innerHTML = 'You lose!';
            pointComputer.innerHTML = `${(parseInt(pointComputer.innerHTML) + 1)}`
        }
        else if(value == gameRPS[0] && gameRPS[computerRandom] == 'scissors'){
            result.innerHTML = 'You won!';
            pointPlayer.innerHTML = `${(parseInt(pointPlayer.innerHTML) + 1)}`
        }
        else if(value == gameRPS[1] && gameRPS[computerRandom] == 'rock'){
            result.innerHTML = 'You won!';
            pointPlayer.innerHTML = `${(parseInt(pointPlayer.innerHTML) + 1)}`
        }
        else if(value == gameRPS[1] && gameRPS[computerRandom] == 'scissors'){
            result.innerHTML = 'You lose!';
            pointComputer.innerHTML = `${(parseInt(pointComputer.innerHTML) + 1)}`
        }
        else if(value == gameRPS[2] && gameRPS[computerRandom] == 'rock'){
            result.innerHTML = 'You lose!';
            pointComputer.innerHTML = `${(parseInt(pointComputer.innerHTML) + 1)}`
        }
        else if(value == gameRPS[2] && gameRPS[computerRandom] == 'paper'){
            result.innerHTML = 'You won!';
            pointPlayer.innerHTML = `${(parseInt(pointPlayer.innerHTML) + 1)}`
        }
    }
    else{
        result.innerHTML = 'End of game!';
        newGame.style.visibility = 'visible';
        if(pointComputer.innerHTML == '5'){
            result.innerHTML = 'Losser 😥';
        }
        else{
            result.innerHTML = 'Winner 🎉';
        }
        newGame.onclick = function resetTheGame(){
            pointComputer.innerHTML = '0';
            pointPlayer.innerHTML = '0';
            result.innerHTML = 'Result';
            newGame.style.visibility = 'hidden';
        }
    }
}