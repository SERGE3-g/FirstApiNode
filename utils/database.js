const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'corso_nodejs',
    user: 'root',
    password: 'root'
});

module.exports = pool.promise();