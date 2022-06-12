const express = require('express');

const menuController = require('./controllers/menuController');
const boardController = require('./controllers/boardController');

const router = express.Router();

router.get('/', menuController.index);

router.get('/game', boardController.index);

module.exports = router;
