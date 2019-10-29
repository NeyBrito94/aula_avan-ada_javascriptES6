//Symbols e Iterators
//const uniqueID = Symbol('Hello World');//Somente a carater de debug
const uniqueID2 = Symbol('Hello World');
console.log(uniqueID == uniqueID2); //Retorna false

const uniqueID = Symbol();
const obj = {
    [uniqueID]: 'Hello'
};
console.log(obj);

//Well know Symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj = {
    [Symbol.iterator](){

    }
}

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();
while(true){
    let {value, done} = it.next();
    if(value.done){
        break;
    }
    console.log(value);
}
console.log(it.next());

//melhor
const arr = [1, 2, 3, 4];

for (let value of arr){
    console.log(value);
}

const arr = [...arr]

//Symbol Iterator
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return{
            next: () => {
                i++;

                return{
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };    
    }
};

const it = obj[Symbol.iterator]()
console.log(it.next());

for(let value of obj){
    console.log(value);
}

//spread
const arr2 = [...obj];
console.log(arr2);


//Generator Funções com pausa e "despausam" valores
function* hello(){
    console.log("Hello");
    yield;
    console.log("from");
    yield;
    console.log("function!");
}

//hello();
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
Incluindo o valor após a palavra yield.

Um objeto contendo um método next e uma propriedade done.

Sim, podemos enviar valores de volta ao iterador passando o valor como parâmetro ao método next.

Através da propriedade done no objeto retornado na iteração.

Identificadores únicos.

Obter os valores gerados através do iterador em um objeto ou tipo iterável.

yield.

Sim, pois generators utilizam a mesma interface e podem ser utilizados para construir o iterador de um objeto iterável.

Utilizando o symbol utilizado como identificador ou o método Object.getOwnPropertySymbols.

Um método responsável por gerar o seu iterador, sendo acessível pela chave Symbol.iterator
*/
