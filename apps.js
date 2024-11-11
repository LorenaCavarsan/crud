const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./Controlers/userControlers');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', userController.getApp);

app.listen(2000, () => {
    console.log('servidor rodando na porta 2000');
});