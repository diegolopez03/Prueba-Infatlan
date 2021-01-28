const db = require("../models");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;


exports.createCliente = (req, res) => {
 
  if (!req.body.nombre) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const cliente = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
    fechaNacimiento: req.body.fechaNacimiento,
    identidad: req.body.identidad,
    genero: req.body.genero,
    lugarNacimiento: req.body.lugarNacimiento,
    profesion: req.body.profesion,
    activo: req.body.activo ? req.body.activo : false
  };


  Cliente.create(cliente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};


exports.findAllClientes = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Cliente.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};


exports.findOneCliente = (req, res) => {
  const id = req.params.id;

  Cliente.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateCliente = (req, res) => {
  const id = req.params.id;

  Cliente.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Actualizado!."
        });
      } else {
        res.send({
          message: `Error!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.deleteCliente = (req, res) => {
  const id = req.params.id;

  Cliente.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Eliminado!"
        });
      } else {
        res.send({
          message: `Error`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};

exports.deleteAllClientes = (req, res) => {
  Cliente.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `Eliminados!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};


