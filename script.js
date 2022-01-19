for (var i=0; i<9; i++) {
    document.getElementById('game').innerHTML+='<div class="block"><div>';
} 
var turn = 0;
document.getElementById('game').onclick=function(event){
    if (event.target.className=='block'){
        if (turn%2==0){
            event.target.innerHTML='X';
        }else{
            event.target.innerHTML='0'
        }turn++
    }
}