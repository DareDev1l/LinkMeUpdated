var express = require("express");
var env = process.env.NODE_ENV  || "production" ;

var app = express();
var io = require('socket.io');

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app, io);

io.listen(app.listen(config.port));
console.log("Server running on port " + config.port);