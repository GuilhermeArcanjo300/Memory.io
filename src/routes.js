const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views', 'index.handlebars'), { layout: false });
});

router.get('/game', (req, res) => {
  const cards = [
    { value: 1, img: '01.png' },
    { value: 1, img: '01.png' },
    { value: 2, img: '02.jpg' },
    { value: 2, img: '02.jpg' },
    { value: 3, img: '03.jpg' },
    { value: 3, img: '03.jpg' },
  ];

  const data = {
    layout: false,
    cards,
  };

  res.render(path.join(__dirname, 'views', 'board.handlebars'), data);
});

module.exports = router;
