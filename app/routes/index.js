module.exports = app => {
    const clientes = require("../controllers/ClienteController.js");
    const cuentas = require("../controllers/CuentaController.js");
    const tipoCuentas = require("../controllers/TipoCuentaController.js");
  
    var router = require("express").Router();
  
    //RUTAS CLIENTES
    router.post("/crear-cliente", clientes.createCliente);
   
    router.get("/buscar-clientes", clientes.findAllClientes);
  
    router.get("/buscar-cliente/:id", clientes.findOneCliente);
  
    router.put("/actualizar-cliente/:id", clientes.updateCliente);
  
    router.delete("/eliminar-cliente/:id", clientes.deleteCliente);
  
    router.delete("/eliminartodo-cliente", clientes.deleteAllClientes);

    //RUTAS CUENTAS

    router.post("/crear-cuenta", cuentas.createCuenta);
   
    router.get("/buscar-cuentas", cuentas.findAllCuentas);
  
    router.get("/buscar-cuenta/:id", cuentas.findOneCuenta);
  
    router.put("/actualizar-cuenta/:id", cuentas.updateCuenta);
  
    router.delete("/eliminar-cuenta/:id", cuentas.deleteCuenta);
  
    router.delete("/eliminartodo-cuenta", cuentas.deleteAllCuentas);

    //RUTAS TIPO DE CUENTAS
    router.post("/crear-tipocuenta", tipoCuentas.createTipoCuenta);
   
    router.get("/buscar-tipocuentas", tipoCuentas.findAllTipoCuentas);
  
    router.get("/buscar-tipocuenta/:id", tipoCuentas.findOneTipoCuenta);
  
    router.put("/actualizar-tipocuenta/:id", tipoCuentas.updateTipoCuenta);
  
    router.delete("/eliminar-tipocuenta/:id", tipoCuentas.deleteTipoCuenta);
  
    router.delete("/eliminartodo-tipocuenta", tipoCuentas.deleteAllTipoCuenta);

  
    app.use('/api/prueba', router);
  };