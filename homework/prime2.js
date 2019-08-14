module.exports.secpr=(l)=>
{   
    var i=0;
    var j=0;
    var limit=l;
    for(i=2;i<=l ;i++){
        c=0;
        for(j=1;j<=i;j++){

            if(i%j==0){
            c++;
            }
        }
        if(c==2){
            console.log(i)
            

        }
    }

}