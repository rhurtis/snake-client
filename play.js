// From server setup by Vasily
// IP: “135.23.222.131”
//PORT: 50541

const { connect } = require('./client');

console.log('Connecting ...');

connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
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
    };
    handleUserInput();
  });
  
  


  return stdin;
};





setupInput();

