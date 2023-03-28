const express = require('express');
const app = express();
const port = 3000;

// require drinks data from drinks.js
const drinks = require('./models/drinks');

// set up route to render drinks_index.ejs
app.get('/drinks', (req, res) => {
  res.render('drinks_index', { drinks: drinks });
});

app.get('/drinks/:id', (req, res) => {
    const drink = drinks[req.params.id];
    drink.image += '.jpg'; // add .jpg to the end of the image link
    res.render('drinks_show', { drink: drink });
  });

// start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.set('view engine', 'ejs');

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id);
  });
  