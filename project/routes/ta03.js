//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const fileContents = fs.readFileSync('./data/ta03.json');
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
  let search = req.body.search;
  //Make sure search text is in the same format as the tag in the json file
  search = `${search[0].toUpperCase()}${search.slice(1)}`;
  let results = products.filter(product => product.tags.includes(search));
  if(results.length == 0){
    results = products;
  }
  console.log(results);
  res.render('pages/ta03', {
    title: 'Team Activity 03',
    path: '/ta03',
    products: results
  });
});

module.exports = router;
