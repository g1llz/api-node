const mysql = require('mysql');
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_node_db'
});

const errorHandler = (error, msg, rejectFunction) => {
    console.log(error);
    rejectFunction({ error: msg });
}

const productModule = require('./products')({ connect, errorHandler });

module.exports = {
    products: () => productModule
}
