// Fisher Yates shuffle algorithm
function shuffleCards() {
    const cards = [
        { id: 1, value: 1, title: 'card1' },
        { id: 2, value: 1, title: 'card2' },
        { id: 3, value: 2, title: 'card3' },
        { id: 4, value: 2, title: 'card4' },
        { id: 5, value: 3, title: 'card5' },
        { id: 6, value: 3, title: 'card7' },
        { id: 7, value: 4, title: 'card7' },
        { id: 8, value: 4, title: 'card8' },
        { id: 9, value: 5, title: 'card6' },
        { id: 10, value: 5, title: 'card9' },
        { id: 11, value: 6, title: 'card10' },
        { id: 12, value: 6, title: 'card11' },
        { id: 13, value: 7, title: 'card12' },
        { id: 14, value: 7, title: 'card13' },
        { id: 15, value: 8, title: 'card14' },
        { id: 16, value: 8, title: 'card15' },
        { id: 17, value: 9, title: 'card16' },
        { id: 18, value: 9, title: 'card17' },
        { id: 19, value: 10, title: 'card18' },
        { id: 20, value: 10, title: 'card19' },
        { id: 21, value: 11, title: 'card20' },
        { id: 22, value: 11, title: 'card21' },
        { id: 23, value: 12, title: 'card22' },
        { id: 24, value: 12, title: 'card23' },
        { id: 25, value: 13, title: 'card24' },
        { id: 26, value: 13, title: 'card25' },
        { id: 27, value: 14, title: 'card26' },
        { id: 28, value: 14, title: 'card27' },
        { id: 29, value: 15, title: 'card28' },
        { id: 30, value: 15, title: 'card29' },
        { id: 31, value: 16, title: 'card30' },
        { id: 32, value: 16, title: 'card31' },
        { id: 33, value: 17, title: 'card32' },
        { id: 34, value: 17, title: 'card33' },
        { id: 35, value: 18, title: 'card34' },
        { id: 36, value: 18, title: 'card35' },
        { id: 37, value: 19, title: 'card36' },
        { id: 38, value: 19, title: 'card37' },
        { id: 39, value: 20, title: 'card38' },
        { id: 40, value: 20, title: 'card39' },
        { id: 41, value: 21, title: 'card40' },
        { id: 42, value: 21, title: 'card41' },
        { id: 43, value: 22, title: 'card42' },
        { id: 44, value: 22, title: 'card43' },
    ];

    const copy = [];
    let n = cards.length;
    let index;

    // while array still has elements to shuffle...
    //while (n) {
    //    index = Math.floor(Math.random() * n--);
    //    copy.push(cards.splice(index, 1)[0]);
    //}

    //return copy;
    return cards;
}

module.exports = shuffleCards;
