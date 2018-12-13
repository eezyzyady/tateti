var router = require('express').Router();
var Usuario = require('../modelos/usuario').Usuario;
var ObjectID = require('mongodb').ObjectID;


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

router.get('/usuarios/:id', function(req, res) {
     if (!ObjectID.isValid(req.params.id)) {
         return res.status(400).send();
     }
     Usuario.findById(req.params.id).then(function(usuario) {
         if (usuario == null) {
             // no se encontró el usuario
             res.status(404).send();
             return false;
         } else {
             res.send(usuario);
         }
     }).catch(function(error) {
         res.status(500).send(error);
     });
 });

router.put('/usuarios/:id', function(req, res) {
  if (!ObjectID.isValid(req.params.id)) {
       return res.status(400).send();
  }
  Usuario.findByIdAndUpdate(req.params.id)
  req.body, {new:true}, (err, Usuario) => {
     if (err) return res.status(500).send(err);
     return res.send(Usuario);
  }
  }


)
module.exports = router;