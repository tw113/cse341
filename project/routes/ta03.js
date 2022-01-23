//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const fileContents = fs.readFileSync('./items.json');
const products = JSON.parse(fileContents);

router.get('/', (req, res, next) => {
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    products: products
  });
});

router.post('/', (req, res, next) => {
  const search = req.body.search;
  const results = products.filter(product => product.tags.includes(search));
  console.log(results);
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03',
    products: results
  });
});

module.exports = router;
