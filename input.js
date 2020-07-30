/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    process.stdout.write('.');
    
    const handleUserInput = function() {
      // \u0003 maps to ctrl+c input
      if (key === '\u0003') {
        process.exit();
      }

      if (key === 'w') {
        conn.write("Move: up");
      }

      if (key === 'a') {
        conn.write("Move: left");
      }

      if (key === 's') {
        conn.write("Move: down");
      }

      if (key === 'd') {
        conn.write("Move: right");
      }


      if (key === 't') {
        conn.write("Say: I am Solid Snake");
      }

      if (key === 'y') {
        conn.write("Say: Where is everybody?");
      }

      if (key === 'u') {
        conn.write("Say: I need sleep...");
      }

    };
    handleUserInput();
  });
  
  


  return stdin;
};

module.exports = {setupInput};