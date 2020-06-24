
let arr = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
let box = 100;
const o = new Image();
o.src = "img/oo.png";
const x = new Image();
x.src = "img/axe.png";
o.height= box; x.height = box;
o.width = box; o.width = box;

const player = document.getElementById("h2");
let cnt = 0;
function scroll(a){
    var xx = x.cloneNode(true); var oo = o.cloneNode(true);
    if(a==-1) {
        cnt = cnt + 1;
        if(cnt%2 == 0){
            player.innerHTML = "O's Turn";
            return xx;
        }
        
        else {player.innerHTML = "X's Turn";
        return oo; }
    }
}
function Reset(){
    document.location.reload();
}

document.getElementById('aa').onclick = function(){
    document.getElementById("aa").appendChild( scroll(arr[0][0]) );
    arr[0][0] = cnt%2;
}
document.getElementById('ab').onclick = function(){
    document.getElementById("ab").appendChild( scroll(arr[1][0]) );
    arr[1][0] = cnt%2;
}
document.getElementById('ac').onclick = function(){
    document.getElementById("ac").appendChild( scroll(arr[2][0]) );
    arr[2][0] = cnt%2;
}


document.getElementById('ba').onclick = function(){
    document.getElementById("ba").appendChild( scroll(arr[0][1]) );
    arr[0][1] = cnt%2;
}
document.getElementById('bb').onclick = function(){
    document.getElementById("bb").appendChild( scroll(arr[1][1]) );
    arr[1][1] = cnt%2;
}
document.getElementById('bc').onclick = function(){
    document.getElementById("bc").appendChild( scroll(arr[2][1]) );
    arr[2][1] = cnt%2;
}


document.getElementById('ca').onclick = function(){
    document.getElementById("ca").appendChild( scroll(arr[0][2]) );
    arr[0][2] = cnt%2;
}
document.getElementById('cb').onclick = function(){
    document.getElementById("cb").appendChild( scroll(arr[1][2]) );
    arr[1][2] = cnt%2;
}
document.getElementById('cc').onclick = function(){
    document.getElementById("cc").appendChild( scroll(arr[2][2]) );
    arr[2][2] = cnt%2;
}

function check(){
    let tie = 1;
    for(let i=0;i<3;i++){
        if(arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2] && arr[i][0] != -1){
            if(cnt%2==0){ player.innerHTML = "X is Winner"; alert('X is winner');}
            else { player.innerHTML = "O is Winner"; alert('O is winner'); }
            clearInterval(game);Reset();
            tie = 0;
        }
    }
    for(let i=0;i<3;i++){
        if(arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i] && arr[0][i] != -1){
            if(cnt%2==0){ player.innerHTML = "X is Winner"; alert('X is winner');}
            else { player.innerHTML = "O is Winner"; alert('O is winner'); }
            clearInterval(game);Reset();
            tie = 0;
        }
    }
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[1][1] != -1){
        if(cnt%2==0){ player.innerHTML = "X is Winner"; alert('X is winner');}
            else { player.innerHTML = "O is Winner"; alert('O is winner'); }
            clearInterval(game);Reset();
            tie = 0;
    }
    if(arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2] && arr[2][0] != -1){
        if(cnt%2==0){ player.innerHTML = "X is Winner"; alert('X is winner');}
            else { player.innerHTML = "O is Winner"; alert('O is winner'); }
            clearInterval(game);Reset();
            tie = 0;
    }
    for(let i=0;i<3;i++){
        for(let j = 0; j<3;j++){
            if(arr[i][j]==-1){
                tie = 0; break;
            }
        }
    }
    if(tie){
        player.innerHTML = "Game Over";
        clearInterval(game);
    }
}
let game = setInterval(check,200);
