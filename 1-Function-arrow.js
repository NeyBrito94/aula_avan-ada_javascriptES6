//Arrow functions => (Atribuindo uma variável ou passando como parâmentro)

var sum = (a, b) => a+b; //Return implicito
console.log(sum(5,15));

var sum = a => a+5; //Somente um argumento não precisa de parenteses

var sum = ({a})  => a;
var sum = (...a) => a;
var sum = (a = 5)=> a;

var createObj = () => ({teste: 123});
console.log(createObj());


//Função construtora
function Car(){
    this.foo = 'bar'
}
console.log(new Car());

var obj = {
    showContext: function showContext(){
        //this = obj
        
        console.log('teste');
        setTimeout(() => {
            this.log('after 1000ms');
        },
        1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext();