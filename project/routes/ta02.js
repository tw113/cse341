//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [];
let userCanBeRemoved = true;
let userCanBeAdded = true;

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS,
    users : users,
    userCanBeRemoved: userCanBeRemoved,
    userCanBeAdded : userCanBeAdded
  });
});

router.post('/addUser', (req, res, next) => {
  if(users.includes(req.body.username)){
    userCanBeAdded = false;
  }else{
    userCanBeAdded = true;
    users.push(req.body.username);
  }
  res.redirect('/ta02/'); 
});

router.post('/removeUser', (req, res, next)=>{
  const index = users.indexOf(req.body.username);
  if(index == -1){
    userCanBeRemoved = false;
  }else{
    userCanBeRemoved = true;
    users.splice(index, 1);
  }
  res.redirect('/ta02/');
});

module.exports = router;
