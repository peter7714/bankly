/** Shared config for application; can be req'd many places. */

require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const { db_password } = require('./db_password.js');

const credentials = {
  user: "postgres",
  host: "peter",
  database: "bankly",
  password: `${db_password}`,
  port: 5432,
};

const test_credentials = {
  user: "postgres",
  host: "peter",
  database: "bankly_test",
  password: `${db_password}`,
  port: 5432,
};

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? test_credentials
    : credentials

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
