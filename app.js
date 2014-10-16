// Load required modules
var http    = require("http");              // http server core module
var express = require("express");           // web framework external module
var io      = require("socket.io");         // web socket external module
var easyrtc = require("easyrtc");           // EasyRTC external module
var path    = require("path");

// Start Express http server on port 8080
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', function (req, res) {
  res.render('index');
});

// Start
var webServer = http.createServer(app).listen(8080);

// Start Socket.io so it attaches itself to Express server
var socketServer = io.listen(webServer);

// Start EasyRTC server
var easyrtcServer = easyrtc.listen(app, socketServer);
