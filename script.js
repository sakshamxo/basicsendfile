const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/profile',function(req,res){
    res.sendFile(path.join(__dirname,'index2.html'))
})
app.listen(3000,function(){
    console.log("http://localhost:3000/");
})