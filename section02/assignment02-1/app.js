const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log("users middleware");
  res.send('<h1>The users page</h1>')
});

app.use('/', (req, res, next) => {
  console.log("default middlware");
  res.send('<h1>Hello using express</h1>')
});

app.listen(3000);
