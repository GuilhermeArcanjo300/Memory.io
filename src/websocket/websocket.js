const { io } = require('../../config/http');
const shuffleCards = require('../utils/randomCards');

let board = [];

let players = [];

const server = {
    player1: {
        score: 0,
        ready: false,
        nickname: 'player 1'
    },
    player2: {
        score: 0,
        ready: false,
        nickname: 'player 2'
    },
    time: 1,
    timer: 4,
};

let Intervaltimer = null;

io.on('connection', (socket) => {
    function changePlayerTime() {
        if (server.time === 1) server.time = 2;
        else server.time = 1;
        io.emit('changePlayerTime', server.time);
    }

    function timer() {
        server.timer = 4;
        clearInterval(Intervaltimer);

        Intervaltimer = setInterval(() => {
            if (server.timer <= 0) {
                changePlayerTime();
                io.emit('setTimer', server.timer);
                server.timer = 4;
            } else {
                io.emit('setTimer', server.timer);
                server.timer--;
            }
        }, 1000);
    }

    // if (io.sockets.listenerCount('connection') === 1) board = shuffleCards();

    if (board.length === 0) {
        board = shuffleCards();
    }

    // #region player
    const player = {
        id: socket.id,
        nickname: null,
        time: players.length + 1,
    };

    players.push(player);
    io.to(socket.id).emit('setInfoPlayer', player);

    socket.emit('getInfo', server); // ouvinte de evento inexistente no frontend

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

    socket.on('playerReady', (p) => {
        if (p === 1) {
            server.player1.nickname = players[0].nickname;
            server.player1.ready = true;
        } else {
            server.player2.nickname = players[1].nickname;
            server.player2.ready = true;
        }

        if (server.player1.ready && server.player2.ready) {
            timer();
        }
    });

    socket.on('getInfoServer', (prop) => {
        let info;
        if (prop === 'time') {
            info = server.time;
        }
        socket.emit('returnInfoServer', { type: prop, value: info });
    });

    socket.on('setEventChange', (card) => {
        socket.broadcast.emit('getEventChange', card);
    });

    socket.on('setTimePlayer', () => {
        changePlayerTime();
    });

    socket.on('setScore', (p) => {
        if (p === 1) {
            server.player1.score++;
        } else {
            server.player2.score++;
        }

        if((server.player1.score + server.player2.score) == 4){
            io.emit('finish', {player1: server.player1, player2: server.player2});
            players = [];
            server.player1.score = 0;
            server.player1.ready = false;
            server.player2.score = 0;
            server.player2.ready = false;
            server.time = 1;
        }

        io.emit('getScore', server);
    });

    socket.on('resetTimer', () => timer());

});

