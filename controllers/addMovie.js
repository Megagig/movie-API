const mongoose = require('mongoose');
const addMovie = async (req, res) => {
  const { movie_name, info, rating, description } = req.body;

  // initialized the movies model (previously set up) for interacting with the database:
  const moviesModel = mongoose.model('movies');

  //validation

  if (!movie_name || !info || !rating)
    throw 'Movie, info and rating is required';
  if (rating < 1 || rating > 10) throw 'rating must be between 1 to 10';

  // Adding a movie

  const createdMovie = await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
    description: description,
  });
  console.log(createdMovie);

  // success
  res.status(200).json({
    status: 'sucess',
    message: 'Movie added successfully',
  });
};

module.exports = addMovie;
