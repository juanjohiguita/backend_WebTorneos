const express = require("express");
const mongoose = require("mongoose");
mongoose.set('autoIndex', true);

const app = express();

const rutasUsuarios = require("./routes/usuarios")
const rutasCompetencia = require("./routes/competencias")
const rutasVotacion = require("./routes/votaciones")
const rutasFormato = require("./routes/formatos")


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
app.use(express.json());

app.use('/api',rutasUsuarios);
app.use('/api',rutasCompetencia);
app.use('/api',rutasFormato);
app.use('/api',rutasVotacion);

