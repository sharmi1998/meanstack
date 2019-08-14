const Express=require('express')
var app=new Express();
app.get('/',(req,res)=>{
    res.send('welcome to my website');
});
app.get('/home',(req,res)=>{
    res.send('welcome to my homepage');
});
app.listen(3001);
