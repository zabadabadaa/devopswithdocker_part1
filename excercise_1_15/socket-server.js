const net = require('net');

net.createServer(function(socket) {
    socket.write("terve kaveri!");
    socket.pipe(socket);  // Uudelleenohjaa vastaanotettu data takaisin lähettäjälle!
}).listen(8000);
console.log("palvelin on nyt käynnistetty");
console.log("yhteys telnetillä 'telnet localhost 8000'");