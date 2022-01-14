const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = []

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', (req, res, next) => {
  console.log(users)
  res.render('users', {data: users});
});

app.post('/add-user', (req, res, next) => {
  users.push(req.body.user);
  res.redirect('/users');
});

app.use('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000);
