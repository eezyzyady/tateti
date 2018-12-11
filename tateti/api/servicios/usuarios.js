var router = require('express').Router();
var Usuario = require('../modelos/usuario').Usuario;


router.get('/usuarios', function(req, res) {
     Usuario.find({}).then(function(usuarios){
         res.send(usuarios);
     });  
});

router.post('/usuarios', function(req, res) {
     var nuevo = new Usuario(req.body);
     nuevo.save().then(function(nuevoUsuario){
              res.send(nuevoUsuario);
     }).catch(function(error){
              res.status(400).send(error);
     });
});
module.exports = router;