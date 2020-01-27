const mysql = require('mysql');
const connect = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

const errorHandler = (error, msg, rejectFunction) => {
  console.log(error);
  rejectFunction({ error: msg });
}

const auth = require('./auth')({ connect, errorHandler });
const user = require('./users')({ connect, errorHandler });

module.exports = { auth, user };
