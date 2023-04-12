/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

console.log(DB_URI);

const client = new Client(DB_URI);

client.connect();

module.exports = client;
