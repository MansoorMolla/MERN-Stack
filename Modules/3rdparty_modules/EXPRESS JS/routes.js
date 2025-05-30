/* Router/Routing in node.js :

What is Routing?
Routing defines the way in which the client requests are handled by the application endpoints.




  defines the way in which the client requests are handled by the application endpoint(url)
  it can be implemented two ways : 1)using framework 2)without using framework


  1) with framework is helps to run server up and runnning , by using http meathods
    

  Routing without Framework: Using the frameworks is good to save time,
  but sometimes this may not suit the situation.
  So, a developer may need to build up their own server without other dependencies.
  Now create a file with any name using .js extension and follow the steps to perform routing from scratch:

  var http = require('http');
  
// Create a server object
http.createServer(function (req, res) {
      
    // http header
    res.writeHead(200, {'Content-Type': 'text/html'}); 
      
    var url = req.url;
      
    if(url ==='/about') {
        res.write(' Welcome to about us page'); 
        res.end(); 
    }
    else if(url ==='/contact') {
        res.write(' Welcome to contact us page'); 
        res.end(); 
    }
    else {
        res.write('Hello World!'); 
        res.end(); 
    }
}).listen(3000, function() {
      
    // The server object listens on port 3000
    console.log("server start at port 3000");
});
Output:



  2) without using framework, so we first need to crate server using http.createserver



simple route syntax below:----

  app.method(path,handler)



  *)app is instance of express ( var express = require('express'); var app = express();)

  *)meathod can be dervied from any one of the http meathods
   (put,get,post,delete)
    and it has to be attached to the instance of express cls

  get: when you are creating application anything which sends data to client side that is get call

  post: when you are creating application anything which receives data from client side 
  and stores it on database and process information will be post call

  put : if you are sending anydatafrom your client side to your server side and information is already on 
  on the server and you want to update that you have to make put call so system know that this call is 
  specially for updating content 

  delete : now when you already have some content in the system and you want to delete 
  that record you can use these delete call


  *)path is the route at which req will run (or)
    in combination with req method defines endpoint at which req can be made , it could be string,
    string pattern or regular expression
     
    route path may follows as :
    /ab?cd : abcd ,acd
    /ab+cd : abcd,abbcd,abbbbcd
    /ab*cd : ablcd,abycd
    /ab(cd)?e : abcde,abe
    /a/ :match anything with a directory
    .fly$/:include anything before these and end with fly$/


    *)handlers is callbackfunction that executes when a matching request type is found on relevent route (or)

    in form of function or an array of function or even combination of both can provide multiple call back function
    that behave like middle ware to handle req 

*/


const expres = require('express');
const app = expres();

// route
//  method(path,handler)
app.get('/',function(req,res){
    res.send("hai,welcome");
});

app.listen(3016,'localhost',function(){
    console.log("server started on port ");
});
