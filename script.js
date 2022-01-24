for (let i=0; i<9; i++) {
    document.getElementById('game').innerHTML+='<div class="block"><div>';
} 
let turn = 0;
let gameOver = false;
document.getElementById('game').onclick=function(event){
       if (event.target.className=='block' 
            && event.target.innerHTML=='<div></div>'
            && gameOver == false){
            if (turn%2==0){
            event.target.innerHTML='X';
            document.getElementById('status').innerHTML="Следующий ход играют Нолики!";
        }else{
            event.target.innerHTML='0';
            document.getElementById('status').innerHTML="Следующий ход играют Крестики!";
        } 
        turn++;
        checkWinner();
        if (turn==9) {
            document.getElementById('status').innerHTML="Ничья! Победила дружба!";
            gameOver=true;
        }
    }
}
function checkWinner(){
    let allblock = document.getElementsByClassName('block');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(i = 0; i < win.length; i++) {
        if(allblock[win[i][0]].innerHTML == 'X' 
        && allblock[win[i][1]].innerHTML == 'X' 
        && allblock[win[i][2]].innerHTML == 'X'
        ) {
            result = 'крестики';
            prepareResult(result);
            gameOver = true;
        } else if(allblock[win[i][0]].innerHTML == '0' 
        && allblock[win[i][1]].innerHTML == '0' 
        && allblock[win[i][2]].innerHTML == '0'
        ) {
            result = 'нолики';
            prepareResult(result);
            gameOver = true;
        } 
    }
}

const prepareResult = result => {
    document.getElementById('status').innerHTML = `Победили ${result}!`;
}
document.getElementById('closebtn').onclick=function(event) {
    location.reload();    
}

