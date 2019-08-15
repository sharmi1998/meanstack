const Express=require('express')
var as=new Express();
as.set('view engine','ejs')
as.get('/',(req,res)=>{
    res.render('index4',{titile:'homepage'});
});
as.get('/addbook',(req,res)=>{
    res.render('index4',{title:'addbook'});
});
as.get('/viewbook',(req,res)=>{
    res.render('index5',{title:'viewbook'});
});
as.listen(3003,()=>{
    console.log("server is running on http://localhost:3003")
});