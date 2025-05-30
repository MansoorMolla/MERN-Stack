/* var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('fsdefination.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data.toString());
    return res.end();
  });
}).listen(8081);
*/
var fs = require('fs');

fs.readFile('./file system module/fsdefination.txt',function(err,data) {
    if(!err) {
        console.log(data.toString());
    }
});