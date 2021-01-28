const db = require("../models");
const TipoCuenta = db.tipoCuentas;
const Op = db.Sequelize.Op;


exports.createTipoCuenta = (req, res) => {
 
  if (!req.body.tipo) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const tipoCuenta = {
    tipo: req.body.tipo
  };


  TipoCuenta.create(tipoCuenta)
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


exports.findAllTipoCuentas = (req, res) => {
  const tipo = req.query.tipo;
  var condition = tipo ? { tipo: { [Op.like]: `%${tipo}%` } } : null;

  TipoCuenta.findAll({ where: condition })
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


exports.findOneTipoCuenta = (req, res) => {
  const id = req.params.id;

  TipoCuenta.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateTipoCuenta = (req, res) => {
  const id = req.params.id;

  TipoCuenta.update(req.body, {
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


exports.deleteTipoCuenta = (req, res) => {
  const id = req.params.id;

  TipoCuenta.destroy({
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

exports.deleteAllTipoCuenta = (req, res) => {
    TipoCuenta.destroy({
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
