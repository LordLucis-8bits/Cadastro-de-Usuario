const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1375',
    database: 'cadastro_usuarios'
})

conection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('connected to the database successfully');
});

module.exports = conection;
