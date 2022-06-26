
const path = require('path');
const express = require('express');
const router = express.Router();

const menuController = require('./controllers/menuController');
const boardController = require('./controllers/boardController');

router.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views', 'index.handlebars'), {layout: false});
});

const router = express.Router();

router.get('/', menuController.index);

router.get('/game', boardController.index);

module.exports = router;
