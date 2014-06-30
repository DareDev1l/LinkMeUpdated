var express = require("express");
var env = process.env.NODE_ENV  || "production" ;

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app, io);

var io = require('socket.io').listen(app.listen(config.port));
console.log("Server running on port " + config.port);

io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'You are chatting now !' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});