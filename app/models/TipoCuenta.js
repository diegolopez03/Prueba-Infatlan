module.exports = (sequelize, Sequelize) => {
    const TipoCuenta = sequelize.define("tipoCuenta", {
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return TipoCuenta;
  };
  