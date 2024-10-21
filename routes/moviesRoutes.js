const express = require('express');
const addMovie = require('../controllers/addMovie');
const getAllMoves = require('../controllers/getAllMovies');
const getSingleMovies = require('../controllers/getSingleMovies');
const editMovie = require('../controllers/editMovie');
const deleteMovie = require('../controllers/deleteMovie');

const router = express.Router();

router.post('/api/movies', addMovie);
router.get('/api/movies', getAllMoves);
router.get('api/movies/:movie_id', getSingleMovies);
router.patch('/api/movies/:movie_id', editMovie);
router.delete('/api/movies/:movie_id', deleteMovie);

module.exports = router;
