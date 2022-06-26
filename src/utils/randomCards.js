// Fisher Yates shuffle algorithm
function shuffleCards() {
    const cards = [
        { value: 1, title: 'card1' },
        { value: 1, title: 'card2' },
        { value: 2, title: 'card3' },
        { value: 2, title: 'card4' },
        { value: 3, title: 'card5' },
        { value: 3, title: 'card6' },
        { value: 4, title: 'card7' },
        { value: 4, title: 'card8' },
        { value: 5, title: 'card9' },
        { value: 5, title: 'card10' },
        { value: 6, title: 'card11' },
        { value: 6, title: 'card12' },
        { value: 7, title: 'card13' },
        { value: 7, title: 'card14' },
        { value: 8, title: 'card15' },
        { value: 8, title: 'card16' },
        { value: 9, title: 'card17' },
        { value: 9, title: 'card18' },
        { value: 10, title: 'card19' },
        { value: 10, title: 'card20' },
        { value: 11, title: 'card21' },
        { value: 11, title: 'card22' },
        { value: 12, title: 'card23' },
        { value: 12, title: 'card24' },
        { value: 13, title: 'card25' },
        { value: 13, title: 'card26' },
        { value: 14, title: 'card27' },
        { value: 14, title: 'card28' },
        { value: 15, title: 'card29' },
        { value: 15, title: 'card30' },
        { value: 16, title: 'card31' },
        { value: 16, title: 'card32' },
        { value: 17, title: 'card33' },
        { value: 17, title: 'card34' },
        { value: 18, title: 'card35' },
        { value: 18, title: 'card36' },
        { value: 19, title: 'card37' },
        { value: 19, title: 'card38' },
        { value: 20, title: 'card39' },
        { value: 20, title: 'card40' },
        { value: 21, title: 'card41' },
        { value: 21, title: 'card42' },
        { value: 22, title: 'card43' },
        { value: 22, title: 'card44' },
    ];

    const copy = [];
    let n = cards.length;
    let index;

    // while array still has elements to shuffle...
    while (n) {
        index = Math.floor(Math.random() * n--);
        copy.push(cards.splice(index, 1)[0]);
    }

    return copy;
}

module.exports = shuffleCards;
