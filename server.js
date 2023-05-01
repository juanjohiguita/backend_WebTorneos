const express = require("express");
const mongoose = require("mongoose");
mongoose.set('autoIndex', true);

const app = express();

const rutasUsuarios = require("./routes/usuarios")
const rutasTorneos = require("./routes/torneos")
const rutasVotaciones = require("./routes/votaciones")
const rutasFormatos = require("./routes/formatos")

app.use(express.json());

require('dotenv').config();

try {
  mongoose.connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@orion.88flgmz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
  );
  app.listen(process.env.PORT, () => console.log(`Servidor funcionando en el puerto ${process.env.PORT}`));
} catch (error) {
  console.error(error);
  process.exit(1);
};


// For backend and express
const cors = require("cors");
app.use(cors());

app.use('/api',rutasUsuarios);
app.use('/api',rutasTorneos);
app.use('/api',rutasFormatos);
app.use('/api',rutasVotaciones);

