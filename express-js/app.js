const Express=require('express')
var app=new Express();
app.get('/',(req,res)=>{
    res.send('welcome to my ictak abcd website');
});
app.get('/home',(req,res)=>{
    res.send('welcome to my homepage');
});
app.listen(3001,()=>{
console.log("server is running on http://localhost:3001")
});
