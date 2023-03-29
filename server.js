const express = require('express');
const drinks = require('./models/drinks');
const food = require('./models/food');
const app = express();
const port = 3000;

// set up route to render drinks_index.ejs
app.get('/drinks', (req, res) => {
    res.render('drinks_index', { drinks: drinks, food: food });
});
  
  app.get('/drinks/:id', (req, res) => {
    const drink = drinks[req.params.id];
    drink.image += '.jpg'; // add .jpg to the end of the image link
    res.render('drinks_show', { drink: drink });
  });
  // Define routes for handling food items
app.get('/food', (req, res) => {
    res.render('food_index', { food: food });
  });
  
  app.get('/food/:id', (req, res) => {
    const selectedFood = food[req.params.id];
    food.image += '.jpg'; // add .jpg to the end of the image link
    res.render('food_show', { food: selectedFood});
  });
  

  // start server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  app.set('view engine', 'ejs');
