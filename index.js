function sum(a,b){
    return a+b;
}
function myFunction(input){
    if( typeof input!=='invalid'){
        throw new Error('invalid input')
    }
}
function fetchData(callback){
    setTimeout(()=>{
        callback('data')
    },1000);
}
function fetchPromise(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>resolve('databro'),1000)
    });
}

module.exports = { sum, myFunction, fetchData, fetchPromise };