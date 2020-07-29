// From server setup by Vasily
// IP: “135.23.222.131”
//PORT: 50541

const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting ...');
connect();


setupInput();

