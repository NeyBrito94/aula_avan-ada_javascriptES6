//Rest e Spread Operator


function sum (a, b){
    var value = 0;
    //arguments; Lista contendo todos os argumentos(Objeto);
    for(var i = 0; i< arguments.length; i++){
        value += arguments[i];
    }   
    return value;
}
console.log(sum(5,4,5,6,7,8));

//Rest operator
function sum (...args){ //prototype array
    console.log(args);
    var value = 0;
    //arguments; Lista contendo todos os argumentos
    for(var i = 0; i< arguments.length; i++){
        value += arguments[i];
    }   
    return value;
}
console.log(sum(5,4,5,6,7,8));
//ou
function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5,4,5,6,7,8));

//Spread Operator quebrar os itens e passar para outro lugar (Strings, arrays, objetos e objetos iteraveis)
const str = "Digital Innovation One";
function logArgs(...args){
    console.log(args);
}

logArgs(...str);
console.log(logArgs);

const arr = [1, 2, 3, 4];

function logArgs(){
    console.log(arguments);
}
logArgs(...arr);
console.log(logArgs);

