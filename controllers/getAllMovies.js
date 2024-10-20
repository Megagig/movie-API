const mongoose = require('mongoose');
const getAllMoves = async (req, res) => {
  const moviesModel = mongoose.model('movies');
  const allMovies = await moviesModel.find({});
  res.status(200).json({
    status: 'success',
    data: allMovies,
    message: 'All movies fetched successfully',
  });
};

module.exports = getAllMoves;
