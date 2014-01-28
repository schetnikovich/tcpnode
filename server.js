var net = require('net');
var util = require('util');

var port = process.argv[2] || 8888;

net.createServer(function (socket) {
    var address = util.format("%s:%s", socket.remoteAddress, socket.remotePort);
    console.log('%s -> connection accepted', address);
    socket.on('end', function () {
        console.log('%s -> connection closed', address);
    });
}).listen(port);

console.log('Listening on TCP *:%d', port)

