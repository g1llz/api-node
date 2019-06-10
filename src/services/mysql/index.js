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

const authModule = require('./auth')({ connect, errorHandler });
const usersModule = require('./users')({ connect, errorHandler });

module.exports = {
  auth: () => authModule,
  users: () => usersModule
}
