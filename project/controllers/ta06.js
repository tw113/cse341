const fs = require('fs');
const fileContents = fs.readFileSync('./data/ta06.json');
const bcrypt = require('bcryptjs');

exports.login = (req, res, next) => {
  // It's a good idea to initialize session variables to some sort of default value
  if (req.session.counter === undefined) {
    req.session.counter = 0;
  }
  if (!req.session.style === undefined) {
    req.session.counter = 0;
  }

  res.render('pages/ta06', {
    title: 'Team Activity 06',
    path: '/ta06',
    message: '',
  });
};

exports.signup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const hashedPass = bcrypt.hashSync(password, 12);
  const user = { username: username, password: hashedPass };

  fs.writeFileSync('./data/ta06.json', JSON.stringify(user));

  const message = 'You have successfully signed up';

  res.render('pages/ta06', {
    title: 'Team Activity 06',
    path: '/ta06',
    message: message,
  });
};

exports.loginPost = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const users = JSON.parse(fileContents);

  const authorized = bcrypt.compareSync(users, password);

  if (authorized) {
    const message = 'You have successfully logged in';

    res.render('pages/ta06', {
      title: 'Team Activity 06',
      path: '/ta06',
      message: message,
    });
  }
};
