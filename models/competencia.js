const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const competenciaSchema = new Schema(
    {
        nombre_competencia:  {
            type:String
        },
        tipo_competencia: {
            type:String
        },
        ciudad: {
            type:String
        },
        fecha_inicio: {
            type:Date
        },
        fecha_finalizacion: {
            type:Date
        },
        numero_fechas: {
            type:Number
        },
        formato: {
            type: mongoose.Types.ObjectId
        },
        participantes: [{
            puntuacion_general: 
            {   type: Number,
                default:'0'
            },
            aka_participante: {
                type:String
            }
        }],
        jueces: [{
            id_juez: {
                type: mongoose.Types.ObjectId
            },
            aka_juez: {
                type: String
            }
        }],
        administradores: [{
            id_admin: {
                type: mongoose.Types.ObjectId
            },
            email_admin: {
                type:String,
                unique: true
            }
        }]
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Competencia = mongoose.model('Competencias', competenciaSchema);

module.exports = Competencia;