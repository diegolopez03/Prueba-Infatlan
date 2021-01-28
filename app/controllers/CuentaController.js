const db = require("../models");
const Cuenta = db.cuentas;
const Op = db.Sequelize.Op;


exports.createCuenta = (req, res) => {
 
  if (!req.body.saldo) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const cuenta = {
    saldo: req.body.saldo,
    estado: req.body.estado ? req.body.estado : true,
    clienteId : req.body.clienteId,
    tipoCuentaId : req.body.tipoCuentaId
  };


  Cuenta.create(cuenta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al crear la cuenta"
      });
    });
};


exports.findAllCuentas = (req, res) => {
  const saldo = req.query.saldo;
  var condition = saldo ? { saldo: { [Op.like]: `%${saldo}%` } } : null;

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


exports.findOneCuenta = (req, res) => {
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


exports.updateCuenta = (req, res) => {
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


exports.deleteCuenta = (req, res) => {
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

exports.deleteAllCuentas = (req, res) => {
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
