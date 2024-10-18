const addMovie = (req, res) => {
  res.status(200).json({
    message: 'Add a new movie',
  });
};

module.exports = addMovie;
