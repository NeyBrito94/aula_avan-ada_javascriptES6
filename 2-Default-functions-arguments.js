//Default Functions Arguments

function multiply(a, b){
    b = typeof b == 'undefined' ? 1 : b;

    return a * b;
}
//Pode ser 
function multiply(a, b = 1){
    return a * b;
}


console.log(multiply(5, ))


//laxy evalueation
function randomNumber(){
    return Math.random()*10;
}

console.log(randomNumber());

function multiply(a, b = randomNumber()){
    return a * b;
}

console.log(multiply(5));
