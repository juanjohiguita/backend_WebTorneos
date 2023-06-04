const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const torneoSchema = new Schema(
    {
        nombre_torneo:  {
            type:String
        },
        tipo: {
            type:String
        },
        descripcion: {
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
        numero_participantes: {
            type:Number
        },
        participantes: [{
            puntuacion_general: {   
                type: Number
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
        email_admin: {
            type:String
        }
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Torneo = mongoose.model('Torneos', torneoSchema);

module.exports = Torneo;