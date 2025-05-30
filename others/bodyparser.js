/*
body-parser:it is responsible for parsing incoming req bodies in a middleware before you handle it
in order to read http post data we have to use bodyparser , which reads form input and stores it
as javascipt obj accessed through req.body


*/



const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 3045;

app.use(bodyparser.urlencoded({extended:false}));

app.get('/',function(req,res,next){
    res.send("<form method='POST' action='/details' ><input type='text' name='Name' placeholder='Name' required /><input type='text' name='email' placeholder='Email' required /><button type='submit'>save</button></form>");
});

app.post('/details',function(req,res,next){
    res.send(req.body);
});
app.listen(port,function(){
    console.log("server started on port :"+port);
});