// Import the express module
const express = require('express');
const dotenv = require('dotenv');

// Create an Express application
const app = express();

// Parse JSON-encoded bodies
app.use(express.json());
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
const addMovie = require('./controllers/addMovie');
const getAllMoves = require('./controllers/getAllMovies');
const getSingleMovies = require('./controllers/getSingleMovies');
const editMovie = require('./controllers/editMovie');
const deleteMovie = require('./controllers/deleteMovie');

// Define a route for the root URL
app.post('/api/movies', addMovie);
app.get('/api/movies', getAllMoves);
app.get('/api/movies/:movie_id', getSingleMovies);
app.patch('/api/movies', editMovie);
app.delete('/api/movies/:movie_id', deleteMovie);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
