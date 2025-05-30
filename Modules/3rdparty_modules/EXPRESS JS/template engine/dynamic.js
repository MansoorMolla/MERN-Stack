// for dynamic html page

// app.set('view engine','ejs/hbs');
// app.get('/',(req,res){
// res.render("file name with/without extension")
// });



const express = require('express');
const app = express();
const path = require('path');

// dynamic page 

app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render("index");
});



app.get('/',function(req,res){
    const details ={
        name:'mansoor',
        age:20
    }
    res.render("index",{details});
});

app.listen(3022,()=>{
    console.log("server started ");
});



