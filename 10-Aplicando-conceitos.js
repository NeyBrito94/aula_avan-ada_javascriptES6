//EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

emitter.on('User loggerd', data => {
    console.log(data);
});
users.userLogged({user: 'ney Brito'});
/*
emitter.emit('Uer logged', {user: 'Celso henrique'});

console.log()
*/


//Apenas dentro de uma função criada utilizando a palavra async e para aguardar a resolução de uma promise.

//Aconteça um erro de rede e não seja possível realizar a requisição.

//Uma Promise.

//Um subscreve uma função a todas as ocorrências de um evento, o outro apenas para a primeira ocorrência.

//Criar uma Promise contendo diversas Promise e trazer o retorno da primeira que resolver entre elas.

//Utilizando o método Promise.all.

//Pending, fulfilled e rejected.

//Problemas com a legibilidade e manutenção do código, pois podemos cair no chamado "callback hell".

//Invocando o seu construtor e passando uma função ao mesmo. Ex: new Promise((resolve, reject) => {}).

//O método .catch que irá receber uma função para o tratamento.