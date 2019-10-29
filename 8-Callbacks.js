//CallBacks

function doSomething(callback){
    setTimeout(function(){
        callback('First data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
}

function doAll(){
    try{    
        doSomething(function(data){
            var processData= data.split('');
            try{
                doOtherThing(function(data2){
                    var processData2 = data2.split('');                    
                    try{
                        setTimeout(function(){
                            console.log(processData, processData2)
                        }, 1000);
                    }catch(err){
                        //handle error
                    }
                })
            }catch(err){
                //handle error
            }
        });
    }catch(err){
        //handle erro
    }

}

doAll();


//Promisses invocar um construtor de uma promisse
//Pending
//Fulfilled
//Rejected
const doSomethingPromise = () => new Promise((resolve,reject) => {
        setTimeout(function() {
            resolve('First data');
        }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Second data');
        }, 1000);
});

/*
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
});
//ou
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
*/
//A que resolver primeiro sera executada
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
});
