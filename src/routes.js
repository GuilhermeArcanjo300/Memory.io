const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views', 'index.html'));
});

router.get('/game', (req, res) => {
  res.render(path.join(__dirname, 'views', 'board.html'));
});

module.exports = router;
