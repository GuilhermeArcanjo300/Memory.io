const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views', 'index.handlebars'), {layout: false});
});

router.get('/game', (req, res) => {

  const cards = [
    {value: 1, title: 'card1'}, 
    {value: 1, title: 'card2'}, 
    {value: 2, title: 'card3'}, 
    {value: 2, title: 'card4'}, 
    {value: 3, title: 'card5'}, 
    {value: 3, title: 'card6'}
  ]

  const data = {
    layout: false,
    cards: cards
  }

  res.render(path.join(__dirname, 'views', 'board.handlebars'), data);
});

module.exports = router;
