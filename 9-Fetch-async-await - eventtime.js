//Fetch faz requisições utilizando proxys

fetch("http://localhost:8080/data.json").then(responseStream => {
    responseStream.json().then(data => {
        console.log(data);
    })
});


//ES7 Async/Await Criar Promises mais simples.
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('12345');
    }, 1000)
});

const simpleFunction = async () => {
    const data = await asyncTimer();
    return data;
}
simpleFunction().then(data => {
    console.log(data);
});