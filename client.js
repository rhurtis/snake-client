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

  // event handler for when the client is officially connected to the server.
  conn.on('connect', function() {
    console.log('client is connected to server');
    
    conn.write("Name: RAH"); // Sending the server my initials

    //conn.write("Move: up"); // This will tell the server to move my snake up.
    //conn.write("Move: down"); // This will tell the server to move my snake down.
    //conn.write("Move: left"); // This will tell the server to move my snake left.
    //conn.write("Move: right"); // This will tell the server to move my snake right.
    //setTimeout(() => conn.write("Move: up"),3000); // This will move my snake up after 3 seconds.

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