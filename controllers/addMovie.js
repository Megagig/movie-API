const addMovie = (req, res) => {
  const { movie_name, info, rating } = req.body;

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
  res.status(200).json({
    status: 'sucess',
    message: 'Movie added successfully',
  });
};

module.exports = addMovie;
