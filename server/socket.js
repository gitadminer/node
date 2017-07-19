import express from 'express';
const app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
server.listen(9000);


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/views/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});