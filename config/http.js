const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({ /* config */ });

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// configuring static folders
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

module.exports = { serverHttp, io, app };
