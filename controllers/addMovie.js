const mongoose = require('mongoose');
const addMovie = async (req, res) => {
  const { movie_name, info, rating } = req.body;

  // initialized the movies model (previously set up) for interacting with the database:
  const moviesModel = mongoose.model('movies');

  //validation

  try {
    if (!movie_name || !info || !rating)
      throw 'Movie, info and rating is required';
    if (rating < 1 || rating > 10) throw 'rating must be between 1 to 10';
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide movie_name, info and rating',
    });
  }

  // success
  // Adding a movie
  await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
  });
  res.status(200).json({
    status: 'sucess',
    message: 'Movie added successfully',
  });
};

module.exports = addMovie;
