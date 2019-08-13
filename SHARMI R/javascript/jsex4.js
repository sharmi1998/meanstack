const prom =new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('promise is created and consumed');
    }, 200);
    
});
prom.then(value=>{
    console.log(value);
});