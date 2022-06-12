const path = require('path');

module.exports = {
    index(req, res) {
        const cards = [
            { value: 1, title: 'card1' },
            { value: 1, title: 'card2' },
            { value: 2, title: 'card3' },
            { value: 2, title: 'card4' },
            { value: 3, title: 'card5' },
            { value: 3, title: 'card6' },
        ];

        const data = {
            layout: false,
            cards,
        };

        res.render(path.join(__dirname, '..', 'views', 'board.handlebars'), data);
    },
};
