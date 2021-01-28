const db = require("../models");
const Cuenta = db.cuentas;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
 
  if (!req.body.title) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const cuenta = {
    saldo: req.body.saldo,
    estado: req.body.estado ? req.body.estado : false
  };


  Cuenta.create(cuenta)
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


exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Cuenta.findAll({ where: condition })
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


exports.findOne = (req, res) => {
  const id = req.params.id;

  Cuenta.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Cuenta.update(req.body, {
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


exports.delete = (req, res) => {
  const id = req.params.id;

  Cuenta.destroy({
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

exports.deleteAll = (req, res) => {
    Cuenta.destroy({
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
