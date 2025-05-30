// for static html page:
// const path = require('path');
// const pathloc = path.join(__dirname,"folder where html file avilable");
// app.use(express.static(pathloc));

const express = require('express');
const app = express();
const path = require('path');

// static page 

const pathloc = path.join(__dirname,'./public');
// console.log( pathloc);
app.use(express.static(pathloc));


app.get('/',function(req,res){
    res.send("hai, welcome to home");
   //  res.sendFile('${pathloc}/index.html');
});


app.get('/about',function(req,res){
    res.send("hai, welcome to about page");
    res.sendFile('${pathloc}/about.html');
});


app.listen(3021,()=>{
    console.log("server started  on port :");
});
