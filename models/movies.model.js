const mongoose = require('mongoose');

// Define the Schema for the movies
const moviesSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Create the model using the schema
const moviesModel = mongoose.model('movies', moviesSchema); // Name the model as 'movies'

// Export the model so it can be used in other files
module.exports = moviesModel;
