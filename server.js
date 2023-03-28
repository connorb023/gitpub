// Import the express module
const express = require('express');
const drinks = require('./models/drinks');

// Create an instance of the express application
const app = express();

// Set the port number
const port = 3000;

// Listen on the specified port and log a message when the server is running
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Define a GET route for the homepage
app.get('/drinks', (req, res) => {
    res.send(drinks);
});
