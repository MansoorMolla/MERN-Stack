/* Router/Routing in node.js :
 defines the way in which the client requests are handled by the application endpoint(url)
  it can be implemented two ways : 1)using framework 2)without using framework
  1) with framework is helps to run server up and runnning , by using http meathods
  2) without using framework, so we first need to crate server using http.createserver
simple route syntax below:----
  app.method(path,handler)
  *)app is instance of express
  *)meathod can be dervied from any one of the http meathods(put,get,post,delete)
    and it has to be attached to the instance of express cls
  *)path is the route at which req will run (or)
    in combination with req method defines endpoint at which req can be made , it could be string,
    string pattern or regular expression
    *)handlers is callbackfunction that executes when a matching request type is found on relevent route

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
