const mongoose = require('mongoose');

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model('movies');
  const movie_id = req.params.movie_id; // Assuming the movie ID is passed as a URL parameter

  const deletedMovie = await moviesModel.findByIdAndDelete(movie_id);
  if (!deletedMovie) {
    return res.status(404).json({
      status: 'fail',
      message: 'Movie not found',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'Movie deleted successfully',
  });
};

module.exports = deleteMovie;
