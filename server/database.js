import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'mysqldb',
    user: 'root',
    password: '123456',
    database: 'vacation'
});

export default connection;