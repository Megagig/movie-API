const getRecommendation = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Successfully got the movie recommendation',
  });
};

module.exports = getRecommendation;
