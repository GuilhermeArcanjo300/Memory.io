const { io } = require('../../config/http');
const shuffleCards = require('../utils/randomCards');

let board = [];

const players = [];

io.on('connection', (socket) => {
    if (io.sockets.listenerCount('connection') === 1) board = shuffleCards();

    /*
    let counter = 10;
    const WinnerCountdown = setInterval(() => {
        io.sockets.emit('counter', counter);
        counter--;

        if (counter === 0) {
            io.sockets.emit('counter', 'Congratulations You WON!!');
            clearInterval(WinnerCountdown);
        }
    }, 1000);
    */

    // #region player
    const player = {
        id: socket.id,
        nickname: null,
    };

    players.push(player);

    socket.emit('playersJoined', players.length);
    socket.emit('boardShuffled', board);

    socket.on('sendNickname', (nicknamePlayer) => {
        players[players.length - 1].nickname = nicknamePlayer;

        const allNicknames = players.map((index) => index.nickname);

        io.emit('setNicknamesInLabels', allNicknames);
    });

    socket.on('removeLastPlayer', () => {
        console.log(`Removing last socket: ${players[players.length - 1].id}`);
        players.pop();
    });
    // #endregion players

    if (players.length === 2) io.emit('checkIfPlayersReady');

    socket.on('playerReady', () => {
        console.log(socket.id);
    });
});
