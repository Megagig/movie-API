const mongoose = require('mongoose');
const getSingleMovies = async (req, res) => {
  const moviesModel = mongoose.model('movies');
  try {
    const movieId = req.params.movie_id;
    const singleMovie = await moviesModel.findById({
      _id: movieId,
    });
    res.status(200).json({
      status: 'success',
      data: singleMovie,
      message: 'fetched Single movie successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failed ',
      message: error.message,
    });
    return;
  }
};

module.exports = getSingleMovies;
