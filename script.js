
let arr = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
let box = 100;
const o = new Image();
o.src = "img/oo.png";
const x = new Image();
x.src = "img/axe.png";
o.height= box; x.height = box;
o.width = box; o.width = box;

let cnt = 0;
function scroll(a){
    var xx = x.cloneNode(true); var oo = o.cloneNode(true);
    if(a==-1) {
        cnt = cnt + 1;
        if(cnt%2 == 0) return xx;
        else return oo;
    }
}

function aa(){
    document.getElementById("aa").appendChild( scroll(arr[0][0]) );
    arr[0][0] = cnt%2;
}
function ab(){
    document.getElementById("ab").appendChild( scroll(arr[1][0]) );
    arr[1][0] = cnt%2;
}
function ac(){
    document.getElementById("ac").appendChild( scroll(arr[2][0]) );
    arr[2][0] = cnt%2;
}


function ba(){
    document.getElementById("ba").appendChild( scroll(arr[0][1]) );
    arr[0][1] = cnt%2;
}
function bb(){
    document.getElementById("bb").appendChild( scroll(arr[1][1]) );
    arr[1][1] = cnt%2;
}
function bc(){
    document.getElementById("bc").appendChild( scroll(arr[2][1]) );
    arr[2][1] = cnt%2;
}


function ca(){
    document.getElementById("ca").appendChild( scroll(arr[0][2]) );
    arr[0][2] = cnt%2;
}
function cb(){
    document.getElementById("cb").appendChild( scroll(arr[1][2]) );
    arr[1][2] = cnt%2;
}
function cc(){
    document.getElementById("cc").appendChild( scroll(arr[2][2]) );
    arr[2][2] = cnt%2;
}

function check(){
    for(let i=0;i<3;i++){
        if(arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2] && arr[i][0] != -1){
            if(cnt%2==0)
            alert("X is Winner");
            else alert("O is Winner");
            clearInterval(game);
            document.location.reload();
        }
    }
    for(let i=0;i<3;i++){
        if(arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i] && arr[0][i] != -1){
            if(cnt%2==0)
            alert("X is Winner");
            else alert("O is Winner");
            clearInterval(game)
            document.location.reload();;
        }
    }
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[1][1] != -1){
        if(cnt%2==0)
        alert("X is Winner");
        else alert("O is Winner");
        clearInterval(game)
        document.location.reload();;
    }
    if(arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2] && arr[2][0] != -1){
        if(cnt%2==0)
        alert("X is Winner");
        else alert("O is Winner");
        clearInterval(game)
        document.location.reload();;
    }
}
let game = setInterval(check,200);
