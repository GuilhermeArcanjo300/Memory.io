const { io } = require('../../config/http');
const shuffleCards = require('../utils/randomCards');

let board = [];

const players = [];

let server = {
    player1: {
        score: 0,
        ready: false
    },
    player2: {
        score: 0,
        ready: false
    },
    time: 1,
    timer: 10
}

let Intervaltimer = null;

io.on('connection', (socket) => {

    //if (io.sockets.listenerCount('connection') === 1) board = shuffleCards();

    if(board.length === 0){
        board = shuffleCards()
    }
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
        time: players.length + 1
    };

    players.push(player);
    io.to(socket.id).emit('setInfoPlayer', player);

    socket.emit('getInfo', server);
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

    socket.on('playerReady', (player) => {
        console.log(socket.id);

        if(player == 1){
            server.player1.ready = true;
        }
        else{
            server.player2.ready = true;
        }

        if(server.player1.ready && server.player2.ready){
            timer();
        }
    });

    socket.on('getInfoServer', (prop) => {
        let info;
        if(prop === 'time'){
            info = server.time;
        }
        socket.emit('returnInfoServer', {type:prop, value: info});
    });

    socket.on('setEventChange', (card) => {
        socket.broadcast.emit('getEventChange', card);
    });

    socket.on('setTimePlayer', () => {
        changePlayerTime();
    });

    socket.on('setScore', (player) => {
        if(player == 1){
            server.player1.score++;
        }
        else{
            server.player2.score++;
        }

        io.emit('getScore', server);
    });

    socket.on('resetTimer', () => timer());

    function timer(){
        server.timer = 10;
        clearInterval(Intervaltimer);

        Intervaltimer = setInterval(()=>{
            if(server.timer <= 0){
                changePlayerTime();
                server.timer = 10;
            }
            else{
                io.emit('setTimer', server.timer)
                server.timer--;
            }
        }, 1000)
    }

    function changePlayerTime(){
        if(server.time == 1)
            server.time = 2
        else
            server.time = 1
    }

});
