const express = require("express");
const mongoose = require("mongoose");

const rutasUsuarios = require("./routes/usuarios")
const rutasCompetencia = require("./routes/competencias")
const rutasVotacion = require("./routes/votaciones")
const rutasFormato = require("./routes/formatos")

const app = express();

const user = "admin"
const password = "boticol"
const dbName = "rap-rumble"

const start = async () => {
  console.log("Ejecuta ejecuta")
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@orion.88flgmz.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );
    app.listen(5000, () => console.log("Server started on port 5000 pero ya conectando siuuu"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};



// For backend and express
const cors = require("cors");
app.use(cors());
console.log("App listen at port 5000");
app.use(express.json());

app.use('/api',rutasUsuarios);
app.use('/api',rutasCompetencia);
app.use('/api',rutasFormato);
app.use('/api',rutasVotacion);



start();


