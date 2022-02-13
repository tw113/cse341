//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta06Controller = require('../controllers/ta06')

// router.post('/create-cookie', ta06Controller.postCreateCookie);

// router.post('/change-style', ta06Controller.postStyle);

router.post('/signup', ta06Controller.signup);

router.post('/loginPost', ta06Controller.loginPost);

router.get('/', ta06Controller.login);

module.exports = router;
