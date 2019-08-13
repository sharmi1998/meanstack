var promise=new Promise(function (resolve,rejected){
    const x="greekforgeeks"; //it check for the data types and return false if some error occured
    const y="greekforgeeks"
    if(x===y){
        resolve();
    }
    else{
        reject();
    }
});
promise.then(function(){
    console.log('success,you are a grrek');
}).catch(function(){
    console.log('some error has occured');
});