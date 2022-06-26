
const path = require('path');
const router = require('express').Router();

const menuController = require('./controllers/menuController');
const boardController = require('./controllers/boardController');

router.get('/', menuController.index);

router.get('/game', boardController.index);

module.exports = router;
