const Express=require('express')
var app=new Express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{title:"ictak"});
});

app.get('/login',(req,res)=>{
    res.render('index',{title:"ict koratty"});
});
app.get('/registration',(req,res)=>{
    res.render('index2',{title:"koratty"});
});
app.get('/home',(req,res)=>{
    res.render('index3',{title:"ict"})
})
app.listen(3001,()=>{
console.log("server is running on http://localhost:3001")
});