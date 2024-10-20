const mongoose = require('mongoose');

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model('movies');
  const { movie_id, movie_name, info, rating, description } = req.body;

  try {
    await moviesModel.updateOne(
      {
        _id: movie_id,
      },
      {
        movie_name: movie_name,
        info: info,
        rating: rating,
        description: description,
      },
      {
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(400).json({
      status: 'Failed',
      message: error.message,
    });
    return;
  }
  res.status(200).json({
    status: 'success',
    message: 'Movie edited successfully',
  });
};

module.exports = editMovie;
