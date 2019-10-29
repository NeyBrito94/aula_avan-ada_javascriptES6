//Enhanced Objects Literals

var obj = {
    prop1 = 'Digital Innovation one'
}
//ou

var prop1 = "Digital Innovation one"
var obj = {
    prop1: prop1
}
//ou
var prop1 = "Digital Innovation one"
var obj = {
    prop1
}

//Pode definir metodos

function methodo1(){
    console.log('Method called');
}

var obj1 ={
    methodo1
}
obj1.methodo1();

//Short hand
var obj ={
    sum(a,b){
        return a + b;
    }
}
console.log(obj);

//

var propName = 'Test';
var obj = {};
obj[proName] = 'prop value';
console.log(obj);

//Melhor
var propName = 'Test';
var obj = {
    [proName + 'concat']: 'prop value'
}
console.log(obj);



