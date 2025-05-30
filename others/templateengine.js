/* TEMPLATE ENGINE : template engine helps us to create an html template with minimal code also 
it can inject data into html tamplate and produce final html 
views:-- is the directory where template files are located 

// for static html page
const pathloc = path.join(__dirname,"folder where html file avilable");
app.use(express.static(pathloc));

// for dynamic html page

app.set('view engine','ejs/hbs');
app.get('/',(req,res){
    res.render("file name with/without extension")
})

*/

const express = require('express');
const app = express();
const path = require('path');

// static page 

const pathloc = path.join(__dirname,'./public');
// console.log( pathloc);
app.use(express.static(pathloc));


app.get('/',function(req,res){
    res.send("hai, welcome to home");
    res.sendFile('${pathloc}/index.html');
});


app.get('/about',function(req,res){
    res.send("hai, welcome to about page");
    res.sendFile('${pathloc}/about.html');
});


app.listen(3021,()=>{
    console.log("server started ");
});


const express = require('express');
// const app = express();
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




