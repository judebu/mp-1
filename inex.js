let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd() {
    let result = Number(one.value) +Number(two.value);
    if(result < 0){
        output.style.color = "red";
    } else {
        output.style.color ="black";
    }
    output.innerHTML= "Output: "+ String(result);
}

function doSub() {
    let result = Number(one.value) - Number(two.value);
    if(result < 0){
        output.style.color = "red";
    } else {
        output.style.color= "black";
    }
    output.innerHTML ="Output: " + String(result);
}

function doMult() {
    let result = Number(one.value) * Number(two.value);
    if(result< 0){
        output.style.color= "red";
    } else {
        output.style.color = "black";
    }
    output.innerHTML = "Output: " +String(result);
}

function doDiv() {
    if(Number(two.value) ===0){
        output.style.color = "red";
        output.innerHTML = "Output: Didn't they teach u this in 5th grade";
        return;
    }
    let result = Number(one.value) / Number(two.value);
    if(result <0){
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
    output.innerHTML = "Output: " + String(result);
}

function doPow() {
    let base = Number(one.value);
    let exponent = Number(two.value);
    let result = 1;
    for(let i = 0; i < exponent; i++){
        result = result *base;
    }
    if(result < 0){
        output.style.color= "red";
    } else {
        output.style.color = "black";
    }
    output.innerHTML = "Output: " +String(result);
}

function doClear() {
    one.value = "";
    two.value = "";
    output.innerHTML = "Output:";
    output.style.color = "black";
}
