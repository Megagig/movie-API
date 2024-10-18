// Import the express module
const express = require('express');
const dotenv = require('dotenv');

// Create an Express application
const app = express();
// Load environment variables from .env file
dotenv.config();

const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.log('Error connecting to the database');
    console.error(error);
  });
// Define the port number
const port = 3000;

// import the movies model
const Movie = require('./models/movies.model');

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my Express server.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
