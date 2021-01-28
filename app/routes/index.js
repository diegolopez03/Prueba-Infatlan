module.exports = app => {
    const clientes = require("../controllers/ClienteController.js");
    const cuentas = require("../controllers/CuentaController.js");
    const tipoCuentas = require("../controllers/TipoCuentaController.js");
  
    var router = require("express").Router();
  
 
    router.post("/", clientes.create);
   
    router.get("/", clientes.findAll);
  
    router.get("/:id", clientes.findOne);
  
    router.put("/:id", clientes.update);
  
    router.delete("/:id", clientes.delete);
  
    router.delete("/", clientes.deleteAll);

    ////

    router.post("/", cuentas.create);
   
    router.get("/", cuentas.findAll);
  
    router.get("/:id", cuentas.findOne);
  
    router.put("/:id", cuentas.update);
  
    router.delete("/:id", cuentas.delete);
  
    router.delete("/", cuentas.deleteAll);

    /////
    router.post("/", tipoCuentas.create);
   
    router.get("/", tipoCuentas.findAll);
  
    router.get("/:id", tipoCuentas.findOne);
  
    router.put("/:id", tipoCuentas.update);
  
    router.delete("/:id", tipoCuentas.delete);
  
    router.delete("/", tipoCuentas.deleteAll);

  
    app.use('/api/prueba', router);
  };