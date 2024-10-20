const mongoose = require('mongoose');
const getSingleMovies = async (req, res) => {
  const moviesModel = mongoose.model('movies');

  const movieId = req.params.movie_id;
  const singleMovie = await moviesModel.findById({
    _id: movieId,
  });
  res.status(200).json({
    status: 'success',
    data: singleMovie,
    message: 'fetched Single movie successfully',
  });
};

module.exports = getSingleMovies;
