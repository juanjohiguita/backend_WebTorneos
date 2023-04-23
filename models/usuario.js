const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
  {
    nombre:  {
      type:String
    },
    apellido:  {
      type:String
    },
    email:  {
      type:String
    },
    password:  {
      type:String
    },
    aka:  {
      type:String
    },
    roles: 
    [{
      type: String,
      default:'normal'
    }],
  }
);

// Crear el modelo
const Usuario = mongoose.model('Usuarios', usuarioSchema);

module.exports = Usuario;