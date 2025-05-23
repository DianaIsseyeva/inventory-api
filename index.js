const express = require('express');
const app = express();
const categories = require('./app/categories.js');
const items = require('./app/items.js');
const places = require('./app/places.js');
const fileCategoriesDb = require('./fileCategoriesDb.js');
const fileItemsDb = require('./fileItemsDb.js');
const filePlacesDb = require('./filePlacesDb.js');

const port = 8000;

async function start() {
  app.use(express.json());
  app.use(express.static('public'));
  await fileCategoriesDb.init();
  await fileItemsDb.init();
  await filePlacesDb.init();
  app.use('/categories', categories);
  app.use('/items', items);
  app.use('/places', places);

  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
}

start();
