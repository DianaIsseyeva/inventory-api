const express = require('express');
const app = express();
const categories = require('./app/categories.js');
const fileCategoriesDb = require('./fileCategoriesDb.js');
const port = 8000;

async function start() {
  app.use(express.json());
  app.use(express.static('public'));
  await fileCategoriesDb.init();
  app.use('/categories', categories);

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}

start();
