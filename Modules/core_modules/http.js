/*
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

Use the createServer() method to create an HTTP server:

*/

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080




// Exactly! The core `http` module’s server doesn’t have built-in routing like Express does. It just gives you the raw `req` and `res` objects for **every** request.

// ### How to achieve routing with `http` module?

// You manually check the `req.url` (and `req.method` if needed) inside the server callback and run code based on that.

// Here’s a quick example with multiple routes:

// ```js
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Home Page');
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('About Page');
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('Page Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
// ```

// ### So, in short:

// * Express **abstracts this routing logic** and gives easy `.get()`, `.post()` methods.
// * Core `http` module requires you to **write if-else or switch** on `req.url` & `req.method` manually.

// Want me to help you build a simple router function for `http`?
