// Import the express module
import mongoose from './node_modules/mongoose/types/index.d';
const express = require('express');

// Create an Express application
const app = express();

const mongoose = require('mongoose');

// Define the port number
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my Express server.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
