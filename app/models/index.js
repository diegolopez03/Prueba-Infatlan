const dbConfig = require("../config/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes = require("./Cliente.js")(sequelize, Sequelize);
db.cuentas = require("./Cuenta.js")(sequelize, Sequelize);
db.tipoCuentas = require("./TipoCuenta.js")(sequelize, Sequelize);

// db.cuentas.HasOne(db.tipoCuentas, { as: "tipoCuenta" });
// db.cuentas.HasOne(db.clientes, { as: "cliente" });



db.clientes.hasMany(db.cuentas, { as: "cuentas" });
db.cuentas.belongsTo(db.clientes, {
  foreignKey: "clienteId",
  as: "cliente",
});

db.cuentas.hasOne(db.tipoCuentas, { as: "tipoCuenta" });
// db.tipoCuentas.belongsTo(db.cuentas, {
//   foreignKey: "cuentaId",
//   as: "cuenta",
// });


// db.tipoCuentas.BelongsTo(db.cuentas, {
// db.tipoCuentas.BelongsTo(db.cuentas, {
//     foreignKey: "cuentaId",
//     as: "cuenta",
//   });

// db.cuentas.HasOne(db.clientes, { as: "cliente" });
// db.tipoCuentas.BelongsTo(db.cuentas, {
//     foreignKey: "cuentaId",
//     as: "cuenta",
//   });


module.exports = db;
