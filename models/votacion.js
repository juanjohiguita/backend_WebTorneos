const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const votacionSchema = new Schema(
    {
        nombre_competencia:  {
            type:String
        },
        numero_de_la_fecha: {
            type:String,
            default:'1'
        },
        fecha: {
            type:Date
        },
        nombre_participante_votado: {
            type:String
        },
        nombre_contrincante: {
            type:String
        },
        id_competencia: {
            type: mongoose.Types.ObjectId
        },
        id_formato: {
            type: mongoose.Types.ObjectId
        },
        rondas  : [{
            numero_ronda: 
            {   
                type: Number
            },
            nombre_ronda: {
                type:String
            },
            jueces: [{
                patrones: [{
                    numero_patron: 
                    {   type: Number
                    },
                    valoracion: {
                        type:String,
                        default:'0'
                    },
                }],
                id_juez: {
                    type: mongoose.Types.ObjectId
                },
                aka_juez: {
                    type: String
                }
            }]
        }]
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Votacion = mongoose.model('Votaciones', votacionSchema);

module.exports = Votacion;