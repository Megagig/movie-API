const addMovie = (req, res) => {
  const { movie_name, info, rating } = req.body;

  //validation

  // success
  res.status(200).json({
    status: 'sucess',
    message: 'Movie added successfully',
  });
};

module.exports = addMovie;
