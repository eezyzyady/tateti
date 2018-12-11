var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EsquemaUsuario = new Schema({
    nombre: String,
    victorias: Number,
    derrotas: Number,
    empates: Number,


});

var Usuario = mongoose.model('usuarios', EsquemaUsuario);

module.exports = {
    Usuario
};