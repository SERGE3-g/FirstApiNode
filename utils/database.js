const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'mamusic',
    user: 'root',
    password: '3892978507'
});

module.exports = pool.promise();