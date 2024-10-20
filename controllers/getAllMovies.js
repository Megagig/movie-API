const mongoose = require('mongoose');
const getAllMoves = async (req, res) => {
  try {
    const moviesModel = mongoose.model('movies');
    const allMovies = await moviesModel.find({});
    res.status(200).json({
      status: 'success',
      data: allMovies,
      message: 'All movies fetched successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failed ',
      message: error.message,
    });
    return;
  }
};

module.exports = getAllMoves;
