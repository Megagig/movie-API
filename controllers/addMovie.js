const mongoose = require('mongoose');
const addMovie = async (req, res) => {
  const { movie_name, info, rating, description } = req.body;

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

  // Adding a movie
  try {
    const createdMovie = await moviesModel.create({
      movie_name: movie_name,
      info: info,
      rating: rating,
      description: description,
    });
    console.log(createdMovie);
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: 'Movie Creation failed. Something happened',
    });
  }

  // success
  res.status(200).json({
    status: 'sucess',
    message: 'Movie added successfully',
  });
};

module.exports = addMovie;
