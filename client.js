var net = require('net');
var url = require('url');

var count = process.argv[3] || 5;
var address = (process.argv[2] || "localhost:8888").split(":");
var host = address[0];
var port = address[1];

for (var i = 0; i < count; i++) {
    net.connect(port, host, function(socket) {
        console.log('Connected to %s:%d', host, port);
    });
}
