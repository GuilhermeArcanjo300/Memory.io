// Fisher Yates shuffle algorithm
function shuffleCards() {
    const cards = [
        { id: 1, value: 1, title: 'card1', img: '01.png' },
        { id: 2, value: 1, title: 'card2', img: '01.png' },
        { id: 3, value: 2, title: 'card3', img: '02.jpg' },
        { id: 4, value: 2, title: 'card4', img: '02.jpg' },
        { id: 5, value: 3, title: 'card5', img: '03.jpg' },
        { id: 6, value: 3, title: 'card7', img: '03.jpg' },
        { id: 7, value: 4, title: 'card7', img: '04.jpg' },
        { id: 8, value: 4, title: 'card8', img: '04.jpg' },
        { id: 9, value: 5, title: 'card6', img: '06.jpg' },
        { id: 10, value: 5, title: 'card9', img: '06.jpg' },
        { id: 11, value: 6, title: 'card10', img: '07.jpg' },
        { id: 12, value: 6, title: 'card11', img: '07.jpg' },
        { id: 13, value: 7, title: 'card12', img: '12.jpg' },
        { id: 14, value: 7, title: 'card13', img: '12.jpg' },
        { id: 15, value: 8, title: 'card14', img: '13.jpg' },
        { id: 16, value: 8, title: 'card15', img: '13.jpg' },
        { id: 17, value: 9, title: 'card16', img: '14.jpg' },
        { id: 18, value: 9, title: 'card17', img: '14.jpg' },
        { id: 19, value: 10, title: 'card18', img: '15.jpg' },
        { id: 20, value: 10, title: 'card19', img: '15.jpg' },
        { id: 21, value: 11, title: 'card20', img: '16.jpg' },
        { id: 22, value: 11, title: 'card21', img: '16.jpg' },
        { id: 23, value: 12, title: 'card22', img: '17.jpg' },
        { id: 24, value: 12, title: 'card23', img: '17.jpg' },
        { id: 25, value: 13, title: 'card24', img: '19.jpg' },
        { id: 26, value: 13, title: 'card25', img: '19.jpg' },
        { id: 27, value: 14, title: 'card26', img: '20.jpg' },
        { id: 28, value: 14, title: 'card27', img: '20.jpg' },
        { id: 29, value: 15, title: 'card28', img: '21.png' },
        { id: 30, value: 15, title: 'card29', img: '21.png' },
        { id: 31, value: 16, title: 'card30', img: '23.jpg' },
        { id: 32, value: 16, title: 'card31', img: '23.jpg' },
        { id: 33, value: 17, title: 'card32', img: '24.jpg' },
        { id: 34, value: 17, title: 'card33', img: '24.jpg' },
        { id: 35, value: 18, title: 'card34', img: '25.jpg' },
        { id: 36, value: 18, title: 'card35', img: '25.jpg' },
        { id: 37, value: 19, title: 'card36', img: '26.png' },
        { id: 38, value: 19, title: 'card37', img: '26.png' },
        { id: 39, value: 20, title: 'card38', img: '05.jfif' },
        { id: 40, value: 20, title: 'card39', img: '05.jfif' },
        { id: 41, value: 21, title: 'card40', img: '08.jfif' },
        { id: 42, value: 21, title: 'card41', img: '08.jfif' },
        { id: 43, value: 22, title: 'card42', img: '10.jfif' },
        { id: 44, value: 22, title: 'card43', img: '10.jfif' },
    ];

    const copy = [];
    let n = cards.length;
    let index;

    //while array still has elements to shuffle...
    while (n) {
        index = Math.floor(Math.random() * n--);
        copy.push(cards.splice(index, 1)[0]);
    }

    return copy;
    //return cards;
}

module.exports = shuffleCards;
