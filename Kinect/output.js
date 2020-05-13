var Kinect2 = require('kinect2'),
    kinect = new Kinect2(),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

if (kinect.open()) {
    server.listen(8080);

    console.log('Server listening on port 8080');

    app.get('/', function (req, res) {
        res.sendFile('C:\\nodejs\\MiniProject\\Files\\Kinect\\Kinect.html');
    });

    kinect.on('bodyFrame', function (bodyFrame) {
        io.sockets.emit('bodyFrame', bodyFrame);
    });

    //request body frames
    kinect.openBodyReader();
}
