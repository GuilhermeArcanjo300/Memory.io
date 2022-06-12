const { io } = require('../../config/http');

io.on('connection', (socket) => console.log(socket.id));
