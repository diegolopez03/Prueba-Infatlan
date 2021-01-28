module.exports = (sequelize, Sequelize) => {
    const Cuenta = sequelize.define("Cuenta", {
      saldo: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      estado: {
          type: Sequelize.BOOLEAN, 
      }
    });
  
    return Cuenta;
  };
  