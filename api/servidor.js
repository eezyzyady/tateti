var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./db/conexion').mongoose;
const morgan = require('morgan');
var cors = require('cors');

const servicioUsuarios = require('./servicios/usuarios');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(servicioUsuarios);

app.listen(4500, function() {
    console.log('El servidor esta corriendo');

});