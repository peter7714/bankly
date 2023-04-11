/** Database setup for jobly. */

const { Client } = require('pg');
const { getDatabaseUri } = require('./config');

const DB_URI = getDatabaseUri();

const client = new Client(DB_URI);

client.connect();

module.exports = client;
