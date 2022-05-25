const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

app.engine('html', require('ejs').renderFile);

// configuring static folders
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

console.log(path.join(__dirname, '..', 'assets'));

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

module.exports = { serverHttp, io, app };
