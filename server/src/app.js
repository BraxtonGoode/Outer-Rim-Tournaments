const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

module.exports = app;
