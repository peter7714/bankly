/** Shared config for application; can be req'd many places. */

require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const fs = require('fs');

const db_password = fs.readFileSync("db_password.txt", "utf8").trim();

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
        ? `postgresql://username:${db_password}@localhost:5432/jobly_test` 
        : `postgresql://username:${db_password}@localhost:5432/jobly`;
}

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  getDatabaseUri
};
