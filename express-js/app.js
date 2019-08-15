const Express=require('express')
var app=new Express();
app.set('view engine','ejs');
// app.get('/',(req,res)=>{
//     res.render('index');
// });
app.get('/',(req,res)=>{
    res.render('index',{title:"ictak","name":["anjali","arun","aswathi","reshma","akhil"]});
});
// app.get('/',(req,res)=>{
//     res.send('welcome to my ictak abcd website');
// });
// app.get('/home',(req,res)=>{
//     res.send('welcome to my homepage');
//});
app.get('/home',(req,res)=>{
    res.render('index1',{title:"ict koratty"});
});
app.get('/contact',(req,res)=>{
    res.render('index2',{title:"koratty"});
});
app.listen(3000,()=>{
console.log("server is running on http://localhost:3000")
});
