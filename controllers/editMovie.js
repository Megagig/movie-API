const mongoose = require('mongoose');

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model('movies');
  const { movie_id, movie_name, info, rating, description } = req.body;

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

  res.status(200).json({
    status: 'success',
    message: 'Movie edited successfully',
  });
};

module.exports = editMovie;
