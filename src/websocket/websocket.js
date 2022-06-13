const { io } = require('../../config/http');

const players = [];

io.on('connection', (socket) => {
    // #region player
    const player = {
        id: socket.id,
        nickname: null,
    };

    players.push(player);

    socket.emit('playersJoined', players.length);

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
