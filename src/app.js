const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Conectando BD
mongoose.connect('mongodb://localhost/crud')
    .then(db => console.log('DB conectada con exito!'))
    .catch(err => console.log(err));
// Importando Rutas
const indexRoutes = require('./routes/index');
// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
// middleares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// Rutas
app.use('/', indexRoutes);
// Iniciando Servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});