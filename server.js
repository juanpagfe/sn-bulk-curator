// Loads environment variables from a .env
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// Set up an express server.
const express = require('express');
const app = express();
app.use("/node_modules", express.static('node_modules'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// Set up routes
require('./app/routes.js')(app);

// Starts server
const PORT = process.env.PORT || 2337;
app.listen(PORT, () => {
  console.log(`Feed curator server running on port ${PORT}. Ctrl-C to it down again.`);
});
