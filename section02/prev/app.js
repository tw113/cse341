const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log("In the other middleware");
  res.send('<h1>The add product page</h1>')
});

app.use('/', (req, res, next) => {
  console.log("In the other middleware");
  res.send('<h1>Hello using express</h1>')
});

app.listen(3000);
