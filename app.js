const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;


app.use(express.json());

const details = [
  {
    Name: 'Mansoor',
    age: 20
  },
  {
    Name: 'Yunush',
    age: 22
  }
]

app.get('/getData', authenticateToken, (req, res) => {
  res.json(details.filter(data => data.Name === req.user.userName));
});


app.post('/login', (req, res) => {

  const userName = req.body.Name;
  const user = { Name: userName }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken });

});


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.status(401).json({ errorMsg: "Unauthorized" })
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ errorMsg: err })
    req.user = user
    next()
  });
};




app.listen(port, () => {
  console.log('server is listening at port number', port);
});