const myos=require('os');
const myfs=require('fs');
 var userdata=myos.userInfo();
 var platform=myos.platform();
 myfs.appendFile("mydata.txt",userdata,(error)=>{
     if(error){
         throw error;
         console.log(error);
     }
 });
 console.log(userdata)
 console.log(platform)