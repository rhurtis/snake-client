const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', function() {
    console.log('client is connected to server');
      
  });



  // event handler for incoming message from server.
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // event handler for error
  conn.on('error', function(err) {
    console.log(`Error: ${err.message}`);
  });

  // event handler for disconnection
  conn.on('end', function() {
    console.log('client disconnected from server');
  });

  

  return conn;
};

module.exports = {connect};