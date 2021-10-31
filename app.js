const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    // res.send('<h1>hello<h1>');
    res.sendFile("./views/index.html");
});

app.listen(3000);