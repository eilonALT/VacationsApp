import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eilon1212',
    database: 'vacation'
});

export default connection;