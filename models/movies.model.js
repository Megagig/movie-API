const mongoose = require('mongoose');

// Define the Schema for the movies
const moviesSchema = new mongoose.Schema({
  movieName: {
    type: String,
  },
  info: {
    type: String,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
});

// Create the model using the schema
const moviesModel = mongoose.model('movies', moviesSchema); // Name the model as 'movies'

// Export the model so it can be used in other files
module.exports = moviesModel;
