for (let i=0; i<9; i++) {
    document.getElementById('game').innerHTML+='<div class="block"><div>';
} 
let turn = 0;
document.getElementById('game').onclick=function(event){
    if (event.target.className=='block'){
        if (turn%2==0){
            event.target.innerHTML='X';
            document.getElementById('status').innerHTML="Следующий ход играют Нолики!";
        }else{
            event.target.innerHTML='0';
            document.getElementById('status').innerHTML="Следующий ход играют Крестики!";
        }turn++
        checkWinner();
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
        if(allblock[win[i][0]].innerHTML == 'X' && allblock[win[i][1]].innerHTML == 'X' && allblock[win[i][2]].innerHTML == 'X'
        ) {
            result = 'крестики';
            prepareResult(result);
        } else if(allblock[win[i][0]].innerHTML == '0' && allblock[win[i][1]].innerHTML == '0' && allblock[win[i][2]].innerHTML == '0'
        ) {
            result = 'нолики';
            prepareResult(result);
        }
    }
    //крестики
    // if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    // if (allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    // if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    // if (allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    // if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    // if (allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    // if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    // if (allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') document.getElementById('status').innerHTML="Крестики одержали победу! Поздравляем!";
    //нолики
//     if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
//     if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
//     if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
//     if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
//     if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
//     if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
//     if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
//     if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') document.getElementById('status').innerHTML="Нолики одержали победу! Поздравляем!";
// 
}