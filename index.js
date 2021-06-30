
function calculation(Value){
    console.log("chandan")
    if(document.getElementById('chandan').innerHTML==="0"){
        document.getElementById('chandan').innerHTML = Value;
    }
    else{
        document.getElementById('chandan').innerHTML += Value;
    }
}

function answer(){
    var result = eval(document.getElementById('chandan').innerHTML)
    document.getElementById('chandan').innerHTML = result;
}

function refresh(){
    console.log("clear")
    document.getElementById('chandan').innerHTML ="0";
}

function percentage(){
    var per = document.getElementById("chandan").innerHTML;
    var res = parseInt(per)
    var result = res / 100;
    document.getElementById('chandan').innerHTML = result;
}

function del(){
    var rem = document.getElementById('chandan').innerHTML;
    var update = rem.slice(0, -1)
    if(update===""){
        document.getElementById('chandan').innerHTML ="0";
    }
    else{
        document.getElementById('chandan').innerHTML = update;
    }
}