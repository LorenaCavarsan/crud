const mysql = require('myslql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_mvc'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err);
    }
    else{
        console.console.log(('Conectando ao banco de dados MySQL!'));
    }
});

