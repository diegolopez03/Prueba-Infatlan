const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

//RUTAS
app.get("/", (req, res) => {
  res.json({ message: "App de prueba" });
});

require("./app/routes/index")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}.`);
});
