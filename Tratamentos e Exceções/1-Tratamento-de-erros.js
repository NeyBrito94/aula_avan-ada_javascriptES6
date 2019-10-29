//Try Catch
try{
    console.log(name);
    const name = 'Ney Brito';
}catch(err){
    console.log('Erro: ', err);
}
finally{
    console.log('Keep going...');
}


console.log('Keep going...');

//Throw
class CustomError extends Error{
    constructor({message, data}){
        super(messge);
        this.data = data;
    }
}

try{
    const name = 'Ney Brito';
    const myError = new CustomError({
        message:'Custom message',
        data:{
            type: 'Server error'
        } 
    });

    throw myError;
}catch(err){
    console.log('Erro: ', err);
}
finally{
    console.log('Keep going...');
}


