const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formatoSchema = new Schema(
    {
        nombre:  {
            type:String
        },
        votacion_minima: {
            type:Number
        },
        votacion_maxima: {
            type:Number
        },
        rondas: [{
            numero_ronda: 
            {   type: Number,
                default:'1'
            },
            nombre_ronda: {
                type:String
            },
            numero_patrones: 
            {   type: Number
            },
        }],
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Formato = mongoose.model('Formato', usuarioSchema);

module.exports = Formato;