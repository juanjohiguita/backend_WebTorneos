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
      type:String,
      unique: true
    },
    password:  {
      type:String,
      bcrypt: true
    },
    aka:  {
      type:String
    },
    roles: 
    [{
      type: String,
      default:'normal'
    }],
  },
  {
    timestamps:true
  }
);
usuarioSchema.plugin(require('mongoose-bcrypt'))
// Crear el modelo
const Usuario = mongoose.model('Usuarios',usuarioSchema);
module.exports = Usuario;