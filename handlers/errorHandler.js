const errorHandler = (error, req, res, next) => {
  if (error) {
    console.log(error);
    if (error.message) {
      return res.status(400).json({
        status: 'failed',
        error: error.message,
      });
    } else {
      return res.status(400).json({
        status: 'failed',
        error: error,
      });
    }
    return;
  } else {
    next();
  }
};

module.exports = errorHandler;
