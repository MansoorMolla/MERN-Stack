/*
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, 
where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
*/
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
});

function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
  function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  
  const logStuff = [logOriginalUrl, logMethod]
  app.get('/user/:id', logStuff, (req, res, next) => {
    res.send('User Info')
  })