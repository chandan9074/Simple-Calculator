
function calculation(Value){
    if(document.getElementById('screen_txt').innerHTML==="0"){
        document.getElementById('screen_txt').innerHTML = Value;
    }
    else{
        document.getElementById('screen_txt').innerHTML += Value;
    }
}

function answer(){
    var result = eval(document.getElementById('screen_txt').innerHTML)
    document.getElementById('screen_txt').innerHTML = result;
}

function refresh(){
    document.getElementById('screen_txt').innerHTML ="0";
}

function percentage(){
    var per = document.getElementById("screen_txt").innerHTML;
    var res = parseInt(per)
    var result = res / 100;
    document.getElementById('screen_txt').innerHTML = result;
}

function del(){
    var rem = document.getElementById('screen_txt').innerHTML;
    var update = rem.slice(0, -1)
    if(update===""){
        document.getElementById('screen_txt').innerHTML ="0";
    }
    else{
        document.getElementById('screen_txt').innerHTML = update;
    }
}