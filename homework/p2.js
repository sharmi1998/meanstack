module.exports.w=(c)=>{

for (var c=2; c<= 500; c++) {

    var notPrime = false;
    for (var i = 2; i <=c; i++) {
        if (c%i===0 && i!==c) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(c);
    }
}
}