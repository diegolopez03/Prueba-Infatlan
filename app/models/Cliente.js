module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING
      },
       fechaNacimiento: {
           type: Sequelize.DATEONLY
       }, 
       identidad: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING
    },
    lugarNacimiento: {
        type: Sequelize.STRING
    },
    profesion: {
        type: Sequelize.STRING
    },
     activo: {
        type: Sequelize.BOOLEAN
     } 
    });
  
    return Cliente;
  };